import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ValuationForm from './ValuationForm'

export const metadata: Metadata = {
  title: 'Free Home Valuation | Colin Yang - DFW Real Estate',
  description: 'Find out what your home is worth with a free Comparative Market Analysis from Colin Yang. Expert DFW real estate valuations for Dallas, Frisco, McKinney, and surrounding areas.',
  keywords: 'home valuation Dallas, what is my home worth, CMA Dallas Fort Worth, free home value estimate, Colin Yang home value',
  other: {
    'og:type': 'website',
  },
  alternates: {
    canonical: 'https://colinyang.com/home-valuation',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Free Home Valuation',
  description: 'Complimentary Comparative Market Analysis for DFW homeowners',
  provider: {
    '@type': 'RealEstateAgent',
    name: 'Colin Yang',
    telephone: '+14692561088',
    email: 'colin@brayreg.com',
  },
  areaServed: {
    '@type': 'City',
    name: 'Dallas-Fort Worth',
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
}

const stats = [
  { number: '$50M+', label: 'Volume Analyzed' },
  { number: '100+', label: 'Valuations Done' },
  { number: '24hr', label: 'Turnaround' },
  { number: '5★', label: 'Client Satisfaction' },
]

export default function HomeValuationPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="section">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="badge mx-auto mb-6">Free Home Valuation</div>
            <h1 className="text-white mb-4">What&apos;s Your Home Worth?</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Get a complimentary Comparative Market Analysis (CMA) prepared by a local DFW expert. No obligation, no pressure.
            </p>
          </div>

          {/* Value Props */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: 'Accurate Analysis',
                desc: 'Based on recent comparable sales, not algorithms.',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
              },
              {
                title: 'Local Market Data',
                desc: 'Deep knowledge of DFW neighborhoods and trends.',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                title: 'No Obligation',
                desc: 'Completely free with no strings attached.',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 bg-[#141414] border border-[#2a2a2a]">
                <div className="w-12 h-12 mx-auto mb-4 bg-[#D52E28]/10 border border-[#D52E28]/20 flex items-center justify-center text-[#D52E28]">
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Form */}
          <ValuationForm />

          {/* Trust Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-[#D52E28] mb-1">{stat.number}</div>
                <div className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Free Guides Cross-Link */}
          <div className="mt-16 bg-gradient-to-br from-[#141414] to-[#0a0a0a] border border-[#D52E28]/30 p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-[#D52E28]/10 border border-[#D52E28]/30 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#D52E28]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <div className="badge mb-2">Free Resources</div>
                <h3 className="text-white text-xl font-semibold mb-2">Selling? Read the Pre-Listing Checklist</h3>
                <p className="text-white/60 text-sm">A 30 / 60 / 90-day countdown for getting your DFW home market-ready — repairs, staging, pricing strategy, and the mistakes that cost sellers $25K+.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              <Link href="/guides/dfw-seller-checklist" className="btn-primary !py-2 !px-5 !text-sm">Read the Checklist</Link>
              <Link href="/guides" className="btn-secondary !py-2 !px-5 !text-sm">All Free Guides</Link>
            </div>
          </div>

          {/* Agent CTA */}
          <div className="mt-16 bg-[#141414] border border-[#2a2a2a] p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#D52E28]/30 flex-shrink-0">
              <Image
                src="/images/colin-headshot.jpg"
                alt="Colin Yang"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-white font-semibold mb-1">Colin Yang</h3>
              <p className="text-white/50 text-sm mb-3">Licensed REALTOR® | Bray Real Estate Group</p>
              <p className="text-white/60 text-sm">
                With deep knowledge of the DFW market and a data-driven approach, I provide accurate valuations that help you make informed decisions.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <a href="tel:4692561088" className="btn-primary !py-2 !px-5 !text-sm whitespace-nowrap">
                Call Colin
              </a>
              <Link href="/new-client-inquiry" className="btn-secondary !py-2 !px-5 !text-sm whitespace-nowrap">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
