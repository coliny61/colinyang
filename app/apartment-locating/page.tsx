import { Metadata } from 'next'
import ApartmentForm from './ApartmentForm'

export const metadata: Metadata = {
  title: 'Apartment Locating | Colin Yang - DFW Real Estate',
  description: 'Free apartment locating services in Dallas-Fort Worth. Find apartments, houses, townhomes, and condos for lease.',
  keywords: 'apartment locating Dallas, DFW apartments for rent, Dallas lease, Frisco apartments, McKinney rentals',
  alternates: {
    canonical: 'https://colinyang.com/apartment-locating',
  },
}

export default function ApartmentLocatingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <div className="section">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <div className="badge mx-auto mb-6">Leasing</div>
            <h1 className="text-white mb-4">Apartment Locating</h1>
            <p className="text-xl text-white/70">
              Leases for Apartments, Houses, Townhomes, and Condos
            </p>
          </div>

          <ApartmentForm />

          {/* Benefits */}
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {[
              { title: 'Free Service', desc: 'No cost to you' },
              { title: 'Local Expert', desc: 'DFW native knowledge' },
              { title: 'Bilingual', desc: 'English & Mandarin' },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 bg-[#141414] border border-[#2a2a2a]">
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
