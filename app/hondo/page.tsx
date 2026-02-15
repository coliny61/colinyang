import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PropertyGallery from '@/components/PropertyGallery'
import QuickContact from '@/components/QuickContact'
import HondoHero from './HondoHero'

export const metadata: Metadata = {
  title: 'For Lease: 2203 Hondo Avenue, Dallas TX | 3 Bed / 3.5 Bath Townhome',
  description: 'Luxury new-construction townhome for lease at 2203 Hondo Avenue, Dallas TX. 3 bed, 3.5 bath, 2,440 sqft with rooftop patio, 2-car garage, and downtown skyline views. $4,200/mo — 13th month FREE on a 12-month lease.',
  keywords: [
    '2203 Hondo Avenue',
    'Dallas townhome for lease',
    'Dallas luxury rental',
    'Oak Lawn lease',
    '3 bedroom townhome Dallas',
    'new construction lease Dallas',
    'rooftop patio Dallas',
    'Colin Yang',
  ],
  openGraph: {
    title: 'For Lease: 2203 Hondo Avenue, Dallas TX — $4,200/mo',
    description: '3 Bed | 3.5 Bath | 2,440 Sqft | Rooftop Patio | 2-Car Garage | 13th Month FREE',
    url: 'https://colinyang.com/hondo',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'For Lease: 2203 Hondo Avenue — $4,200/mo',
    description: '3 Bed | 3.5 Bath | 2,440 Sqft | Rooftop Patio | 13th Month FREE',
  },
  alternates: {
    canonical: 'https://colinyang.com/hondo',
  },
}

const GALLERY_IMAGES = [
  '/images/hondo/living-room.jpeg',
  '/images/hondo/living-dining.jpeg',
  '/images/hondo/kitchen.jpeg',
  '/images/hondo/kitchen-island.jpeg',
  '/images/hondo/dining-kitchen.jpeg',
  '/images/hondo/dining-room.jpeg',
  '/images/hondo/primary-bedroom-1.jpeg',
  '/images/hondo/primary-bedroom-2.jpeg',
  '/images/hondo/primary-bathroom.jpeg',
  '/images/hondo/bedroom-2.jpeg',
  '/images/hondo/bedroom-3.jpeg',
  '/images/hondo/bathroom-2.jpeg',
  '/images/hondo/walk-in-closet-1.jpeg',
  '/images/hondo/walk-in-closet-2.jpeg',
  '/images/hondo/vanity-nook.jpeg',
  '/images/hondo/sitting-area.jpeg',
  '/images/hondo/entry-staircase.jpeg',
  '/images/hondo/hallway.jpeg',
  '/images/hondo/hallway-2.jpeg',
  '/images/hondo/rooftop-terrace-1.jpeg',
  '/images/hondo/rooftop-terrace-2.jpeg',
  '/images/hondo/rooftop-view.jpeg',
  '/images/hondo/garage.jpeg',
]

const FEATURES = [
  { icon: 'home', label: 'New Construction', desc: 'Brand new, never lived in' },
  { icon: 'sun', label: 'Rooftop Patio', desc: 'Private rooftop with skyline views' },
  { icon: 'car', label: '2-Car Garage', desc: 'Attached private garage' },
  { icon: 'layers', label: 'Flex Space', desc: 'Versatile room for office or lounge' },
  { icon: 'star', label: 'Quartz Countertops', desc: 'Calacatta quartz throughout kitchen' },
  { icon: 'wind', label: 'New Appliances', desc: 'All brand-new stainless appliances' },
  { icon: 'maximize', label: '2,440 Sq Ft', desc: 'Spacious multi-level layout' },
  { icon: 'eye', label: 'Skyline Views', desc: 'Dallas downtown views from multiple rooms' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Residence',
  name: '2203 Hondo Avenue',
  description: 'Luxury new-construction townhome for lease in Dallas, TX. 3 bedrooms, 3.5 bathrooms, 2,440 sqft with rooftop patio and 2-car garage.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2203 Hondo Avenue',
    addressLocality: 'Dallas',
    addressRegion: 'TX',
    postalCode: '75219',
    addressCountry: 'US',
  },
  floorSize: {
    '@type': 'QuantitativeValue',
    value: 2440,
    unitCode: 'FTK',
  },
  numberOfRooms: 3,
  numberOfBathroomsTotal: 3.5,
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Rooftop Patio' },
    { '@type': 'LocationFeatureSpecification', name: '2-Car Garage' },
    { '@type': 'LocationFeatureSpecification', name: 'New Construction' },
    { '@type': 'LocationFeatureSpecification', name: 'Quartz Countertops' },
  ],
}

function FeatureIcon({ type }: { type: string }) {
  const icons: Record<string, JSX.Element> = {
    home: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />,
    sun: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />,
    car: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2zM9 17h6M9 13h6M7 9h10" />,
    layers: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />,
    star: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />,
    wind: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />,
    maximize: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />,
    eye: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></>,
  }
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      {icons[type]}
    </svg>
  )
}

