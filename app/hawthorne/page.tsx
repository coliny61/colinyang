import { Metadata } from 'next'
import Link from 'next/link'
import PropertyGallery from '@/components/PropertyGallery'
import FeatureIcon from '@/components/listing/FeatureIcon'
import ListingSpecsBar from '@/components/listing/ListingSpecsBar'
import AgentCard from '@/components/AgentCard'
import CTABanner from '@/components/CTABanner'
import { AGENT_TEL, AGENT_SMS } from '@/lib/agent'
import HawthorneHero from './HawthorneHero'

export const metadata: Metadata = {
  title: 'For Lease: 2315 Hawthorne Avenue, Dallas TX | 3 Bed / 3.5 Bath Townhome',
  description: 'Luxury townhome for lease at 2315 Hawthorne Avenue, Dallas TX 75219. 3 bed, 3.5 bath, 2,500 sqft with 2-car garage. $4,750/mo — 2 weeks FREE if lease signed by March 1.',
  keywords: [
    '2315 Hawthorne Avenue',
    'Dallas townhome for lease',
    'Dallas luxury rental',
    'Oak Lawn lease',
    'Dallas lease',
    'Colin Yang',
  ],
  openGraph: {
    title: 'For Lease: 2315 Hawthorne Avenue, Dallas TX — $4,750/mo',
    description: '3 Bed | 3.5 Bath | 2,500 Sqft | 2-Car Garage | 2 Weeks FREE',
    url: 'https://colinyang.com/hawthorne',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'For Lease: 2315 Hawthorne Avenue — $4,750/mo',
    description: '3 Bed | 3.5 Bath | 2,500 Sqft | 2-Car Garage | 2 Weeks FREE',
  },
  alternates: {
    canonical: 'https://colinyang.com/hawthorne',
  },
}

const GALLERY_IMAGES = [
  '/images/hawthorne/living-room-2.jpeg',
  '/images/hawthorne/living-room-1.jpeg',
  '/images/hawthorne/living-room-views.jpeg',
  '/images/hawthorne/kitchen-island.jpeg',
  '/images/hawthorne/kitchen-wide.jpeg',
  '/images/hawthorne/kitchen-detail.jpeg',
  '/images/hawthorne/primary-bedroom.jpeg',
  '/images/hawthorne/primary-bathroom.jpeg',
  '/images/hawthorne/primary-vanity.jpeg',
  '/images/hawthorne/bedroom-2.jpeg',
  '/images/hawthorne/bedroom-3.jpeg',
  '/images/hawthorne/bedroom-ground.jpeg',
  '/images/hawthorne/bathroom-2.jpeg',
  '/images/hawthorne/bathroom-3.jpeg',
  '/images/hawthorne/powder-room.jpeg',
  '/images/hawthorne/staircase.jpeg',
  '/images/hawthorne/balcony.jpeg',
  '/images/hawthorne/skyline-view.jpeg',
  '/images/hawthorne/backyard.jpeg',
  '/images/hawthorne/exterior.jpeg',
  '/images/hawthorne/rear-exterior.jpeg',
]

const FEATURES = [
  { icon: 'home', label: 'New Construction', desc: 'Modern build with premium finishes' },
  { icon: 'star', label: 'Marble & Quartz', desc: 'Marble counters, floating staircase' },
  { icon: 'car', label: '2-Car Garage', desc: 'Attached private garage' },
  { icon: 'sun', label: 'Fireplace', desc: 'Linear fireplace in living and primary' },
  { icon: 'eye', label: 'Skyline Views', desc: 'Dallas skyline from balcony and bedrooms' },
  { icon: 'wind', label: 'Chef\'s Kitchen', desc: 'Gas range, marble island, stainless appliances' },
  { icon: 'layers', label: 'Private Backyard', desc: 'Fire pit, lounge seating, landscaped yard' },
  { icon: 'maximize', label: '2,500 Sq Ft', desc: 'Spacious multi-level layout' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Residence',
  name: '2315 Hawthorne Avenue',
  description: 'Luxury townhome for lease at 2315 Hawthorne Avenue, Dallas TX 75219. 3 bedrooms, 3.5 bathrooms, 2,500 sqft with 2-car garage.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2315 Hawthorne Avenue',
    addressLocality: 'Dallas',
    addressRegion: 'TX',
    postalCode: '75219',
    addressCountry: 'US',
  },
  floorSize: {
    '@type': 'QuantitativeValue',
    value: 2500,
    unitCode: 'FTK',
  },
  numberOfRooms: 3,
  numberOfBathroomsTotal: 3.5,
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: '2-Car Garage' },
    { '@type': 'LocationFeatureSpecification', name: 'New Construction' },
  ],
}

export default function HawthornePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ── Hero ────────────────────────────────────────────────── */}
      <HawthorneHero />

      {/* ── Specs Bar ──────────────────────────────────────────── */}
      <ListingSpecsBar
        beds={3}
        baths={3.5}
        sqft="2,500"
        garage="2-Car"
        price="$4,750"
        badges={['2 Weeks FREE — Sign by March 1']}
      />

      {/* ── Features Grid ──────────────────────────────────────── */}
      <section className="section">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="badge mb-4">Property Features</div>
            <h2 className="text-white mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
              Modern Living in Oak Lawn
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Located in the heart of Dallas, minutes from Uptown, Oak Lawn, and Downtown.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FEATURES.map((feature) => (
              <div
                key={feature.label}
                className="bg-[#141414] border border-[#2a2a2a] p-6 hover:border-[#D52E28]/50 transition-all group"
              >
                <div className="w-12 h-12 bg-[#D52E28]/10 border border-[#D52E28]/20 flex items-center justify-center text-[#D52E28] mb-4 group-hover:bg-[#D52E28] group-hover:text-white transition-all">
                  <FeatureIcon type={feature.icon} />
                </div>
                <h3 className="text-white text-sm font-semibold mb-1">{feature.label}</h3>
                <p className="text-white/50 text-sm mb-0">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo Gallery ──────────────────────────────────────── */}
      <section className="section section-surface">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="badge mb-4">Photo Gallery</div>
            <h2 className="text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
              Take a Look Inside
            </h2>
          </div>

          <PropertyGallery images={GALLERY_IMAGES} address="2315 Hawthorne Avenue" />
        </div>
      </section>

      {/* ── CTA Banner ─────────────────────────────────────────── */}
      <CTABanner
        heading="Interested? Apply Today."
        subtext="$4,750/month — 2 Weeks FREE if lease signed by March 1. 2315 Hawthorne Avenue, Dallas TX 75219."
        backgroundImage="/images/hawthorne/backyard.jpeg"
      >
        <Link href="/lease-inquiry?property=2315-hawthorne" className="btn-white">Apply Now</Link>
        <a href={AGENT_TEL} className="btn-secondary !border-white/50 !text-white hover:!bg-white/10">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call
        </a>
        <a href={AGENT_SMS} className="btn-secondary !border-white/50 !text-white hover:!bg-white/10">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Text
        </a>
      </CTABanner>

      {/* ── Agent Card ─────────────────────────────────────────── */}
      <AgentCard ctaLabel="Apply Now" ctaHref="/lease-inquiry?property=2315-hawthorne" />
    </div>
  )
}
