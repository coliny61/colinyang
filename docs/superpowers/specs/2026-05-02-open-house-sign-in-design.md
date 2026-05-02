# Open House Virtual Sign-In — Design Spec

**Date:** 2026-05-02
**Status:** Approved — ready for implementation plan

## Goal

Replace paper sign-in sheets at Colin's open houses with a fast, mobile-first web form that captures visitor leads, surfaces representation status (working with an agent or not), and gives Colin a printable / scannable QR code to put on the entry table.

Primary motivation: **lead capture**, while still satisfying basic representation/procuring-cause hygiene.

## URLs

| URL | Purpose |
|---|---|
| `/open-house` | Public sign-in form (the page visitors land on) |
| `/open-house/print` | Agent-only print/QR page — shows the QR code, the URL, and a download-PNG button |

A `?property=<slug>` query string is supported but not required (only one property today; the form shows that property as a fixed header). Future-proofing only.

## Form Fields

Five fields, single page, no wizard. Required marked with `*`.

| # | Label | Type | Notes |
|---|---|---|---|
| 1 | Full Name * | text | |
| 2 | Phone Number * | tel | Auto-formatted `(XXX) XXX-XXXX`; client-side validation for 10 digits |
| 3 | Email * | email | Standard email validation |
| 4 | Are you currently working with a real estate agent? * | radio | `No` / `Yes`; if `Yes`, a conditional text field appears: "Agent's name (optional)" |
| 5 | What's your timeline to buy? * | dropdown | `Now — actively looking` / `1–3 months` / `3–6 months` / `6–12 months` / `Just browsing` |

**Property header (not a field):** Above the form, display "Signing in for: **2609 Holland Court, Celina TX 75009**" so visitors know what they're signing in to. Sourced from a small lookup keyed by the slug `holland-ct`.

**Submit button:** "Sign In →", red (`#D52E28`), full-width on mobile.

**Privacy line below the submit button (small gray text):**
> *Your info is sent only to Colin Yang at Bray Real Estate Group. We don't share or sell visitor information.*

## Submission Flow

- Form posts to existing Formspree endpoint `xqebdqqw` (same one used by other forms).
- `_subject` field: `Open House Sign-In — 2609 Holland Court — <Visitor Name>` so Colin can filter/search his inbox by "Open House Sign-In".
- Honeypot field included (Formspree's standard `_gotcha`).
- Email body fields: Property, Visitor, Phone, Email, Timeline, Agent (Yes/No + name if provided), Submitted timestamp.
- No backend / no database — submissions live in `colin@brayreg.com` inbox + Formspree's dashboard.

## Confirmation Screen

After successful submission, replace the form with:

> # Thanks, [First Name]!
> Take your time looking around. Colin's here if you have questions, or text/call him anytime at **(469) 256-1088**.
>
> [View full listing details →](/holland-ct)

`[First Name]` = first whitespace-separated token of the submitted Full Name (e.g., "Jane Smith" → "Jane"). If the name is empty (shouldn't happen — required field — but defensively): show "Thanks!" with no name.

Same dark theme, centered, with Colin's headshot at the top.

## QR Code & Print Page (`/open-house/print`)

A separate page Colin pulls up on his iPad / phone at the open house, OR prints to PDF for a physical sign on the entry table.

**Layout:**
- Centered, dark theme matching the rest of the site
- Big QR code (~400px on screen, scales for print) generated client-side via `qrcode.react`
- QR encodes the absolute URL `https://colinyang.com/open-house`
- Below QR: large headline **"Scan to Sign In"**, then the typed URL `colinyang.com/open-house` as a fallback for people who can't scan
- Below that: Colin's name, photo, and phone number for branding
- A small **"Download PNG"** button (visible on screen, hidden when printing via `print:hidden` CSS) that exports the QR as a standalone PNG for embedding in flyers / yard sign riders
- Print CSS: hide nav, hide button, set white background, ensure QR prints crisp at any size

**Discoverability:** This page is not linked from the main site nav — it's an agent-only utility Colin keeps bookmarked.

## Listing Page Integration (already shipped)

The Holland Ct listing page (`/holland-ct`) already has CTAs that point to `/open-house?property=holland-ct`:
- Hero "Open House Sign-In" button
- Red open-house banner below the specs bar with a "Sign In Online →" CTA
- CTA banner at the bottom

These exist as of commit-pending; the form they point to needs to exist.

## Future-Proofing

- Form architecture (the property lookup) is keyed by slug, so adding a second property later means: (a) add the slug + display info to the lookup map, and (b) re-introduce the property dropdown when there's more than one entry. ~10 lines of work.
- The same `/open-house` URL stays valid forever — Colin's QR code never needs to be reprinted as listings change.

## Out of Scope (explicitly cut for v1)

- Pre-approval status field
- "How did you hear about this open house?" source field
- Free-text notes / feedback field
- Multi-step wizard
- Visitor count dashboard for Colin
- Per-open-house event records (each submission stands on its own — Colin reads the email, that's it)
- Backend / Supabase / database
- IABS attestation checkbox (TX doesn't require it for unrepresented walk-ins; the agent question handles this)
- SMS auto-reply / drip campaign on submission

## Non-Functional Requirements

- Mobile-first; tested at 375px width minimum
- Server page.tsx (metadata, dark theme shell) + client `OpenHouseForm.tsx` (interactive) — matches existing form pattern in `/lease-inquiry`, `/new-client-inquiry`, etc.
- Canonical URL set to `https://colinyang.com/open-house`
- `noindex` on `/open-house/print` (it's an agent utility, no SEO value)
- Reuses `lib/form-utils.ts` for Formspree submission helpers
- New `lib/open-house-properties.ts` lookup map for property metadata

## Testing

Add to existing Playwright suite (`tests/e2e/`):
- New `open-house.spec.ts`:
  - Form renders with property header showing Holland Ct
  - Required-field validation prevents submission
  - Conditional agent-name field appears only when "Yes" selected
  - Successful submission (Formspree mocked) shows confirmation screen
  - `/open-house/print` page renders the QR code as an SVG/canvas element
  - `/holland-ct` page CTAs link to `/open-house?property=holland-ct`

## Files to Create / Modify

**Create:**
- `app/open-house/page.tsx` — server component, metadata + dark shell
- `app/open-house/OpenHouseForm.tsx` — client component, the form
- `app/open-house/print/page.tsx` — agent-only print/QR page
- `lib/open-house-properties.ts` — slug → property metadata lookup
- `tests/e2e/open-house.spec.ts` — Playwright tests

**Modify:**
- `package.json` — add `qrcode.react` dependency
- `app/sitemap.ts` — add `/open-house` (priority ~0.6, low priority since it's a utility not a marketing page)

**Already done (in this session):**
- `lib/available-listings.ts` — Holland Ct added
- `app/holland-ct/*` — full listing page with open-house CTAs already wired
- `public/images/holland-ct/*` — 34 photos optimized
