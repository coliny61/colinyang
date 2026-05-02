# Open House Sign-In Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a lean virtual open-house sign-in page at `/open-house` that posts to Formspree, plus a printable QR-code page at `/open-house/print` so Colin can put a sign on the entry table at every open house.

**Architecture:** Standard Next.js 14 App Router pattern that already exists in this repo: server `page.tsx` for metadata + dark shell, client `*.tsx` for interactive form. Submissions reuse the existing `lib/form-utils.ts` Formspree helper. Property metadata lives in a new `lib/open-house-properties.ts` lookup keyed by slug so adding a second property later is a 1-line change. QR code rendered client-side with `qrcode.react` (canvas mode so we can `.toDataURL()` for PNG download). No backend, no database — matches the rest of the site.

**Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS 4, Formspree (`xqebdqqw`), `qrcode.react` (new dep), Playwright for E2E.

---

## File Structure

**Create:**
- `lib/open-house-properties.ts` — slug → display info lookup, single source of truth for "which properties have an open house sign-in"
- `app/open-house/page.tsx` — server component, metadata + dark shell with `<Suspense>` around the form (needed because the form uses `useSearchParams`)
- `app/open-house/OpenHouseForm.tsx` — client component, the form itself + thank-you screen
- `app/open-house/print/page.tsx` — server component, metadata (`noindex`) + dark shell
- `app/open-house/print/QRPrintBlock.tsx` — client component, QR rendering + PNG download
- `tests/e2e/open-house.spec.ts` — Playwright tests (rendering, validation, conditional fields, submission success/failure, phone formatting, print page, listing CTAs)

**Modify:**
- `package.json` — add `qrcode.react` dep
- `app/sitemap.ts` — add `/open-house` (NOT `/open-house/print` — noindexed)

**Already shipped (no changes needed):**
- `app/holland-ct/*` — listing page, CTAs already point to `/open-house?property=holland-ct`
- `lib/available-listings.ts` — Holland Ct entry exists
- `lib/form-utils.ts` — `FORMSPREE_ENDPOINT` and `formatPhone` exported

---

## Task 1: Scaffold dependencies + property lookup

**Files:**
- Modify: `package.json` (add dep)
- Create: `lib/open-house-properties.ts`

- [ ] **Step 1: Install qrcode.react**

Run: `npm install qrcode.react@^4.1.0`
Expected: dep added to `package.json`, `package-lock.json` updated.

- [ ] **Step 2: Verify import resolves**

Run: `node -e "console.log(require('qrcode.react'))"`
Expected: prints an object with `QRCodeCanvas` and `QRCodeSVG` properties (no error). If it errors with "Cannot find module", the install failed.

- [ ] **Step 3: Create the property lookup module**

Create `/Users/colinyang/Developer/colin-yang-website/lib/open-house-properties.ts`:

```ts
export type OpenHouseProperty = {
  slug: string
  address: string
  cityStateZip: string
  detailsHref: string
}

export const OPEN_HOUSE_PROPERTIES: Record<string, OpenHouseProperty> = {
  'holland-ct': {
    slug: 'holland-ct',
    address: '2609 Holland Court',
    cityStateZip: 'Celina, TX 75009',
    detailsHref: '/holland-ct',
  },
}

// The property used when no ?property= query param is provided, or when an
// unknown slug is passed. Keep this pointing at whichever property is
// currently being marketed in the QR code on Colin's entry table.
export const DEFAULT_PROPERTY_SLUG = 'holland-ct'
```

- [ ] **Step 4: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json lib/open-house-properties.ts
git commit -m "$(cat <<'EOF'
Scaffold open-house property lookup + add qrcode.react dep

Adds lib/open-house-properties.ts as the single source of truth for
which properties accept open-house sign-ins. Currently just Holland Ct.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 2: Build /open-house form (page + component) with TDD

**Files:**
- Create: `app/open-house/page.tsx`
- Create: `app/open-house/OpenHouseForm.tsx`
- Create: `tests/e2e/open-house.spec.ts`

This task uses TDD: write all the form's E2E tests first, watch them fail (because the page doesn't exist yet), then implement the page + form to make them pass.

- [ ] **Step 1: Write failing Playwright tests for the form**

