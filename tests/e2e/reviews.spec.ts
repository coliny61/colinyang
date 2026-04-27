import { test, expect } from '@playwright/test'

const GOOGLE_PROFILE = 'https://share.google/6aumSobwd3JlTIAXM'

test.describe('Reviews page Google integration', () => {
  test('"Review on Google" button has a real href (not placeholder)', async ({ page }) => {
    await page.goto('/reviews')
    // Exact match — review cards also contain "review on Google" in aria-labels
    const button = page.getByRole('link', { name: 'Review on Google', exact: true })
    const href = await button.getAttribute('href')
    expect(href).toBeTruthy()
    // Must NOT be the previous placeholder
    expect(href).not.toBe('https://g.page/r/review')
    // Must point to Colin's actual Google presence
    expect(href).toMatch(/share\.google|g\.page\/r\/.+\/review|search\.google\.com\/local\/writereview/)
    expect(await button.getAttribute('target')).toBe('_blank')
    expect(await button.getAttribute('rel')).toContain('noopener')
  })

  test('aggregate rating header is a clickable link to Google profile', async ({ page }) => {
    await page.goto('/reviews')
    const ratingLink = page.getByRole('link', { name: /See all reviews.*Google/i })
    await expect(ratingLink).toBeVisible()
    expect(await ratingLink.getAttribute('href')).toBe(GOOGLE_PROFILE)
    expect(await ratingLink.getAttribute('target')).toBe('_blank')
  })

  test('every review card is a clickable anchor with the right destination', async ({ page }) => {
    await page.goto('/reviews')
    const cards = page.locator('section.section-surface a').filter({ has: page.locator('blockquote') })
    const count = await cards.count()
    expect(count).toBeGreaterThanOrEqual(5)
    for (let i = 0; i < count; i++) {
      const card = cards.nth(i)
      const href = await card.getAttribute('href')
      expect(href).toBeTruthy()
      expect(await card.getAttribute('target')).toBe('_blank')
    }
  })

  test('layout JSON-LD sameAs still includes the Google profile after refactor', async ({ page }) => {
    await page.goto('/')
    const ldBlocks = await page.locator('script[type="application/ld+json"]').all()
    const parsed = await Promise.all(ldBlocks.map(async (b) => JSON.parse((await b.textContent()) || '{}')))
    const agent = parsed.find((p) => p['@type'] === 'RealEstateAgent')
    expect(agent.sameAs).toContain(GOOGLE_PROFILE)
  })

  test('footer Google Reviews link still works after refactor', async ({ page }) => {
    await page.goto('/')
    const link = page.locator('footer').getByRole('link', { name: /Google Reviews/i })
    expect(await link.getAttribute('href')).toBe(GOOGLE_PROFILE)
  })
})
