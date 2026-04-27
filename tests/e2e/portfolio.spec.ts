import { test, expect } from '@playwright/test'

test.describe('Portfolio', () => {
  test('portfolio index lists all 13 properties', async ({ page }) => {
    await page.goto('/portfolio')
    await expect(page.locator('h1')).toContainText("Properties I've Sold")
    // 13 property cards (11 original + 2 new)
    const cards = page.locator('a[href^="/portfolio/"]')
    await expect(cards).toHaveCount(13)
  })

  test('new portfolio entries appear with photos', async ({ page }) => {
    await page.goto('/portfolio')
    // Thornton + Windy Crest with their photos
    await expect(page.getByRole('link', { name: /2510 Thornton Road/i })).toBeVisible()
    await expect(page.getByRole('link', { name: /9219 Windy Crest Drive/i })).toBeVisible()
    const thorntonImg = page.locator('img[alt="2510 Thornton Road"]')
    await expect(thorntonImg).toBeVisible()
  })

  test('properties that previously had no photos now have thumbnails', async ({ page }) => {
    await page.goto('/portfolio')
    for (const addr of [
      '2611 Hondo Avenue',
      '8100 Rincon Street',
      '2209 Tralee Circle',
      '5734 Oram Street',
      '7304 Collin McKinney Parkway',
    ]) {
      await expect(page.locator(`img[alt="${addr}"]`)).toBeVisible()
    }
  })

  test('404 Warwick Boulevard remains placeholder (no photo found upstream)', async ({ page }) => {
    await page.goto('/portfolio')
    // No img with this alt — should fall back to placeholder svg
    await expect(page.locator('img[alt="404 Warwick Boulevard"]')).toHaveCount(0)
  })

  test('Thornton detail page renders with image, breadcrumb + listing JSON-LD', async ({ page }) => {
    await page.goto('/portfolio/2510-thornton-rd')
    await expect(page.locator('h1')).toContainText('2510 Thornton Rd')
    await expect(page.getByText(/Austin, Texas/)).toBeVisible()
    await expect(page.locator('img[alt*="2510 Thornton"]').first()).toBeVisible()
    // Check JSON-LD types
    const ldBlocks = await page.locator('script[type="application/ld+json"]').all()
    const types = await Promise.all(ldBlocks.map(async (b) => {
      const txt = await b.textContent()
      return JSON.parse(txt || '{}')['@type']
    }))
    expect(types).toContain('RealEstateListing')
    expect(types).toContain('BreadcrumbList')
  })

  test('Windy Crest detail page renders correctly', async ({ page }) => {
    await page.goto('/portfolio/9219-windy-crest-dr')
    await expect(page.locator('h1')).toContainText('9219 Windy Crest Dr')
    // Header subtitle (not the footer's brokerage city) — scope to the page header
    await expect(page.locator('main p').filter({ hasText: 'Dallas, Texas' })).toBeVisible()
  })

  test('prev/next navigation works between adjacent portfolio pages', async ({ page }) => {
    await page.goto('/portfolio/2510-thornton-rd')
    await expect(page.getByRole('link', { name: /9219 Windy Crest Dr/i })).toBeVisible()
  })
})
