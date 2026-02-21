import { Metadata } from 'next'
import Link from 'next/link'
import PropertyGallery from '@/components/PropertyGallery'
import FeatureIcon from '@/components/listing/FeatureIcon'
import ListingSpecsBar from '@/components/listing/ListingSpecsBar'
import AgentCard from '@/components/AgentCard'
import CTABanner from '@/components/CTABanner'
import { AGENT_TEL, AGENT_SMS } from '@/lib/agent'
import MillieWayHero from './MillieWayHero'

export const metadata: Metadata = {
  title: 'For Sale: 6401 Millie Way, McKinney TX | 3 Bed / 3.5 Bath in Craig Ranch',
  description: 'Single family home for sale at 6401 Millie Way, McKinney TX 75070. 3 bed, 3.5 bath, 2,619 sqft with 2-car garage in Craig Ranch. Corner lot with outdoor pergola.',
  keywords: [
    '6401 Millie Way',
    'McKinney homes for sale',
    'Craig Ranch',
    'McKinney TX real estate',
    'Colin Yang',
  ],
  openGraph: {
    title: 'For Sale: 6401 Millie Way, McKinney TX — Craig Ranch',
    description: '3 Bed | 3.5 Bath | 2,619 Sqft | 2-Car Garage | Craig Ranch',
    url: 'https://colinyang.com/millie-way',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'For Sale: 6401 Millie Way, McKinney TX — Craig Ranch',
    description: '3 Bed | 3.5 Bath | 2,619 Sqft | 2-Car Garage | Craig Ranch',
  },
  alternates: {
    canonical: 'https://colinyang.com/millie-way',
  },
}

const GALLERY_IMAGES = [
  '/images/millie-way/exterior.jpeg',
  '/images/millie-way/exterior-corner.jpeg',
  '/images/millie-way/living-room-1.jpeg',
  '/images/millie-way/living-room-2.jpeg',
  '/images/millie-way/living-room-3.jpeg',
  '/images/millie-way/living-room-entry.jpeg',
  '/images/millie-way/kitchen-island.jpeg',
  '/images/millie-way/kitchen-wide.jpeg',
  '/images/millie-way/kitchen-appliances.jpeg',
  '/images/millie-way/kitchen-open.jpeg',
  '/images/millie-way/kitchen-dining.jpeg',
  '/images/millie-way/dining-area.jpeg',
  '/images/millie-way/primary-bedroom.jpeg',
  '/images/millie-way/primary-bedroom-2.jpeg',
  '/images/millie-way/primary-bathroom.jpeg',
  '/images/millie-way/primary-bathroom-2.jpeg',
  '/images/millie-way/bedroom-2.jpeg',
  '/images/millie-way/bedroom-3.jpeg',
  '/images/millie-way/bathroom-2.jpeg',
  '/images/millie-way/bathroom-3.jpeg',
  '/images/millie-way/office.jpeg',
  '/images/millie-way/loft.jpeg',
  '/images/millie-way/game-room.jpeg',
  '/images/millie-way/pergola.jpeg',
]

const FEATURES = [
  { icon: 'home', label: 'Single Family', desc: 'Detached home built in 2018' },
  { icon: 'maximize', label: '2,619 Sq Ft', desc: 'Spacious open layout' },
  { icon: 'car', label: '2-Car Garage', desc: 'Attached private garage' },
  { icon: 'sun', label: 'Corner Lot', desc: 'Extra yard space and natural light' },
  { icon: 'layers', label: 'Outdoor Pergola', desc: 'Covered deck perfect for entertaining' },
  { icon: 'star', label: 'Craig Ranch', desc: 'Premier master-planned community' },
  { icon: 'eye', label: 'Modern Finishes', desc: 'Updated interior throughout' },
  { icon: 'wind', label: 'Built 2018', desc: 'Newer construction with modern systems' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SingleFamilyResidence',
  name: '6401 Millie Way',
  description: 'Single family home for sale at 6401 Millie Way, McKinney TX 75070. 3 bedrooms, 3.5 bathrooms, 2,619 sqft with 2-car garage in Craig Ranch.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '6401 Millie Way',
    addressLocality: 'McKinney',
    addressRegion: 'TX',
    postalCode: '75070',
    addressCountry: 'US',
  },
  floorSize: {
    '@type': 'QuantitativeValue',
    value: 2619,
    unitCode: 'FTK',
  },
  numberOfRooms: 3,
  numberOfBathroomsTotal: 3.5,
  yearBuilt: 2018,
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: '2-Car Garage' },
    { '@type': 'LocationFeatureSpecification', name: 'Corner Lot' },
    { '@type': 'LocationFeatureSpecification', name: 'Outdoor Pergola' },
  ],
}

