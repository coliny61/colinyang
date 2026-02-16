import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import QuickContact from '@/components/QuickContact'
import { availableListings } from '@/lib/available-listings'

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
      <QuickContact />

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
              <Link
                key={listing.slug}
                href={`/${listing.slug}`}
                className="group block bg-[#141414] border border-[#2a2a2a] hover:border-[#D52E28]/50 transition-all overflow-hidden"
              >
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

                {/* Info */}
                <div className="p-6">
                  <h2 className="text-white text-xl font-semibold mb-1 group-hover:text-[#D52E28] transition-colors">
                    {listing.address}
                  </h2>
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

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#2a2a2a]">
                    <span className="text-[#D52E28] font-bold text-lg">{listing.price}</span>
                    <span className="text-white/50 text-sm group-hover:text-[#D52E28] transition-colors flex items-center gap-1">
                      View Property
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#D52E28] to-[#b82420]" />
        <div className="relative max-w-3xl mx-auto px-6 py-16 text-center">
          <h2 className="text-white mb-3" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
            Have Questions About a Listing?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Reach out anytime &mdash; I&apos;m happy to schedule a showing or answer any questions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:4692561088" className="btn-white">
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
            <a href="mailto:colin@brayreg.com" className="btn-secondary !border-white/50 !text-white hover:!bg-white/10">
              Email
            </a>
          </div>
        </div>
      </section>

      {/* ── Agent Card ────────────────────────────────────────── */}
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
                <h3 className="text-white mb-1">Colin Yang</h3>
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
                  <Link href="/new-client-inquiry" className="btn-secondary !py-3 !px-5 !border-[#D52E28] !text-[#D52E28]">
                    Get Started
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
