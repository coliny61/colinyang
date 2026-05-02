import { Metadata } from 'next'
import Link from 'next/link'
import PropertyGallery from '@/components/PropertyGallery'
import FeatureIcon from '@/components/listing/FeatureIcon'
import ListingSpecsBar from '@/components/listing/ListingSpecsBar'
import AgentCard from '@/components/AgentCard'
import CTABanner from '@/components/CTABanner'
import { AGENT_TEL, AGENT_SMS } from '@/lib/agent'
import HollandCtHero from './HollandCtHero'

export const metadata: Metadata = {
  title: 'For Sale: 2609 Holland Ct, Celina TX | $529,900 | 4 Bed / 3 Bath in Cambridge Crossing',
  description: 'Highland Homes Lynnwood plan in Cambridge Crossing, Celina TX 75009. 4 bed, 3 bath, 2,297 sqft, 2-car garage. Built 2023. Open House May 2 (1–4 PM) & May 3 (12–4 PM). $529,900.',
  keywords: [
    '2609 Holland Court',
    'Celina homes for sale',
    'Cambridge Crossing',
    'Highland Homes Lynnwood',
    'Celina TX real estate',
    'Bothwell Elementary',
    'Colin Yang',
  ],
  openGraph: {
    title: 'For Sale: 2609 Holland Ct, Celina TX — $529,900',
    description: '4 Bed | 3 Bath | 2,297 Sqft | 2-Car Garage | Cambridge Crossing | Open House May 2 & 3',
    url: 'https://colinyang.com/holland-ct',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'For Sale: 2609 Holland Ct, Celina TX — $529,900',
    description: '4 Bed | 3 Bath | 2,297 Sqft | 2-Car Garage | Cambridge Crossing | Open House May 2 & 3',
  },
  alternates: {
    canonical: 'https://colinyang.com/holland-ct',
  },
}

const GALLERY_IMAGES = [
  '/images/holland-ct/exterior.jpg',
  '/images/holland-ct/exterior-sunset.jpg',
  '/images/holland-ct/driveway-1.jpg',
  '/images/holland-ct/driveway-2.jpg',
  '/images/holland-ct/driveway-sunset.jpg',
  '/images/holland-ct/aerial-1.jpg',
  '/images/holland-ct/aerial-2.jpg',
  '/images/holland-ct/aerial-3.jpg',
  '/images/holland-ct/foyer.jpg',
  '/images/holland-ct/sunroom.jpg',
  '/images/holland-ct/living-room-1.jpg',
  '/images/holland-ct/living-room-2.jpg',
  '/images/holland-ct/living-dining-1.jpg',
  '/images/holland-ct/living-dining-2.jpg',
  '/images/holland-ct/living-dining-kitchen.jpg',
  '/images/holland-ct/kitchen-dining-living.jpg',
  '/images/holland-ct/kitchen-1.jpg',
  '/images/holland-ct/kitchen-2.jpg',
  '/images/holland-ct/kitchen-3.jpg',
  '/images/holland-ct/dining-kitchen-1.jpg',
  '/images/holland-ct/dining-kitchen-2.jpg',
  '/images/holland-ct/primary-bedroom-1.jpg',
  '/images/holland-ct/primary-bedroom-2.jpg',
  '/images/holland-ct/primary-bathroom-1.jpg',
  '/images/holland-ct/primary-bathroom-2.jpg',
  '/images/holland-ct/primary-closet.jpg',
  '/images/holland-ct/loft-1.jpg',
  '/images/holland-ct/loft-2.jpg',
  '/images/holland-ct/bedroom-2.jpg',
  '/images/holland-ct/bedroom-3.jpg',
  '/images/holland-ct/bedroom-4.jpg',
  '/images/holland-ct/upstairs-bathroom.jpg',
  '/images/holland-ct/laundry-room.jpg',
  '/images/holland-ct/backyard.jpg',
]