Create `/Users/colinyang/Developer/colin-yang-website/tests/e2e/open-house.spec.ts`:

```ts
import { test, expect } from '@playwright/test'

test.describe('Open House Sign-In', () => {
  test('renders with property header showing Holland Ct', async ({ page }) => {
    await page.goto('/open-house')
    await expect(page.locator('h1')).toContainText(/Welcome/i)
    await expect(page.getByText('2609 Holland Court')).toBeVisible()
    await expect(page.getByText(/Celina, TX 75009/)).toBeVisible()
  })

  test('?property=holland-ct also resolves to Holland Ct', async ({ page }) => {
    await page.goto('/open-house?property=holland-ct')
    await expect(page.getByText('2609 Holland Court')).toBeVisible()
  })

  test('unknown ?property= falls back to default property', async ({ page }) => {
    await page.goto('/open-house?property=nonexistent-slug')
    await expect(page.getByText('2609 Holland Court')).toBeVisible()
  })

  test('required fields have the required attribute set', async ({ page }) => {
    await page.goto('/open-house')
    const fullName = page.getByLabel(/Full Name/)
    const phone = page.getByLabel(/^Phone/)
    const email = page.getByLabel(/^Email/)
    const timeline = page.getByLabel(/timeline to buy/i)
    expect(await fullName.getAttribute('required')).not.toBeNull()
    expect(await phone.getAttribute('required')).not.toBeNull()
    expect(await email.getAttribute('required')).not.toBeNull()
    expect(await timeline.getAttribute('required')).not.toBeNull()
  })

  test('agent-name field appears only when "Yes" is selected', async ({ page }) => {
    await page.goto('/open-house')
    const agentNameLocator = page.getByLabel(/agent.+name/i)
    await expect(agentNameLocator).toHaveCount(0)
    await page.getByLabel('Yes', { exact: true }).check()
    await expect(agentNameLocator).toBeVisible()
    await page.getByLabel('No', { exact: true }).check()
    await expect(agentNameLocator).toHaveCount(0)
  })

  test('phone input formats as user types', async ({ page }) => {
    await page.goto('/open-house')
    const phone = page.getByLabel(/^Phone/)
    await phone.fill('4695551234')
    await expect(phone).toHaveValue('(469) 555-1234')
  })

  test('successful submission shows thank-you screen with first name', async ({ page }) => {
    await page.route('https://formspree.io/f/**', (route) =>
      route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ ok: true }) })
    )
    await page.goto('/open-house')
    await page.getByLabel(/Full Name/).fill('Jane Smith')
    await page.getByLabel(/^Phone/).fill('4695551234')
    await page.getByLabel(/^Email/).fill('jane@example.com')
    await page.getByLabel('No', { exact: true }).check()
    await page.getByLabel(/timeline to buy/i).selectOption({ label: '1–3 months' })
    await page.getByRole('button', { name: /Sign In/i }).click()
    await expect(page.getByText(/Thanks, Jane/i)).toBeVisible()
    await expect(page.getByRole('link', { name: /View Full Listing Details/i })).toBeVisible()
  })

  test('failed submission shows error message and does not show thank-you', async ({ page }) => {
    await page.route('https://formspree.io/f/**', (route) =>
      route.fulfill({ status: 500, contentType: 'application/json', body: JSON.stringify({ error: 'fail' }) })
    )
    await page.goto('/open-house')
    await page.getByLabel(/Full Name/).fill('Jane Smith')
    await page.getByLabel(/^Phone/).fill('4695551234')
    await page.getByLabel(/^Email/).fill('jane@example.com')
    await page.getByLabel('No', { exact: true }).check()
    await page.getByLabel(/timeline to buy/i).selectOption({ label: '1–3 months' })
    await page.getByRole('button', { name: /Sign In/i }).click()
    await expect(page.getByText(/Something went wrong/i)).toBeVisible()
    await expect(page.getByText(/Thanks, Jane/i)).toHaveCount(0)
  })

  test('submission posts expected payload to Formspree', async ({ page }) => {
    let capturedBody: string | null = null
    await page.route('https://formspree.io/f/**', async (route) => {
      capturedBody = route.request().postData()
      await route.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' })
    })
    await page.goto('/open-house')
    await page.getByLabel(/Full Name/).fill('Jane Smith')
    await page.getByLabel(/^Phone/).fill('4695551234')
    await page.getByLabel(/^Email/).fill('JANE@example.com')
    await page.getByLabel('Yes', { exact: true }).check()
    await page.getByLabel(/agent.+name/i).fill('John Doe (Keller Williams)')
    await page.getByLabel(/timeline to buy/i).selectOption({ label: '3–6 months' })
    await page.getByRole('button', { name: /Sign In/i }).click()
    await expect(page.getByText(/Thanks, Jane/i)).toBeVisible()
    expect(capturedBody).not.toBeNull()
    const payload = JSON.parse(capturedBody!)
    expect(payload._subject).toContain('Open House Sign-In')
    expect(payload._subject).toContain('2609 Holland Court')
    expect(payload._subject).toContain('Jane Smith')
    expect(payload.property).toBe('2609 Holland Court')
    expect(payload.property_slug).toBe('holland-ct')
    expect(payload.visitor).toBe('Jane Smith')
    expect(payload.phone).toBe('(469) 555-1234')
    expect(payload.email).toBe('jane@example.com') // lowercased
    expect(payload.timeline).toBe('3–6 months')
    expect(payload.agent).toBe('Yes — John Doe (Keller Williams)')
    expect(typeof payload.submitted_at).toBe('string')
  })
})
```

