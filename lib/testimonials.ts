export interface Testimonial {
  quote: string
  longQuote?: string
  author: string
  role: string
  date?: string
  platform?: string
  rating?: number
}

export const testimonials: Testimonial[] = [
  {
    quote: "Colin is a lifesaver! With football season fast approaching and my stress levels through the roof, Colin swooped in and found me the perfect home in under 2 days.",
    longQuote: "Colin is a lifesaver! With football season fast approaching and my stress levels through the roof, Colin swooped in and found me the perfect home in under 2 days. He understood exactly what I needed without me having to overthink it. The entire process was smooth, fast, and painless. If you need someone who gets it done — Colin's your guy.",
    author: 'Colby W.',
    role: 'Professional Athlete',
    date: '2024',
    platform: 'Google',
    rating: 5,
  },
  {
    quote: "Colin went above and beyond as my realtor. He quickly found me the ideal home and made the entire process seamless. Highly recommend!",
    longQuote: "Colin went above and beyond as my realtor. He quickly found me the ideal home and made the entire process seamless. His knowledge of the market and attention to detail were incredible. Highly recommend Colin for anyone looking for a dedicated and knowledgeable real estate professional!",
    author: 'Jalen R.',
    role: 'First-Time Buyer',
    date: '2024',
    platform: 'Google',
    rating: 5,
  },
  {
    quote: "I was in a frantic rush... Colin stepped in and found me a fantastic home in less than 48 hours.",
    author: 'Chris B.',
    role: 'Corporate Relocator',
    date: '2024',
    platform: 'Google',
    rating: 5,
  },
  {
    quote: "We had a crazy short two week window to find a home, and he made it feel like a walk in the park. Incredible service.",
    longQuote: "We had a crazy short two week window to find a home, and he made it feel like a walk in the park. Colin was incredibly responsive, always available to answer questions, and made every showing count. We ended up with a home we absolutely love. Incredible service from start to finish.",
    author: 'Tannaz Z.',
    role: 'Relocating Family',
    date: '2024',
    platform: 'Google',
    rating: 5,
  },
  {
    quote: "Working with Colin has been an exceptional real estate experience. His knowledge of the DFW market exceeded all expectations.",
    longQuote: "Working with Colin has been an exceptional real estate experience. His knowledge of the DFW market exceeded all expectations. He provided data-driven insights that helped us make smart investment decisions. Professional, responsive, and genuinely cares about his clients.",
    author: 'Ryann H.',
    role: 'Investor',
    date: '2024',
    platform: 'Google',
    rating: 5,
  },
  {
    quote: "Colin made our relocation from out of state completely stress-free. He took the time to understand our needs and negotiated a great deal.",
    longQuote: "Colin made our relocation from out of state completely stress-free. He took the time to understand our needs, showed us properties that were perfectly aligned with what we wanted, and negotiated a great deal. His bilingual service was a huge plus for our family.",
    author: 'David L.',
    role: 'Out-of-State Relocation',
    date: '2024',
    platform: 'Zillow',
    rating: 5,
  },
]
