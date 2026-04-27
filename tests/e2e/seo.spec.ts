import { test, expect } from '@playwright/test'

test.describe('SEO', () => {
  test('sitemap.xml includes new URLs', async ({ request }) => {
    const res = await request.get('/sitemap.xml')
    expect(res.status()).toBe(200)
    const xml = await res.text()
    const expected = [
      'https://colinyang.com/portfolio/2510-thornton-rd',
      'https://colinyang.com/portfolio/9219-windy-crest-dr',
      'https://colinyang.com/guides',
      'https://colinyang.com/guides/dfw-buyer-guide',
      'https://colinyang.com/guides/dfw-seller-checklist',
      'https://colinyang.com/guides/relocating-to-dfw',
    ]
    for (const url of expected) {
      expect(xml).toContain(url)
    }
  })

  test('homepage has FAQPage JSON-LD with all questions', async ({ page }) => {
    await page.goto('/')
    const ldBlocks = await page.locator('script[type="application/ld+json"]').all()
    const parsed = await Promise.all(ldBlocks.map(async (b) => {
      const txt = await b.textContent()
      return JSON.parse(txt || '{}')
    }))
    const faq = parsed.find((p) => p['@type'] === 'FAQPage')
    expect(faq).toBeDefined()
    expect(faq.mainEntity).toHaveLength(6)
    const questionText = faq.mainEntity.map((q: { name: string }) => q.name).join(' | ')
    expect(questionText).toMatch(/areas of Dallas-Fort Worth/i)
    expect(questionText).toMatch(/Mandarin/i)
  })

  test('RealEstateAgent JSON-LD has sameAs and city areaServed', async ({ page }) => {
    await page.goto('/')
    const ldBlocks = await page.locator('script[type="application/ld+json"]').all()
    const parsed = await Promise.all(ldBlocks.map(async (b) => {
      const txt = await b.textContent()
      return JSON.parse(txt || '{}')
    }))
    const agent = parsed.find((p) => p['@type'] === 'RealEstateAgent')
    expect(agent).toBeDefined()
    expect(agent.sameAs).toContain('https://share.google/6aumSobwd3JlTIAXM')
    expect(agent.sameAs.some((u: string) => u.includes('instagram'))).toBe(true)
    expect(agent.sameAs.some((u: string) => u.includes('linkedin'))).toBe(true)
    // areaServed should be array including specific cities
    expect(Array.isArray(agent.areaServed)).toBe(true)
    const cities = agent.areaServed
      .filter((a: { '@type': string }) => a['@type'] === 'City')
      .map((c: { name: string }) => c.name)
    expect(cities).toContain('Frisco')
    expect(cities).toContain('Highland Park')
    expect(cities).toContain('Plano')
  })

  test('every guide page has canonical URL', async ({ page }) => {
    for (const slug of ['dfw-buyer-guide', 'dfw-seller-checklist', 'relocating-to-dfw']) {
      await page.goto(`/guides/${slug}`)
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href')
      expect(canonical).toBe(`https://colinyang.com/guides/${slug}`)
    }
  })

  test('homepage FAQ section renders 6 questions interactively', async ({ page }) => {
    await page.goto('/')
    const detailsBlocks = page.locator('section').filter({ hasText: 'Questions Clients Ask' }).locator('details')
    await expect(detailsBlocks).toHaveCount(6)
    // Open the bilingual question and verify content
    const bilingualSummary = page.getByRole('heading', { name: /Do you speak Chinese or Mandarin/i })
    await bilingualSummary.click()
    await expect(page.getByText(/中文/).first()).toBeVisible()
  })

  test('portfolio detail page has property-specific meta description', async ({ page }) => {
    await page.goto('/portfolio/2510-thornton-rd')
    const description = await page.locator('meta[name="description"]').getAttribute('content')
    expect(description).toContain('2510 Thornton Rd')
    expect(description).toContain('Austin')
  })

  test('footer contains Free Guides + Google Reviews links', async ({ page }) => {
    await page.goto('/')
    const footer = page.locator('footer')
    await expect(footer.getByRole('link', { name: 'Free Guides' })).toHaveAttribute('href', '/guides')
    await expect(footer.getByRole('link', { name: /Google Reviews/i })).toHaveAttribute('href', /share\.google/)
  })

  test('home-valuation cross-links to seller checklist', async ({ page }) => {
    await page.goto('/home-valuation')
    await expect(page.getByRole('link', { name: /Read the Checklist/i }))
      .toHaveAttribute('href', '/guides/dfw-seller-checklist')
    await expect(page.getByRole('link', { name: /All Free Guides/i }))
      .toHaveAttribute('href', '/guides')
  })
})
