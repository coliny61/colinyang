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
  // Google Business Profile.
  //   KGMID:      /g/11yc11v7s7
  //   Feature ID: 0x864c3d781fa763db:0xa149a22937dba537
  //   CID:        11621998611320775991
  //   Place ID:   ChIJ22OnH3g9TIY3pds3KaJJoQ
  // googleProfile opens the Maps profile (cleanest canonical URL).
  // googleWriteReview is the 1-click "Write a review" form.
  googleProfile: 'https://www.google.com/maps?cid=11621998611320775991',
  googleWriteReview: 'https://search.google.com/local/writereview?placeid=ChIJ22OnH3g9TIY3pds3KaJJoQ',
} as const

export const AGENT_TEL = `tel:${AGENT.phone}`
export const AGENT_SMS = `sms:${AGENT.phone}`
export const AGENT_MAILTO = `mailto:${AGENT.email}`
export const GOOGLE_REVIEW_URL = AGENT.googleWriteReview || AGENT.googleProfile
