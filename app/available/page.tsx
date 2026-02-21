import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { availableListings } from '@/lib/available-listings'
import AgentCard from '@/components/AgentCard'
import CTABanner from '@/components/CTABanner'
import { AGENT_TEL, AGENT_SMS, AGENT_MAILTO } from '@/lib/agent'

export const metadata: Metadata = {
  title: 'Available Properties | Colin Yang Real Estate',
  description: 'Browse properties currently available for lease or sale in Dallas-Fort Worth. Luxury homes, townhomes, and investment properties listed by Colin Yang.',
  keywords: [
    'Dallas properties for lease',
    'Dallas homes for sale',
    'DFW available properties',
    'Colin Yang listings',
    'Dallas luxury rental',
    'Oak Lawn lease',
  ],
  openGraph: {
    title: 'Available Properties | Colin Yang Real Estate',
    description: 'Browse properties currently available for lease or sale in Dallas-Fort Worth.',
    url: 'https://colinyang.com/available',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Available Properties | Colin Yang Real Estate',
    description: 'Browse properties currently available for lease or sale in Dallas-Fort Worth.',
  },
  alternates: {
    canonical: 'https://colinyang.com/available',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Available Properties',
  description: 'Properties currently available for lease or sale by Colin Yang',
  numberOfItems: availableListings.length,
  itemListElement: availableListings.map((listing, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: `https://colinyang.com/${listing.slug}`,
    name: listing.address,
  })),
}

export default function AvailablePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ── Header ────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="badge mb-4">Available Now</div>
          <h1 className="text-white mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Properties Available
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Browse my current listings available for lease or sale in Dallas-Fort Worth.
            Each property page has full details, photos, and an easy way to apply.
          </p>
        </div>
      </section>

      {/* ── Listings Grid ─────────────────────────────────────── */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className={`grid gap-8 ${availableListings.length === 1 ? 'max-w-xl mx-auto' : 'md:grid-cols-2'}`}>
            {availableListings.map((listing) => (
              <div
                key={listing.slug}
                className="group bg-[#141414] border border-[#2a2a2a] hover:border-[#D52E28]/50 transition-all overflow-hidden"
              >
                {/* Clickable Image + Title Area */}
                <Link href={`/${listing.slug}`} className="block">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {listing.thumbnail ? (
                      <Image
                        src={listing.thumbnail}
                        alt={listing.address}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#1a1a1a] flex items-center justify-center">
                        <svg className="w-16 h-16 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                    )}

                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-[#D52E28] text-white text-xs font-bold uppercase tracking-[0.15em] px-3 py-1.5">
                        {listing.status}
                      </span>
                    </div>

                    {/* Promo Badge */}
                    {listing.promo && (
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="inline-flex items-center gap-1.5 bg-black/70 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5">
                          <svg className="w-3.5 h-3.5 text-[#D52E28]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                          </svg>
                          {listing.promo}
                        </span>
                      </div>
                    )}
                  </div>
                </Link>

                {/* Info */}
                <div className="p-6">
                  <Link href={`/${listing.slug}`}>
                    <h2 className="text-white text-xl font-semibold mb-1 group-hover:text-[#D52E28] transition-colors">
                      {listing.address}
                    </h2>
                  </Link>
                  <p className="text-white/50 text-sm mb-4">
                    {listing.city}, {listing.state} {listing.zip}
                    {listing.neighborhood && ` · ${listing.neighborhood}`}
                  </p>

                  {/* Specs Row */}
                  {listing.beds > 0 && (
                    <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                      <span>{listing.beds} Bed</span>
                      <span className="text-[#D52E28]">·</span>
                      <span>{listing.baths} Bath</span>
                      <span className="text-[#D52E28]">·</span>
                      <span>{listing.sqft.toLocaleString()} Sqft</span>
                      {listing.garage && (
                        <>
                          <span className="text-[#D52E28]">·</span>
                          <span>{listing.garage} Garage</span>
                        </>
                      )}
                    </div>
                  )}

                  {/* Units */}
                  {listing.units && listing.units.length > 0 && (
                    <p className="text-white/40 text-xs mb-4">
                      {listing.units.length} {listing.units.length === 1 ? 'unit' : 'units'} available: {listing.units.join(' & ')}
                    </p>
                  )}

                  {/* Price */}
                  <div className="pt-4 border-t border-[#2a2a2a]">
                    <span className="text-[#D52E28] font-bold text-lg">{listing.price}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Link href={`/${listing.slug}`} className="btn-secondary text-xs !py-2 !px-3">
                      View Property
                    </Link>
                    <Link href={listing.ctaLink} className="btn-primary text-xs !py-2 !px-3">
                      {listing.ctaLabel}
                    </Link>
                    <a href={AGENT_TEL} className="btn-secondary text-xs !py-2 !px-3 inline-flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call
                    </a>
                    <a href={AGENT_SMS} className="btn-secondary text-xs !py-2 !px-3 inline-flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Text
                    </a>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${listing.address}, ${listing.city}, ${listing.state} ${listing.zip}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-xs !py-2 !px-3 inline-flex items-center gap-1"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Directions
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────── */}
      <CTABanner
        heading="Have Questions About a Listing?"
        subtext="Reach out anytime — I'm happy to schedule a showing or answer any questions."
      >
        <a href={AGENT_TEL} className="btn-white">
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
        <a href={AGENT_MAILTO} className="btn-secondary !border-white/50 !text-white hover:!bg-white/10">
          Email
        </a>
      </CTABanner>

      {/* ── Agent Card ────────────────────────────────────────── */}
      <AgentCard ctaLabel="Get Started" ctaHref="/new-client-inquiry" />
    </div>
  )
}