export default function MillieWayPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ── Hero ────────────────────────────────────────────────── */}
      <MillieWayHero />

      {/* ── Specs Bar ──────────────────────────────────────────── */}
      <ListingSpecsBar
        beds={3}
        baths={3.5}
        sqft="2,619"
        garage="2-Car"
        price="Coming Soon"
        badges={['Corner Lot', 'Craig Ranch Community']}
      />

      {/* ── Features Grid ──────────────────────────────────────── */}
      <section className="section">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="badge mb-4">Property Features</div>
            <h2 className="text-white mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
              Move-In Ready in Craig Ranch
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              A beautifully maintained single-family home on a corner lot in McKinney&apos;s premier
              master-planned community, with a private outdoor pergola and modern finishes throughout.
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
      {GALLERY_IMAGES.length > 0 && (
        <section className="section section-surface">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="badge mb-4">Photo Gallery</div>
              <h2 className="text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                Take a Look Inside
              </h2>
            </div>

            <PropertyGallery images={GALLERY_IMAGES} address="6401 Millie Way" />
          </div>
        </section>
      )}

      {/* ── About Craig Ranch ─────────────────────────────────── */}
      <section className="section">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="badge mb-4">Neighborhood</div>
            <h2 className="text-white mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
              Life in Craig Ranch
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#141414] border border-[#2a2a2a] p-8 text-center">
              <div className="text-xs text-[#D52E28] uppercase tracking-widest font-semibold mb-3">Community</div>
              <h3 className="text-white text-lg mb-4">Master-Planned Living</h3>
              <ul className="text-white/60 text-sm space-y-2">
                <li>400+ acres of green space</li>
                <li>Running &amp; biking trails</li>
                <li>Community pools &amp; parks</li>
              </ul>
            </div>

            <div className="bg-[#141414] border border-[#D52E28]/30 p-8 text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D52E28] text-white text-xs px-3 py-1 uppercase tracking-wider font-semibold">Highlight</div>
              <div className="text-xs text-[#D52E28] uppercase tracking-widest font-semibold mb-3">Golf</div>
              <h3 className="text-white text-lg mb-4">TPC Craig Ranch</h3>
              <ul className="text-white/60 text-sm space-y-2">
                <li>Home of the PGA Tour</li>
                <li>Championship golf course</li>
                <li>Minutes from your front door</li>
              </ul>
            </div>

            <div className="bg-[#141414] border border-[#2a2a2a] p-8 text-center">
              <div className="text-xs text-[#D52E28] uppercase tracking-widest font-semibold mb-3">Location</div>
              <h3 className="text-white text-lg mb-4">Convenient Access</h3>
              <ul className="text-white/60 text-sm space-y-2">
                <li>Top-rated McKinney ISD schools</li>
                <li>Shopping &amp; dining nearby</li>
                <li>Easy access to US-75 &amp; SH-121</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ─────────────────────────────────────────── */}
      <CTABanner
        heading="Interested in This Property?"
        subtext="6401 Millie Way, McKinney TX 75070. Reach out for pricing, details, or to schedule a private showing."
      >
        <Link href="/new-client-inquiry" className="btn-white">Inquire Now</Link>
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
      <AgentCard ctaLabel="Inquire Now" ctaHref="/new-client-inquiry" />
    </div>
  )
}