- [ ] **Step 2: Run the tests to verify they fail**

Run: `npx playwright test tests/e2e/open-house.spec.ts`
Expected: all tests fail (the page doesn't exist yet — most failures will be 404s on `/open-house`).

- [ ] **Step 3: Create the server page**

Create `/Users/colinyang/Developer/colin-yang-website/app/open-house/page.tsx`:

```tsx
import { Suspense } from 'react'
import { Metadata } from 'next'
import OpenHouseForm from './OpenHouseForm'

export const metadata: Metadata = {
  title: 'Open House Sign-In | Colin Yang — DFW Real Estate',
  description:
    "Welcome to Colin Yang's open house. Sign in below so we can follow up with property details and answer any questions.",
  alternates: { canonical: 'https://colinyang.com/open-house' },
}

export default function OpenHousePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <div className="section">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-10">
            <div className="badge mx-auto mb-6">Open House Sign-In</div>
            <h1 className="text-white mb-4">Welcome — Glad You&apos;re Here</h1>
            <p className="text-lg text-white/70">
              Quick sign-in so Colin can follow up with property details, answer questions,
              or send comparable listings if you&apos;re interested.
            </p>
          </div>

          <Suspense
            fallback={
              <div className="bg-[#141414] border border-[#2a2a2a] p-8 text-center text-white/50">
                Loading form...
              </div>
            }
          >
            <OpenHouseForm />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 4: Create the client form component**

Create `/Users/colinyang/Developer/colin-yang-website/app/open-house/OpenHouseForm.tsx`:

```tsx
'use client'

import { useState, FormEvent } from 'react'
import { useSearchParams } from 'next/navigation'
import { FORMSPREE_ENDPOINT, formatPhone } from '@/lib/form-utils'
import { OPEN_HOUSE_PROPERTIES, DEFAULT_PROPERTY_SLUG } from '@/lib/open-house-properties'

const TIMELINE_OPTIONS = [
  'Now — actively looking',
  '1–3 months',
  '3–6 months',
  '6–12 months',
  'Just browsing',
]

export default function OpenHouseForm() {
  const searchParams = useSearchParams()

  const requestedSlug = searchParams.get('property')
  const propertySlug =
    requestedSlug && OPEN_HOUSE_PROPERTIES[requestedSlug]
      ? requestedSlug
      : DEFAULT_PROPERTY_SLUG
  const property = OPEN_HOUSE_PROPERTIES[propertySlug]

  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [hasAgent, setHasAgent] = useState<string>('')
  const [agentName, setAgentName] = useState('')
  const [timeline, setTimeline] = useState('')

  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')

    const phoneDigits = phone.replace(/\D/g, '')
    if (phoneDigits.length !== 10) {
      setError('Please enter a valid 10-digit phone number.')
      return
    }

    setSubmitting(true)

    const formData = {
      _subject: `Open House Sign-In — ${property.address} — ${fullName}`,
      property: property.address,
      property_slug: propertySlug,
      visitor: fullName,
      phone,
      email: email.toLowerCase(),
      timeline,
      agent:
        hasAgent === 'yes'
          ? agentName.trim()
            ? `Yes — ${agentName.trim()}`
            : 'Yes (no agent name provided)'
          : 'No',
      submitted_at: new Date().toISOString(),
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    const firstName = fullName.trim().split(/\s+/)[0] || ''
    return (
      <div className="bg-[#141414] border border-[#2a2a2a] p-8 md:p-10 text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#D52E28]/10 flex items-center justify-center">
          <svg className="w-8 h-8 text-[#D52E28]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl text-white font-semibold mb-3">
          Thanks{firstName && `, ${firstName}`}!
        </h2>
        <p className="text-white/70 mb-6">
          Take your time looking around. Colin&apos;s here if you have questions, or text/call him
          anytime at{' '}
          <a href="tel:4692561088" className="text-[#D52E28] hover:underline">
            (469) 256-1088
          </a>
          .
        </p>
        <a href={property.detailsHref} className="btn-secondary inline-flex items-center gap-2">
          View Full Listing Details →
        </a>
      </div>
    )
  }

  return (
    <div className="bg-[#141414] border border-[#2a2a2a] p-6 md:p-10">
      <div className="mb-6 pb-6 border-b border-[#2a2a2a]">
        <div className="text-xs text-[#D52E28] uppercase tracking-widest font-semibold mb-2">
          Signing in for
        </div>
        <div className="text-white text-lg md:text-xl font-semibold">{property.address}</div>
        <div className="text-white/60 text-sm">{property.cityStateZip}</div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot */}
        <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

        <div>
          <label htmlFor="full_name" className="block text-sm font-medium text-white mb-2">
            Full Name <span className="text-[#D52E28]">*</span>
          </label>
          <input
            type="text"
            id="full_name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            minLength={2}
            maxLength={120}
            className="form-input"
            placeholder="Jane Smith"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
              Phone <span className="text-[#D52E28]">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(formatPhone(e.target.value))}
              required
              className="form-input"
              placeholder="(469) 555-1234"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              Email <span className="text-[#D52E28]">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
              placeholder="jane@example.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-3">
            Are you currently working with a real estate agent?{' '}
            <span className="text-[#D52E28]">*</span>
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            {[
              { value: 'no', label: 'No' },
              { value: 'yes', label: 'Yes' },
            ].map((opt) => (
              <label
                key={opt.value}
                className={`flex items-center gap-3 px-5 py-3 border cursor-pointer transition-all flex-1 justify-center ${
                  hasAgent === opt.value
                    ? 'border-[#D52E28] bg-[#D52E28]/5'
                    : 'border-[#2a2a2a] hover:border-white/30'
                }`}
              >
                <input
                  type="radio"
                  name="has_agent"
                  value={opt.value}
                  checked={hasAgent === opt.value}
                  onChange={(e) => setHasAgent(e.target.value)}
                  className="form-checkbox"
                  required
                />
                <span className="text-white/80">{opt.label}</span>
              </label>
            ))}
          </div>
        </div>

        {hasAgent === 'yes' && (
          <div>
            <label htmlFor="agent_name" className="block text-sm font-medium text-white mb-2">
              Your agent&apos;s name (optional)
            </label>
            <input
              type="text"
              id="agent_name"
              value={agentName}
              onChange={(e) => setAgentName(e.target.value)}
              maxLength={120}
              className="form-input"
              placeholder="John Doe, Keller Williams"
            />
          </div>
        )}

        <div>
          <label htmlFor="timeline" className="block text-sm font-medium text-white mb-2">
            What&apos;s your timeline to buy? <span className="text-[#D52E28]">*</span>
          </label>
          <select
            id="timeline"
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
            required
            className="form-select"
          >
            <option value="">Select a timeline</option>
            {TIMELINE_OPTIONS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        {error && (
          <div className="p-4 border border-red-500/40 bg-red-500/10 text-red-300 text-sm rounded flex items-start gap-3">
            <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="btn-primary w-full justify-center mt-4 disabled:!bg-slate-400 disabled:!text-slate-700 disabled:!border-slate-400 disabled:cursor-not-allowed"
        >
          {submitting ? (
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Signing In...
            </span>
          ) : (
            'Sign In →'
          )}
        </button>

        <p className="text-xs text-white/40 text-center">
          Your info is sent only to Colin Yang at Bray Real Estate Group. We don&apos;t share or sell
          visitor information.
        </p>
      </form>
    </div>
  )
}
```

- [ ] **Step 5: Run the tests to verify they pass**

Run: `npx playwright test tests/e2e/open-house.spec.ts`
Expected: 9 tests pass. If any fail, read the error and fix the form code (do NOT loosen the test to match a buggy implementation).

- [ ] **Step 6: Verify the production build still works**

Run: `npm run build`
Expected: build succeeds; `/open-house` appears in the route list as `○ /open-house`.

- [ ] **Step 7: Commit**

```bash
git add app/open-house/page.tsx app/open-house/OpenHouseForm.tsx tests/e2e/open-house.spec.ts
git commit -m "$(cat <<'EOF'
Add /open-house virtual sign-in form

Five-field form (name, phone, email, working-with-agent + optional
agent name, timeline) keyed to a property header. Posts to existing
Formspree endpoint with subject 'Open House Sign-In — <address> —
<name>' so Colin can filter his inbox. Conditional agent-name field
only renders when 'Yes' is selected. Thank-you screen pulls first
name from the submitted full name.

Tests cover: rendering, ?property= resolution + fallback, required
attributes, conditional agent field, phone formatting, success +
failure submission paths, and the Formspree payload shape.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 3: Build /open-house/print page with QR code

**Files:**
- Create: `app/open-house/print/page.tsx`
- Create: `app/open-house/print/QRPrintBlock.tsx`
- Modify: `tests/e2e/open-house.spec.ts` (add 2 tests)

- [ ] **Step 1: Add failing tests for the print page**

Append the following to `tests/e2e/open-house.spec.ts` inside the existing `test.describe('Open House Sign-In', ...)` block (just before the closing `})` of the describe):

```ts
  test('print page renders QR canvas + URL fallback + branding', async ({ page }) => {
    await page.goto('/open-house/print')
    await expect(page.locator('h1')).toContainText(/Scan to Sign In/i)
    await expect(page.getByText('colinyang.com/open-house')).toBeVisible()
    await expect(page.locator('canvas')).toBeVisible()
    await expect(page.getByText('Colin Yang')).toBeVisible()
    await expect(page.getByText(/\(469\) 256-1088/)).toBeVisible()
  })

  test('print page is noindex', async ({ page }) => {
    await page.goto('/open-house/print')
    const robots = await page.locator('meta[name="robots"]').getAttribute('content')
    expect(robots).toMatch(/noindex/i)
  })

  test('Holland Ct CTAs link to /open-house', async ({ page }) => {
    await page.goto('/holland-ct')
    const links = page.getByRole('link', { name: /Open House Sign-In/i })
    expect(await links.count()).toBeGreaterThanOrEqual(1)
    const href = await links.first().getAttribute('href')
    expect(href).toContain('/open-house')
  })
```

- [ ] **Step 2: Run the new tests to verify they fail**

Run: `npx playwright test tests/e2e/open-house.spec.ts -g "print page|Holland Ct CTAs"`
Expected: all 3 fail (404s on `/open-house/print` for the first two; the Holland Ct CTAs test may already pass if the existing listing CTAs are wired correctly — that's fine, leave it).

- [ ] **Step 3: Create the print page server component**

Create `/Users/colinyang/Developer/colin-yang-website/app/open-house/print/page.tsx`:

```tsx
import { Metadata } from 'next'
import QRPrintBlock from './QRPrintBlock'

export const metadata: Metadata = {
  title: 'Open House QR Code (Print) | Colin Yang',
  robots: { index: false, follow: false },
}

export default function OpenHousePrintPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] print:bg-white">
      <div className="section">
        <QRPrintBlock />
      </div>
    </div>
  )
}
```

- [ ] **Step 4: Create the QR print block client component**

Create `/Users/colinyang/Developer/colin-yang-website/app/open-house/print/QRPrintBlock.tsx`:

```tsx
'use client'

import { useRef } from 'react'
import { QRCodeCanvas } from 'qrcode.react'
import Image from 'next/image'

const SIGN_IN_URL = 'https://colinyang.com/open-house'

export default function QRPrintBlock() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  function downloadPng() {
    const canvas = containerRef.current?.querySelector('canvas')
    if (!canvas) return
    const url = canvas.toDataURL('image/png')
    const a = document.createElement('a')
    a.href = url
    a.download = 'open-house-qr.png'
    a.click()
  }

  return (
    <div className="container mx-auto max-w-2xl text-center print:max-w-full">
      <div className="bg-[#141414] border border-[#2a2a2a] p-10 print:bg-white print:border-0">
        <div className="text-xs text-[#D52E28] uppercase tracking-widest font-semibold mb-3 print:text-black">
          Open House
        </div>
        <h1 className="text-white text-3xl md:text-4xl mb-2 print:text-black">
          Scan to Sign In
        </h1>
        <p className="text-white/60 text-sm mb-8 print:text-gray-700">
          Or visit{' '}
          <span className="font-mono text-white print:text-black">colinyang.com/open-house</span>
        </p>

        <div ref={containerRef} className="inline-block bg-white p-6 mb-8">
          <QRCodeCanvas value={SIGN_IN_URL} size={400} level="H" includeMargin={false} />
        </div>

        <div className="border-t border-[#2a2a2a] pt-6 print:border-gray-300">
          <div className="flex items-center justify-center gap-4">
            <Image
              src="/images/colin-headshot.jpg"
              alt="Colin Yang"
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
            <div className="text-left">
              <div className="text-white font-semibold print:text-black">Colin Yang</div>
              <div className="text-white/60 text-sm print:text-gray-700">
                Bray Real Estate Group · (469) 256-1088
              </div>
            </div>
          </div>
        </div>

        <button onClick={downloadPng} className="btn-secondary mt-8 print:hidden">
          Download QR as PNG
        </button>
      </div>
    </div>
  )
}
```

- [ ] **Step 5: Run the print page tests to verify they pass**

Run: `npx playwright test tests/e2e/open-house.spec.ts -g "print page|Holland Ct CTAs"`
Expected: all 3 pass.

- [ ] **Step 6: Verify the build still passes**

Run: `npm run build`
Expected: build succeeds; `/open-house/print` appears in route list. The QRPrintBlock will compile as a client component (`'use client'`).

- [ ] **Step 7: Commit**

```bash
git add app/open-house/print/page.tsx app/open-house/print/QRPrintBlock.tsx tests/e2e/open-house.spec.ts
git commit -m "$(cat <<'EOF'
Add /open-house/print page with QR code + PNG download

Agent-only print/QR utility (noindex). Renders a 400px QR encoding
https://colinyang.com/open-house plus a typed URL fallback, Colin's
branding, and a Download-PNG button (hidden when printing). Print
CSS swaps the dark theme for white.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 4: Add /open-house to sitemap

**Files:**
- Modify: `app/sitemap.ts`

`/open-house/print` is intentionally excluded — it's noindex and has no SEO value.

- [ ] **Step 1: Add the sitemap entry**

Modify `/Users/colinyang/Developer/colin-yang-website/app/sitemap.ts`. Find the existing line:

```ts
    { url: `${baseUrl}/lets-connect`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
```

Add this line directly after it:

```ts
    { url: `${baseUrl}/open-house`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
```

(Priority 0.5 — it's a utility/conversion page, not a marketing page; we want it indexed for direct typing of the URL but not competing with listing pages for ranking.)

- [ ] **Step 2: Verify the build picks it up**

Run: `npm run build && grep -c open-house .next/server/app/sitemap.xml.body 2>/dev/null || curl -s http://localhost:3001/sitemap.xml 2>/dev/null | grep -c open-house || echo "not running locally — sitemap will be regenerated on Vercel"`

Easier alternative — start dev server and curl:
```bash
npm run dev &
sleep 5
curl -s http://localhost:3001/sitemap.xml | grep open-house
kill %1
```
Expected: one `<loc>https://colinyang.com/open-house</loc>` line in the output.

- [ ] **Step 3: Commit**

```bash
git add app/sitemap.ts
git commit -m "$(cat <<'EOF'
Add /open-house to sitemap

Print page intentionally excluded — it's a noindex agent utility.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 5: Final verification + push

- [ ] **Step 1: Run the full Playwright suite**

Run: `npm test`
Expected: all tests pass (existing 31 + 12 new from this plan = 43 total). If any pre-existing tests fail, read the failure — it should be unrelated to this change (the plan only adds new files and one sitemap line).

- [ ] **Step 2: Manual smoke test in browser**

Run: `npm run dev` (default port 3001 or 3002)

Then in your browser, verify each of these by hand:

1. Visit `http://localhost:3001/open-house` — page loads, shows "2609 Holland Court" header, all 5 fields render, "Yes" reveals agent-name input, "No" hides it.
2. Visit `http://localhost:3001/open-house?property=holland-ct` — same as above (param-resolved).
3. Visit `http://localhost:3001/open-house?property=garbage` — falls back to Holland Ct.
4. Submit the form (with a test email — Formspree will send it to colin@brayreg.com, so use a recognizable test name like "TEST DELETE ME"). Verify thank-you screen shows "Thanks, [first name]!" and the "View Full Listing Details" link goes to `/holland-ct`.
5. Visit `http://localhost:3001/open-house/print` — QR code renders, "Scan to Sign In" headline visible, URL `colinyang.com/open-house` printed below, Colin's headshot + name + phone shown.
6. Click "Download QR as PNG" — a file `open-house-qr.png` downloads. Open it, scan it with your phone, confirm it routes to `colinyang.com/open-house`.
7. Use browser print preview (Cmd+P) on `/open-house/print` — preview shows white background, no nav, QR is large and centered, "Download" button is hidden.
8. Visit `http://localhost:3001/holland-ct` — three "Open House Sign-In" CTAs (hero, red banner, bottom CTA) all click through to `/open-house?property=holland-ct`.

Stop the dev server when done.

- [ ] **Step 3: Push to main**

```bash
git push origin main
```

Vercel will pick up the commits and deploy automatically (1–2 min). After deploy, sanity-check on the live site at `https://colinyang.com/open-house` and `https://colinyang.com/open-house/print`.

- [ ] **Step 4: Test the live QR code**

Open `https://colinyang.com/open-house/print` on a laptop or desktop browser. Use your phone's camera to scan the QR code. Confirm it opens `https://colinyang.com/open-house` on your phone and the form is mobile-friendly. This is the actual live test of "what visitors at the open house will experience."

---

## Self-Review Notes

Spec coverage check:
- ✅ Five-field form (name, phone, email, agent y/n + name, timeline) — Task 2
- ✅ Property header sourced from a slug-keyed lookup, ?property= param supported with fallback — Tasks 1 + 2
- ✅ Formspree submission with subject line `Open House Sign-In — <address> — <name>` and the documented payload — Task 2 (verified by the payload-shape test)
- ✅ Honeypot — Task 2 (the `_gotcha` hidden input)
- ✅ Thank-you screen with first-name extraction + view-listing link — Task 2
- ✅ Privacy line below submit — Task 2
- ✅ `/open-house/print` page with QR + typed URL fallback + branding + PNG download + print CSS — Task 3
- ✅ `/open-house/print` is noindex — Task 3 (`metadata.robots: { index: false, follow: false }`)
- ✅ Sitemap includes `/open-house` only (not `/print`) — Task 4
- ✅ Listing CTA verification — Task 3 (added test) + Task 5 (manual)
- ✅ Tests for all stated cases — Task 2 (9 tests) + Task 3 (3 tests)

Placeholder scan: no TBDs, every step has the actual code or command.

Type consistency: `OPEN_HOUSE_PROPERTIES` and `DEFAULT_PROPERTY_SLUG` defined in Task 1, imported the same way in Task 2's form. `FORMSPREE_ENDPOINT` and `formatPhone` come from existing `lib/form-utils.ts`. `QRCodeCanvas` is the documented export of `qrcode.react`.

Ambiguity check: `1–3 months` etc use the en-dash (`–`, U+2013), not a hyphen — kept consistent between the form's `TIMELINE_OPTIONS` array and the test's `selectOption({ label: ... })` call so `selectOption` matches by exact label.
