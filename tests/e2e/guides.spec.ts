import { test, expect } from '@playwright/test'

test.describe('Free Guides', () => {
  test('/guides index lists all three guides with read-time', async ({ page }) => {
    await page.goto('/guides')
    await expect(page.locator('h1')).toContainText('DFW Real Estate Resources')
    await expect(page.getByRole('heading', { name: /DFW Luxury Buyer/i })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Pre-Listing Checklist/i })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Relocating to Dallas-Fort Worth/i })).toBeVisible()
    await expect(page.getByText(/min read/i).first()).toBeVisible()
  })

  test('clicking a guide card navigates to the guide page', async ({ page }) => {
    await page.goto('/guides')
    await page.getByRole('link', { name: /DFW Luxury Buyer/i }).click()
    await expect(page).toHaveURL(/\/guides\/dfw-buyer-guide$/)
    await expect(page.locator('h1')).toContainText('DFW Luxury Buyer')
  })

  test('buyer guide renders core content + JSON-LD + lead form', async ({ page }) => {
    await page.goto('/guides/dfw-buyer-guide')
    await expect(page.locator('h1')).toContainText('DFW Luxury Buyer')
    await expect(page.getByText(/Highland Park/).first()).toBeVisible()
    await expect(page.getByText(/off-market/i).first()).toBeVisible()
    await expect(page.getByText(/TREC One to Four/).first()).toBeVisible()
    // Lead form
    await expect(page.getByLabel(/Name/, { exact: false }).first()).toBeVisible()
    await expect(page.getByLabel(/Email/, { exact: false }).first()).toBeVisible()
    await expect(page.getByRole('button', { name: /Send Me The Guide/i }).first()).toBeVisible()
    // Article + Breadcrumb JSON-LD present
    const ldBlocks = await page.locator('script[type="application/ld+json"]').all()
    expect(ldBlocks.length).toBeGreaterThanOrEqual(2)
    const types = await Promise.all(ldBlocks.map(async (b) => {
      const txt = await b.textContent()
      return JSON.parse(txt || '{}')['@type']
    }))
    expect(types).toContain('Article')
    expect(types).toContain('BreadcrumbList')
  })

  test('seller checklist renders all three time horizons', async ({ page }) => {
    await page.goto('/guides/dfw-seller-checklist')
    await expect(page.locator('h1')).toContainText('Pre-Listing Checklist')
    await expect(page.getByRole('heading', { name: /90 Days Out/i })).toBeVisible()
    await expect(page.getByRole('heading', { name: /60 Days Out/i })).toBeVisible()
    await expect(page.getByRole('heading', { name: /30 Days Out/i })).toBeVisible()
    // CTA to home valuation
    await expect(page.getByRole('link', { name: /Get a Free CMA/i })).toHaveAttribute('href', '/home-valuation')
  })

  test('relocation guide has Mandarin + international sections', async ({ page }) => {
    await page.goto('/guides/relocating-to-dfw')
    await expect(page.locator('h1')).toContainText('Relocating to Dallas-Fort Worth')
    await expect(page.getByRole('heading', { name: /For International Buyers/i })).toBeVisible()
    await expect(page.getByRole('heading', { name: /For Mandarin-Speaking Families/i })).toBeVisible()
    await expect(page.getByText(/FIRPTA/)).toBeVisible()
    await expect(page.getByText(/Frisco ISD/).first()).toBeVisible()
    await expect(page.getByText(/中文/).first()).toBeVisible()
  })

  test('lead form submits successfully and shows success state', async ({ page }) => {
    // Mock Formspree to avoid real submissions to Colin's inbox
    await page.route('https://formspree.io/f/**', (route) =>
      route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ ok: true }) })
    )

    await page.goto('/guides/dfw-buyer-guide')
    const form = page.locator('form').first()
    await form.getByLabel(/Name/, { exact: false }).fill('Test User')
    await form.getByLabel(/Email/, { exact: false }).fill('test@example.com')
    await form.getByLabel(/Phone/, { exact: false }).fill('2145551234')
    await form.getByRole('button', { name: /Send Me The Guide/i }).click()
    await expect(page.getByText(/You're on the list/i)).toBeVisible()
  })

  test('lead form requires name and email', async ({ page }) => {
    await page.goto('/guides/dfw-buyer-guide')
    const form = page.locator('form').first()
    const nameInput = form.getByLabel(/Name/, { exact: false })
    const emailInput = form.getByLabel(/Email/, { exact: false })
    expect(await nameInput.getAttribute('required')).not.toBeNull()
    expect(await emailInput.getAttribute('required')).not.toBeNull()
  })

  test('lead form shows error when Formspree fails', async ({ page }) => {
    await page.route('https://formspree.io/f/**', (route) =>
      route.fulfill({ status: 500, contentType: 'application/json', body: JSON.stringify({ error: 'fail' }) })
    )
    await page.goto('/guides/dfw-buyer-guide')
    const form = page.locator('form').first()
    await form.getByLabel(/Name/, { exact: false }).fill('Test User')
    await form.getByLabel(/Email/, { exact: false }).fill('test@example.com')
    await form.getByRole('button', { name: /Send Me The Guide/i }).click()
    await expect(page.getByText(/Something went wrong/i)).toBeVisible()
  })

  test('phone input formats as user types', async ({ page }) => {
    await page.goto('/guides/dfw-buyer-guide')
    const phone = page.locator('form').first().getByLabel(/Phone/, { exact: false })
    await phone.fill('2145551234')
    await expect(phone).toHaveValue('(214) 555-1234')
  })
})
