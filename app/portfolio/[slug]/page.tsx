import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PropertyGallery from '@/components/PropertyGallery'
import AgentCard from '@/components/AgentCard'
import { properties, getProperty, getAdjacentProperties, getPropertyImages } from '@/lib/properties'
import { AGENT } from '@/lib/agent'

export async function generateStaticParams() {
  return properties.map((property) => ({
    slug: property.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const property = getProperty(slug)
  if (!property) return { title: 'Property Not Found' }

  const statusLine = property.status ? `${property.status} by Colin Yang.` : `Represented by Colin Yang.`
  const specs = [
    property.beds && `${property.beds} bed`,
    property.baths && `${property.baths} bath`,
    property.sqft && `${property.sqft.toLocaleString()} sqft`,
  ].filter(Boolean).join(', ')
  const specsPhrase = specs ? ` ${specs}.` : ''

  return {
    title: `${property.address} | Colin Yang - DFW Luxury Real Estate`,
    description: `${property.address}, ${property.city}, ${property.state}. ${statusLine}${specsPhrase} View photos and listing details.`,
    keywords: `${property.address}, ${property.city} homes, ${property.city} real estate, Dallas real estate agent, Colin Yang realtor`,
    alternates: {
      canonical: `https://colinyang.com/portfolio/${slug}`,
    },
  }
}

export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const property = getProperty(slug)

  if (!property) {
    notFound()
  }

  const images = getPropertyImages(property)
  const { prev, next } = getAdjacentProperties(slug)

  const propertyUrl = `https://colinyang.com/portfolio/${slug}`
  const absoluteImages = images.map((src) => `https://colinyang.com${src}`)

  const listingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: property.address,
    url: propertyUrl,
    image: absoluteImages.length > 0 ? absoluteImages : undefined,
    address: {
      '@type': 'PostalAddress',
      streetAddress: property.address,
      addressLocality: property.city,
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    ...(property.beds || property.baths || property.sqft
      ? {
          numberOfRooms: property.beds,
          numberOfBathroomsTotal: property.baths,
          floorSize: property.sqft
            ? { '@type': 'QuantitativeValue', value: property.sqft, unitCode: 'FTK' }
            : undefined,
        }
      : {}),
    broker: {
      '@type': 'RealEstateAgent',
      name: AGENT.name,
      url: 'https://colinyang.com',
      telephone: `+1-${AGENT.phone.slice(0, 3)}-${AGENT.phone.slice(3, 6)}-${AGENT.phone.slice(6)}`,
      worksFor: { '@type': 'Organization', name: AGENT.brokerage },
    },
  }

  const breadcrumbsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://colinyang.com' },
      { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://colinyang.com/portfolio' },
      { '@type': 'ListItem', position: 3, name: property.address, item: propertyUrl },
    ],
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
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
        <AgentCard />

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
