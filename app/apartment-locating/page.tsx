import { Metadata } from 'next'
import QuickContact from '@/components/QuickContact'

export const metadata: Metadata = {
  title: 'Apartment Locating | Colin Yang - DFW Real Estate',
  description: 'Free apartment locating services in Dallas-Fort Worth. Find apartments, houses, townhomes, and condos for lease.',
  keywords: 'apartment locating Dallas, DFW apartments for rent, Dallas lease, Frisco apartments, McKinney rentals',
}

export default function ApartmentLocatingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <QuickContact />

      <div className="section">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <div className="badge mx-auto mb-6">Leasing</div>
            <h1 className="text-white mb-4">Apartment Locating</h1>
            <p className="text-xl text-white/70">
              Leases for Apartments, Houses, Townhomes, and Condos
            </p>
          </div>

          <div className="bg-[#141414] border border-[#2a2a2a] p-8 md:p-10">
            <h2 className="text-xl text-white font-semibold mb-6">Lease Contact Form</h2>

            <form action="https://formspree.io/f/xqebdqqw" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email <span className="text-[#D52E28]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="form-input"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input"
                  placeholder="(555) 555-5555"
                />
              </div>

              <div>
                <label htmlFor="moveInDate" className="block text-sm font-medium text-white mb-2">
                  Preferred Move-In Date
                </label>
                <input
                  type="date"
                  id="moveInDate"
                  name="moveInDate"
                  className="form-input"
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-white mb-2">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="form-input"
                  placeholder="Preferred area or neighborhood"
                />
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-white mb-2">
                  Budget
                </label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  className="form-input"
                  placeholder="e.g., $1,500 - $2,000/month"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="bedrooms" className="block text-sm font-medium text-white mb-2">
                    Bedrooms
                  </label>
                  <select id="bedrooms" name="bedrooms" className="form-select">
                    <option value="">Select</option>
                    <option value="studio">Studio</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4+">4+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="bathrooms" className="block text-sm font-medium text-white mb-2">
                    Bathrooms
                  </label>
                  <select id="bathrooms" name="bathrooms" className="form-select">
                    <option value="">Select</option>
                    <option value="1">1</option>
                    <option value="1.5">1.5</option>
                    <option value="2">2</option>
                    <option value="2.5">2.5</option>
                    <option value="3+">3+</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="btn-primary w-full justify-center mt-8">
                Submit
              </button>

              <p className="text-sm text-white/40 text-center">
                Thank you! I will review your information and get back to you shortly!
              </p>
            </form>
          </div>

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
