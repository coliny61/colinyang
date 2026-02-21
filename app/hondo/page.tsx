import { Metadata } from 'next'
import Link from 'next/link'
import PropertyGallery from '@/components/PropertyGallery'
import FeatureIcon from '@/components/listing/FeatureIcon'
import ListingSpecsBar from '@/components/listing/ListingSpecsBar'
import AgentCard from '@/components/AgentCard'
import CTABanner from '@/components/CTABanner'
import { AGENT_TEL, AGENT_SMS } from '@/lib/agent'
import HondoHero from './HondoHero'

export const metadata: Metadata = {
  title: 'For Lease: 2203 Hondo Avenue, Dallas TX',
  description: '3 Bed | 3.5 Bath | 2,440 Sqft | $4,200/mo — 13th Month FREE',
  robots: {
    index: false,
    follow: false,
  },
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
}

const GALLERY_IMAGES: string[] = []

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

export default function HondoPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* ── Hero ────────────────────────────────────────────────── */}
      <HondoHero />

      {/* ── Specs Bar ──────────────────────────────────────────── */}
      <ListingSpecsBar
        beds={3}
        baths={3.5}
        sqft="2,440"
        garage="2-Car"
        price="$4,200"
        badges={['13th Month FREE on 12-Month Lease', 'Two Units Available \u2014 203 & 204']}
      />

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
      {GALLERY_IMAGES.length > 0 && (
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
      )}

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
      <CTABanner
        heading="Interested? Apply Today."
        subtext="$4,200/month — 13th month FREE on a 12-month lease. Two identical units available — 203 & 204."
      >
        <Link href="/lease-inquiry?property=2203-hondo" className="btn-white">Apply Now</Link>
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
      <AgentCard ctaLabel="Apply Now" ctaHref="/lease-inquiry?property=2203-hondo" />
    </div>
  )
}