const FEATURES = [
  { icon: 'home', label: 'Highland Homes', desc: 'Custom Lynnwood plan, built 2023' },
  { icon: 'maximize', label: '2,297 Sq Ft', desc: 'Two-story, 4 bed / 3 bath layout' },
  { icon: 'car', label: '2-Car Garage', desc: 'Attached private garage' },
  { icon: 'star', label: 'California Closets', desc: 'Every closet in the home outfitted' },
  { icon: 'layers', label: 'Downstairs Primary', desc: 'Spa shower, separate vanities' },
  { icon: 'sun', label: 'Chef Kitchen', desc: 'Large island, double oven, walk-in pantry' },
  { icon: 'eye', label: 'Smart Home Wired', desc: 'Designer finishes throughout' },
  { icon: 'wind', label: 'Cambridge Crossing', desc: 'Master-planned community amenities' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SingleFamilyResidence',
  name: '2609 Holland Court',
  description: 'Highland Homes Lynnwood plan for sale at 2609 Holland Court, Celina TX 75009. 4 bedrooms, 3 bathrooms, 2,297 sqft with 2-car garage in Cambridge Crossing.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2609 Holland Court',
    addressLocality: 'Celina',
    addressRegion: 'TX',
    postalCode: '75009',
    addressCountry: 'US',
  },
  floorSize: {
    '@type': 'QuantitativeValue',
    value: 2297,
    unitCode: 'FTK',
  },
  numberOfRooms: 4,
  numberOfBathroomsTotal: 3,
  yearBuilt: 2023,
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: '2-Car Garage' },
    { '@type': 'LocationFeatureSpecification', name: 'Downstairs Primary Suite' },
    { '@type': 'LocationFeatureSpecification', name: 'California Closets Throughout' },
    { '@type': 'LocationFeatureSpecification', name: 'Chef Kitchen with Double Oven' },
    { '@type': 'LocationFeatureSpecification', name: 'Game-Room Loft' },
    { '@type': 'LocationFeatureSpecification', name: 'Smart Home Wiring' },
  ],
  offers: {
    '@type': 'Offer',
    price: 529900,
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
}

const openHouseJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Open House — 2609 Holland Court',
  startDate: '2026-05-02T13:00:00-05:00',
  endDate: '2026-05-02T16:00:00-05:00',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: '2609 Holland Court',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2609 Holland Court',
      addressLocality: 'Celina',
      addressRegion: 'TX',
      postalCode: '75009',
      addressCountry: 'US',
    },
  },
  organizer: {
    '@type': 'RealEstateAgent',
    name: 'Colin Yang',
    telephone: '+14692561088',
    url: 'https://colinyang.com',
  },
}

