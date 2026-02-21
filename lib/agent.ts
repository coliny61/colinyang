export const AGENT = {
  name: 'Colin Yang',
  title: 'Dallas-Fort Worth Luxury Real Estate Expert',
  phone: '4692561088',
  phoneFormatted: '(469) 256-1088',
  email: 'colin@brayreg.com',
  license: '#815417',
  headshot: '/images/colin-headshot.jpg',
  instagram: 'colinyang61',
  linkedin: 'colinyang61',
  brokerage: 'Bray Real Estate Group',
  brokerageAddress: '3130 Harvard Ave, Ste. B, Dallas, TX 75205',
} as const

export const AGENT_TEL = `tel:${AGENT.phone}`
export const AGENT_SMS = `sms:${AGENT.phone}`
export const AGENT_MAILTO = `mailto:${AGENT.email}`
