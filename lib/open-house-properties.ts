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
