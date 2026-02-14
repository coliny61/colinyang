import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import QuickContact from '@/components/QuickContact'

export const metadata: Metadata = {
  title: 'Portfolio | Colin Yang - DFW Luxury Real Estate',
  description: 'View Colin Yang\'s real estate portfolio - luxury properties sold and listed across Dallas-Fort Worth. Browse homes in Dallas, Frisco, McKinney, and surrounding areas.',
  keywords: 'Colin Yang portfolio, DFW homes sold, Dallas real estate listings, luxury homes Dallas, McKinney homes, Frisco real estate',
}

const properties = [
  { slug: '4928-lexington', address: '4928 Lexington Court', city: 'Dallas', status: 'LEASED', hasImages: true, thumbnail: '/images/portfolio/4928-lexington/photo-1.jpeg' },
  { slug: '715-declaration', address: '715 Declaration Drive', city: 'Princeton', status: 'SOLD', hasImages: true, thumbnail: '/images/portfolio/715-declaration/photo-1.jpeg' },
  { slug: '4556-cypress-thorn', address: '4556 Cypress Thorn Drive', city: 'Arlington', status: 'SOLD', hasImages: true, thumbnail: '/images/portfolio/4556-cypress-thorn/photo-1.jpeg' },
  { slug: '2611-hondo-ave', address: '2611 Hondo Avenue', city: 'Dallas', status: 'SOLD', hasImages: false, thumbnail: null },
  { slug: '404-warwick-boulevard', address: '404 Warwick Boulevard', city: 'The Colony', status: 'SOLD', hasImages: false, thumbnail: null },
  { slug: '8100-rincon-street', address: '8100 Rincon Street', city: 'Frisco', status: 'SOLD', hasImages: false, thumbnail: null },
  { slug: '2209-tralee-circle', address: '2209 Tralee Circle', city: 'McKinney', status: 'SOLD', hasImages: false, thumbnail: null },
  { slug: '5734-oram-street', address: '5734 Oram Street', city: 'Dallas', status: 'SOLD', hasImages: false, thumbnail: null },
  { slug: '7304-collin-mckinney-parkway', address: '7304 Collin McKinney Parkway', city: 'McKinney', status: 'SOLD', hasImages: false, thumbnail: null },
  { slug: '4700-sagan', address: '4700 Sagan Drive', city: 'McKinney', status: 'SOLD', hasImages: true, thumbnail: '/images/portfolio/4700-sagan/photo-1.jpeg' },
  { slug: '508-saddle-pass', address: '508 Saddle Pass', city: 'McKinney', status: 'SOLD', hasImages: true, thumbnail: '/images/portfolio/508-saddle-pass/photo-1.jpg' },
]

export default function PortfolioPage() {
  return (
    <div>
      <QuickContact />

      {/* Hero Header */}
      <section className="section">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <div className="badge mb-6">Portfolio</div>
            <h1 className="mb-6">Properties I&apos;ve Sold</h1>
            <p className="text-xl text-white/70 leading-relaxed">
              A collection of homes I&apos;ve helped clients buy and sell across the Dallas-Fort Worth metroplex.
            </p>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="section section-surface">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <Link
                key={property.slug}
                href={`/portfolio/${property.slug}`}
                className="group"
              >
                <div className="relative overflow-hidden border border-[#2a2a2a] mb-4">
                  <div className="relative aspect-[4/3] image-hover-zoom">
                    {property.hasImages && property.thumbnail ? (
                      <Image
                        src={property.thumbnail}
                        alt={property.address}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center">
                        <svg className="w-16 h-16 text-[#D52E28]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                    )}
                  </div>
                  {/* Status Badge */}
                  {property.status && (
                    <div className="absolute top-3 left-3 bg-[#D52E28] text-white text-xs font-bold uppercase tracking-wider px-3 py-1">
                      {property.status}
                    </div>
                  )}
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-medium">View Property</span>
                  </div>
                </div>
                <h3 className="text-white group-hover:text-[#D52E28] transition-colors mb-1">{property.address}</h3>
                <p className="text-white/50 text-sm mb-0">{property.city}, TX</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#D52E28] to-[#b82420]"></div>
        <div className="absolute inset-0 bg-[url('/images/hero.jpeg')] bg-cover bg-center opacity-10"></div>

        <div className="relative container mx-auto text-center">
          <h2 className="text-white mb-6">Ready to Add Your Home to This List?</h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Whether buying or selling, I&apos;m here to help you every step of the way.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/new-client-inquiry" className="btn-white">
              Get Started
            </Link>
            <a href="tel:4692561088" className="btn-white">
              (469) 256-1088
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
