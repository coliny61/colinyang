import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PropertyGallery from '@/components/PropertyGallery'
import QuickContact from '@/components/QuickContact'

interface Property {
  slug: string
  address: string
  city: string
  state: string
  status?: string
  price?: string
  beds?: number
  baths?: number
  sqft?: number
  imageCount: number
  imageExt: string
  videoUrl?: string
}

const properties: Property[] = [
  { slug: '4928-lexington', address: '4928 Lexington Ct.', city: 'Dallas', state: 'Texas', status: 'Leased at $3,600', imageCount: 12, imageExt: 'jpeg' },
  { slug: '715-declaration', address: '715 Declaration Dr.', city: 'Princeton', state: 'Texas', imageCount: 10, imageExt: 'jpeg' },
  { slug: '4556-cypress-thorn', address: '4556 Cypress Thorn Dr.', city: 'Arlington', state: 'Texas', imageCount: 7, imageExt: 'jpeg' },
  { slug: '2611-hondo-ave', address: '2611 Hondo Ave.', city: 'Dallas', state: 'Texas', imageCount: 0, imageExt: '' },
  { slug: '404-warwick-boulevard', address: '404 Warwick Blvd.', city: 'The Colony', state: 'Texas', imageCount: 0, imageExt: '' },
  { slug: '8100-rincon-street', address: '8100 Rincon St.', city: 'Frisco', state: 'Texas', imageCount: 0, imageExt: '' },
  { slug: '2209-tralee-circle', address: '2209 Tralee Circle', city: 'McKinney', state: 'Texas', imageCount: 0, imageExt: '' },
  { slug: '5734-oram-street', address: '5734 Oram St.', city: 'Dallas', state: 'Texas', imageCount: 0, imageExt: '' },
  { slug: '7304-collin-mckinney-parkway', address: '7304 Collin McKinney Pkwy.', city: 'McKinney', state: 'Texas', imageCount: 0, imageExt: '' },
  { slug: '4700-sagan', address: '4700 Sagan Dr.', city: 'McKinney', state: 'Texas', imageCount: 30, imageExt: 'jpeg' },
  { slug: '508-saddle-pass', address: '508 Saddle Pass', city: 'McKinney', state: 'Texas', imageCount: 12, imageExt: 'jpg' },
]

function getProperty(slug: string): Property | undefined {
  return properties.find(p => p.slug === slug)
}

function getAdjacentProperties(slug: string): { prev: Property | null; next: Property | null } {
  const index = properties.findIndex(p => p.slug === slug)
  return {
    prev: index > 0 ? properties[index - 1] : null,
    next: index < properties.length - 1 ? properties[index + 1] : null,
  }
}

function getImages(property: Property): string[] {
  if (property.imageCount === 0) return []
  const images: string[] = []
  for (let i = 1; i <= property.imageCount; i++) {
    images.push(`/images/portfolio/${property.slug}/photo-${i}.${property.imageExt}`)
  }
  return images
}

export async function generateStaticParams() {
  return properties.map((property) => ({
    slug: property.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const property = getProperty(slug)
  if (!property) return { title: 'Property Not Found' }

  return {
    title: `${property.address} | Colin Yang - DFW Luxury Real Estate`,
    description: `View photos of ${property.address} in ${property.city}, ${property.state}. Listed by Colin Yang, DFW Luxury Real Estate Expert.`,
    keywords: `${property.address}, ${property.city} homes, Dallas real estate, Colin Yang`,
  }
}

export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const property = getProperty(slug)

  if (!property) {
    notFound()
  }

  const images = getImages(property)
  const { prev, next } = getAdjacentProperties(slug)

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <QuickContact />

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Back to Portfolio */}
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-white/50 hover:text-[#D52E28] mb-8 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Portfolio
        </Link>

        {/* Property Header */}
        <div className="mb-8">
          <h1 className="text-white mb-2">{property.address}</h1>
          <p className="text-xl text-white/50">{property.city}, {property.state}</p>

          {property.status && (
            <div className="mt-4">
              <span className="inline-flex items-center gap-2 bg-[#D52E28]/10 text-[#D52E28] px-4 py-2 text-sm font-medium border border-[#D52E28]/30">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {property.status}
              </span>
            </div>
          )}
        </div>

        {/* Property Specs */}
        {(property.beds || property.baths || property.sqft || property.price) && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {property.price && (
              <div className="bg-[#141414] border border-[#2a2a2a] p-4 text-center">
                <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Price</div>
                <div className="text-white font-semibold">{property.price}</div>
              </div>
            )}
            {property.beds && (
              <div className="bg-[#141414] border border-[#2a2a2a] p-4 text-center">
                <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Beds</div>
                <div className="text-white font-semibold">{property.beds}</div>
              </div>
            )}
            {property.baths && (
              <div className="bg-[#141414] border border-[#2a2a2a] p-4 text-center">
                <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Baths</div>
                <div className="text-white font-semibold">{property.baths}</div>
              </div>
            )}
            {property.sqft && (
              <div className="bg-[#141414] border border-[#2a2a2a] p-4 text-center">
                <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Sq Ft</div>
                <div className="text-white font-semibold">{property.sqft.toLocaleString()}</div>
              </div>
            )}
          </div>
        )}

        {/* Photo Gallery or Placeholder */}
        {images.length > 0 ? (
          <PropertyGallery images={images} address={property.address} />
        ) : (
          <div className="aspect-[16/9] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#2a2a2a] flex items-center justify-center">
            <div className="text-center text-white/30">
              <svg className="w-20 h-20 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="font-medium">Photos coming soon</p>
            </div>
          </div>
        )}

        {/* Video Tour */}
        {property.videoUrl && (
          <div className="mt-8">
            <h2 className="text-lg text-white font-semibold mb-4">Video Tour</h2>
            <div className="relative aspect-video border border-[#2a2a2a] overflow-hidden">
              <iframe
                src={property.videoUrl}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`Video tour of ${property.address}`}
              />
            </div>
          </div>
        )}

        {/* Agent Info Card */}
        <div className="mt-12 bg-[#141414] border border-[#2a2a2a] p-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
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
              </div>
            </div>
            <div className="text-sm text-white/40">
              <p className="mb-1">(469) 256-1088</p>
              <p className="mb-1">colin@brayreg.com</p>
              <p>License #815417</p>
            </div>
          </div>
        </div>

        {/* Navigation to Other Properties */}
        <div className="mt-12 pt-8 border-t border-[#2a2a2a]">
          <div className="flex justify-between items-center">
            {prev ? (
              <Link
                href={`/portfolio/${prev.slug}`}
                className="flex items-center gap-2 text-white/50 hover:text-[#D52E28] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="hidden sm:inline">{prev.address}</span>
                <span className="sm:hidden">Previous</span>
              </Link>
            ) : <div />}

            {next ? (
              <Link
                href={`/portfolio/${next.slug}`}
                className="flex items-center gap-2 text-white/50 hover:text-[#D52E28] transition-colors"
              >
                <span className="hidden sm:inline">{next.address}</span>
                <span className="sm:hidden">Next</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ) : <div />}
          </div>
        </div>
      </div>
    </div>
  )
}
