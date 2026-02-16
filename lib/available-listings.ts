export interface AvailableListing {
  slug: string
  propertyId: string
  address: string
  city: string
  state: string
  zip: string
  neighborhood?: string
  type: 'lease' | 'sale'
  status: string
  price: string
  beds: number
  baths: number
  sqft: number
  garage?: string
  headline: string
  promo?: string
  thumbnail: string
  units?: string[]
  ctaLabel: string
  ctaLink: string
}

export const availableListings: AvailableListing[] = [
  {
    slug: 'hondo',
    propertyId: '2203-hondo',
    address: '2203 Hondo Avenue',
    city: 'Dallas',
    state: 'TX',
    zip: '75219',
    neighborhood: 'Oak Lawn',
    type: 'lease',
    status: 'FOR LEASE',
    price: '$4,200/mo',
    beds: 3,
    baths: 3.5,
    sqft: 2440,
    garage: '2-Car',
    headline: 'Luxury New-Construction Townhome',
    promo: '13th Month FREE on 12-Month Lease',
    thumbnail: '/images/hondo/living-room.jpeg',
    units: ['Unit 203', 'Unit 204'],
    ctaLabel: 'Apply Now',
    ctaLink: '/lease-inquiry?property=2203-hondo',
  },
  {
    slug: 'hawthorne',
    propertyId: '2315-hawthorne',
    address: '2315 Hawthorne Avenue',
    city: 'Dallas',
    state: 'TX',
    zip: '75219',
    neighborhood: 'Oak Lawn',
    type: 'lease',
    status: 'FOR LEASE',
    price: '$4,750/mo',
    beds: 3,
    baths: 3.5,
    sqft: 2500,
    garage: '2-Car',
    headline: 'Luxury Townhome in Oak Lawn',
    promo: '2 Weeks FREE — Sign by March 1',
    thumbnail: '/images/hawthorne/exterior.jpeg',
    ctaLabel: 'Apply Now',
    ctaLink: '/lease-inquiry?property=2315-hawthorne',
  },
]

export function getAvailableListing(slug: string): AvailableListing | undefined {
  return availableListings.find((l) => l.slug === slug)
}

export function getAvailableCount(): number {
  return availableListings.length
}
