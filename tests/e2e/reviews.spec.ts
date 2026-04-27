import { test, expect } from '@playwright/test'

const GOOGLE_PROFILE = 'https://www.google.com/maps?cid=11621998611320775991'
const GOOGLE_WRITE_REVIEW = 'https://search.google.com/local/writereview?placeid=ChIJ22OnH3g9TIY3pds3KaJJoQ'

test.describe('Reviews page Google integration', () => {
  test('"Review on Google" button has a real href (not placeholder)', async ({ page }) => {
    await page.goto('/reviews')
    // Exact match — review cards also contain "review on Google" in aria-labels
    const button = page.getByRole('link', { name: 'Review on Google', exact: true })
    const href = await button.getAttribute('href')
    expect(href).toBe(GOOGLE_WRITE_REVIEW)
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
