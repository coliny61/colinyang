export interface Property {
  slug: string
  address: string
  city: string
  state: string
  status?: string
  price?: string
  beds?: number
  baths?: number
  sqft?: number
  imageCount: number
  imageExt: string
  videoUrl?: string
}

export const properties: Property[] = [
  { slug: '4928-lexington', address: '4928 Lexington Ct.', city: 'Dallas', state: 'Texas', status: 'Leased at $3,600', imageCount: 12, imageExt: 'jpeg' },
  { slug: '715-declaration', address: '715 Declaration Dr.', city: 'Princeton', state: 'Texas', imageCount: 10, imageExt: 'jpeg' },
  { slug: '4556-cypress-thorn', address: '4556 Cypress Thorn Dr.', city: 'Arlington', state: 'Texas', imageCount: 7, imageExt: 'jpeg' },
  { slug: '2611-hondo-ave', address: '2611 Hondo Ave.', city: 'Dallas', state: 'Texas', imageCount: 0, imageExt: '' },
  { slug: '404-warwick-boulevard', address: '404 Warwick Blvd.', city: 'The Colony', state: 'Texas', imageCount: 0, imageExt: '' },
  { slug: '8100-rincon-street', address: '8100 Rincon St.', city: 'Frisco', state: 'Texas', imageCount: 0, imageExt: '' },
  { slug: '2209-tralee-circle', address: '2209 Tralee Circle', city: 'McKinney', state: 'Texas', imageCount: 0, imageExt: '' },
  { slug: '5734-oram-street', address: '5734 Oram St.', city: 'Dallas', state: 'Texas', imageCount: 0, imageExt: '' },
  { slug: '7304-collin-mckinney-parkway', address: '7304 Collin McKinney Pkwy.', city: 'McKinney', state: 'Texas', imageCount: 0, imageExt: '' },
  { slug: '4700-sagan', address: '4700 Sagan Dr.', city: 'McKinney', state: 'Texas', imageCount: 30, imageExt: 'jpeg' },
  { slug: '508-saddle-pass', address: '508 Saddle Pass', city: 'McKinney', state: 'Texas', imageCount: 12, imageExt: 'jpg' },
]

export function getProperty(slug: string): Property | undefined {
  return properties.find(p => p.slug === slug)
}

export function getAdjacentProperties(slug: string): { prev: Property | null; next: Property | null } {
  const index = properties.findIndex(p => p.slug === slug)
  return {
    prev: index > 0 ? properties[index - 1] : null,
    next: index < properties.length - 1 ? properties[index + 1] : null,
  }
}

export function getPropertyImages(property: Property): string[] {
  if (property.imageCount === 0) return []
  const images: string[] = []
  for (let i = 1; i <= property.imageCount; i++) {
    images.push(`/images/portfolio/${property.slug}/photo-${i}.${property.imageExt}`)
  }
  return images
}
