import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Portfolio | Colin Yang - DFW Real Estate',
  description: 'View Colin Yang\'s real estate portfolio - properties sold and listed in the Dallas-Fort Worth area.',
}

const properties = [
  { address: '4928 Lexington Court' },
  { address: '715 Declaration Drive' },
  { address: '4556 Cypress Thorn Drive' },
  { address: '2611 Hondo Avenue' },
  { address: '404 Warwick Boulevard' },
  { address: '8100 Rincon Street' },
  { address: '2209 Tralee Circle' },
  { address: '5734 Oram Street' },
  { address: '7304 Collin McKinney Parkway' },
  { address: '4700 Sagan Drive' },
  { address: '508 Saddle Pass' },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
          <p className="text-gray-600">
            Properties I&apos;ve helped clients buy and sell in the DFW area.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg">{property.address}</h3>
                <p className="text-sm text-gray-500 mt-1">Dallas-Fort Worth, TX</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Interested in working together on your next property?
          </p>
          <Link
            href="/new-client-inquiry"
            className="inline-block bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}