export default function HollandCtPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(openHouseJsonLd) }}
      />

      {/* ── Hero ────────────────────────────────────────────────── */}
      <HollandCtHero />

      {/* ── Specs Bar ──────────────────────────────────────────── */}
      <ListingSpecsBar
        beds={4}
        baths={3}
        sqft="2,297"
        garage="2-Car"
        price="$529,900"
        priceLabel="Price"
        priceSuffix=""
        badges={['Built 2023', 'Cambridge Crossing']}
      />

      {/* ── Open House Banner ─────────────────────────────────── */}
      <section className="bg-[#D52E28] py-6 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <div className="text-white/80 text-xs uppercase tracking-[0.2em] font-semibold mb-1">
              Open House This Weekend
            </div>
            <div className="text-white text-lg md:text-xl font-bold">
              Saturday, May 2 · 1–4 PM &nbsp;&nbsp;|&nbsp;&nbsp; Sunday, May 3 · 12–4 PM
            </div>
          </div>
          <Link
            href="/open-house?property=holland-ct"
            className="bg-white text-[#D52E28] font-bold uppercase tracking-wider text-sm px-6 py-3 hover:bg-white/90 transition-colors whitespace-nowrap"
          >
            Sign In Online →
          </Link>
        </div>
      </section>

      {/* ── Features Grid ──────────────────────────────────────── */}
      <section className="section">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="badge mb-4">Property Features</div>
            <h2 className="text-white mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
              Custom Highland Homes Build in Celina
            </h2>
            <p className="text-white/60 max-w-3xl mx-auto">
              Beautifully custom-designed two-story Lynnwood plan in the award-winning Cambridge
              Crossing master-planned community. Open-concept living, downstairs primary suite,
              upstairs loft, and California Closets in every closet of the home.
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

      {/* ── Description ────────────────────────────────────────── */}
      <section className="section section-surface">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="badge mb-4">About This Home</div>
            <h2 className="text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
              Designed Down to the Last Closet
            </h2>
          </div>

          <div className="bg-[#141414] border border-[#2a2a2a] p-8 md:p-10 text-white/75 text-base leading-relaxed space-y-4">
            <p>
              Beautifully custom-designed two-story Highland Homes <strong className="text-white">Lynnwood plan</strong> in
              the award-winning Cambridge Crossing master-planned community in Celina. Open-concept
              living with a spacious family room featuring a cozy fireplace, dining area, and
              chef-inspired kitchen with a large island, walk-in pantry, double oven, and
              refrigerator included.
            </p>
            <p>
              Private downstairs primary suite offers separate vanities, spa shower, and a custom
              California Closets system. Upstairs features a generous game-room loft and two
              additional bedrooms with a full bath.
            </p>
            <p>
              <strong className="text-white">California Closets</strong> came in to outfit every
              closet in the home — pantry, mud closet, primary closet, laundry room (with stacked
              washer and dryer included), all linen closets, and all secondary bedroom closets.
              Thoughtful designer finishes throughout, smart home wiring, and tile counters.
            </p>
            <p>
              Front yard maintenance, amenity center, resort-style pools, courts, parks, and miles
              of trails included with HOA. Steps to the on-site <strong className="text-white">Bothwell
              Elementary</strong>; minutes to Dallas North Tollway and the new Collin County Outer
              Loop. PID community — see attached docs.
            </p>
          </div>
        </div>
      </section>

      {/* ── Photo Gallery ──────────────────────────────────────── */}
      {GALLERY_IMAGES.length > 0 && (
        <section className="section">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="badge mb-4">Photo Gallery</div>
              <h2 className="text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                Take a Look Inside
              </h2>
            </div>

            <PropertyGallery images={GALLERY_IMAGES} address="2609 Holland Court" />
          </div>
        </section>
      )}

      {/* ── About Cambridge Crossing ───────────────────────────── */}
      <section className="section section-surface">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="badge mb-4">Neighborhood</div>
            <h2 className="text-white mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
              Life in Cambridge Crossing
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#141414] border border-[#2a2a2a] p-8 text-center">
              <div className="text-xs text-[#D52E28] uppercase tracking-widest font-semibold mb-3">Amenities</div>
              <h3 className="text-white text-lg mb-4">Resort-Style Living</h3>
              <ul className="text-white/60 text-sm space-y-2">
                <li>Amenity center &amp; resort pools</li>
                <li>Sport courts &amp; parks</li>
                <li>Miles of community trails</li>
              </ul>
            </div>

            <div className="bg-[#141414] border border-[#D52E28]/30 p-8 text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D52E28] text-white text-xs px-3 py-1 uppercase tracking-wider font-semibold">Highlight</div>
              <div className="text-xs text-[#D52E28] uppercase tracking-widest font-semibold mb-3">Schools</div>
              <h3 className="text-white text-lg mb-4">Bothwell Elementary</h3>
              <ul className="text-white/60 text-sm space-y-2">
                <li>On-site, walkable from home</li>
                <li>Prosper ISD</li>
                <li>Brand-new construction</li>
              </ul>
            </div>

            <div className="bg-[#141414] border border-[#2a2a2a] p-8 text-center">
              <div className="text-xs text-[#D52E28] uppercase tracking-widest font-semibold mb-3">Location</div>
              <h3 className="text-white text-lg mb-4">Easy Commutes</h3>
              <ul className="text-white/60 text-sm space-y-2">
                <li>Minutes to Dallas North Tollway</li>
                <li>Near new Collin County Outer Loop</li>
                <li>Front yard maintenance included</li>
              </ul>
            </div>
          </div>

          <p className="text-center text-white/40 text-xs mt-8">
            PID community — see attached documents for details.
          </p>
        </div>
      </section>

      {/* ── CTA Banner ─────────────────────────────────────────── */}
      <CTABanner
        heading="Coming to the Open House?"
        subtext="2609 Holland Court, Celina TX 75009. Stop by Saturday May 2 (1–4 PM) or Sunday May 3 (12–4 PM), or schedule a private showing."
      >
        <Link href="/open-house?property=holland-ct" className="btn-white">Open House Sign-In</Link>
        <Link href="/new-client-inquiry" className="btn-secondary !border-white/50 !text-white hover:!bg-white/10">
          Schedule a Showing
        </Link>
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