export default function HondoPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <QuickContact />

      {/* ── Hero ────────────────────────────────────────────────── */}
      <HondoHero />

      {/* ── Specs Bar ──────────────────────────────────────────── */}
      <section className="bg-[#141414] border-y border-[#2a2a2a]">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            <div>
              <div className="text-xs text-white/40 uppercase tracking-widest mb-1">Beds</div>
              <div className="text-2xl font-semibold text-white">3</div>
            </div>
            <div>
              <div className="text-xs text-white/40 uppercase tracking-widest mb-1">Baths</div>
              <div className="text-2xl font-semibold text-white">3.5</div>
            </div>
            <div>
              <div className="text-xs text-white/40 uppercase tracking-widest mb-1">Sq Ft</div>
              <div className="text-2xl font-semibold text-white">2,440</div>
            </div>
            <div>
              <div className="text-xs text-white/40 uppercase tracking-widest mb-1">Garage</div>
              <div className="text-2xl font-semibold text-white">2-Car</div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="text-xs text-white/40 uppercase tracking-widest mb-1">Rent</div>
              <div className="text-2xl font-bold text-[#D52E28]">$4,200<span className="text-sm font-normal text-white/50">/mo</span></div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="badge">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
              </svg>
              13th Month FREE on 12-Month Lease
            </span>
            <span className="badge">
              Two Units Available — 203 &amp; 204
            </span>
          </div>
        </div>
      </section>

      {/* ── Features Grid ──────────────────────────────────────── */}
      <section className="section">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="badge mb-4">Property Features</div>
            <h2 className="text-white mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
              Modern Luxury in the Heart of Dallas
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Brand-new construction townhome minutes from Uptown, Oak Lawn, and Downtown Dallas.
              Three levels of living space with premium finishes throughout.
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

          <PropertyGallery images={GALLERY_IMAGES} address="2203 Hondo Avenue" />
        </div>
      </section>

      {/* ── Floor Plan Overview ─────────────────────────────────── */}
      <section className="section">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="badge mb-4">Layout</div>
            <h2 className="text-white mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
              Three Levels of Living
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#141414] border border-[#2a2a2a] p-8 text-center">
              <div className="text-xs text-[#D52E28] uppercase tracking-widest font-semibold mb-3">Level 1</div>
              <h3 className="text-white text-lg mb-4">Entry &amp; Garage</h3>
              <ul className="text-white/60 text-sm space-y-2">
                <li>Private entry foyer</li>
                <li>2-car attached garage</li>
                <li>Bedroom 3 with en-suite bath</li>
              </ul>
            </div>

            <div className="bg-[#141414] border border-[#D52E28]/30 p-8 text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D52E28] text-white text-xs px-3 py-1 uppercase tracking-wider font-semibold">Main</div>
              <div className="text-xs text-[#D52E28] uppercase tracking-widest font-semibold mb-3">Level 2</div>
              <h3 className="text-white text-lg mb-4">Living &amp; Kitchen</h3>
              <ul className="text-white/60 text-sm space-y-2">
                <li>Open-concept living &amp; dining</li>
                <li>Chef&apos;s kitchen with quartz island</li>
                <li>Balcony with sliding glass doors</li>
                <li>Half bath</li>
              </ul>
            </div>

            <div className="bg-[#141414] border border-[#2a2a2a] p-8 text-center">
              <div className="text-xs text-[#D52E28] uppercase tracking-widest font-semibold mb-3">Level 3</div>
              <h3 className="text-white text-lg mb-4">Primary &amp; Rooftop</h3>
              <ul className="text-white/60 text-sm space-y-2">
                <li>Primary suite with skyline views</li>
                <li>Marble walk-in shower</li>
                <li>Walk-in closets</li>
                <li>Flex space / office</li>
                <li>Private rooftop patio</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#D52E28] to-[#b82420]" />
        <div className="absolute inset-0 bg-[url('/images/hondo/rooftop-terrace-1.jpeg')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-3xl mx-auto px-6 py-16 text-center">
          <h2 className="text-white mb-3" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            Interested? Apply Today.
          </h2>
          <p className="text-white/80 mb-2 text-lg">
            $4,200/month &mdash; 13th month FREE on a 12-month lease.
          </p>
          <p className="text-white/60 mb-8">
            Two identical units available &mdash; 203 &amp; 204. Reach out or submit a pre-qualification.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/lease-inquiry?property=2203-hondo"
              className="btn-white"
            >
              Apply Now
            </Link>
            <a href="tel:4692561088" className="btn-secondary !border-white/50 !text-white hover:!bg-white/10">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (469) 256-1088
            </a>
            <a href="sms:4692561088" className="btn-secondary !border-white/50 !text-white hover:!bg-white/10">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Text
            </a>
          </div>
        </div>
      </section>

      {/* ── Agent Card ─────────────────────────────────────────── */}
      <section className="section">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#141414] border border-[#2a2a2a] p-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#D52E28]/30">
                <Image
                  src="/images/colin-headshot.jpg"
                  alt="Colin Yang"
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-white mb-1">Listed by Colin Yang</h3>
                <p className="text-white/50 mb-4">Dallas-Fort Worth Luxury Real Estate Expert</p>
                <div className="flex flex-wrap gap-4">
                  <a href="tel:4692561088" className="btn-primary !py-3 !px-5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call
                  </a>
                  <a href="sms:4692561088" className="btn-secondary !py-3 !px-5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Text
                  </a>
                  <a href="mailto:colin@brayreg.com" className="btn-secondary !py-3 !px-5">
                    Email
                  </a>
                  <Link href="/lease-inquiry?property=2203-hondo" className="btn-secondary !py-3 !px-5 !border-[#D52E28] !text-[#D52E28]">
                    Apply Now
                  </Link>
                </div>
              </div>
              <div className="text-sm text-white/40">
                <p className="mb-1">(469) 256-1088</p>
                <p className="mb-1">colin@brayreg.com</p>
                <p>License #815417</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
