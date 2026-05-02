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
    expect(payload.email).toBe('jane@example.com')
    expect(payload.timeline).toBe('3–6 months')
    expect(payload.agent).toBe('Yes — John Doe (Keller Williams)')
    expect(typeof payload.submitted_at).toBe('string')
  })

  test('honeypot field is present and hidden', async ({ page }) => {
    await page.goto('/open-house')
    const honeypot = page.locator('input[name="_gotcha"]')
    await expect(honeypot).toHaveCount(1)
    await expect(honeypot).toBeHidden()
    expect(await honeypot.getAttribute('tabindex')).toBe('-1')
  })
})
