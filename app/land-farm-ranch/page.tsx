import { Metadata } from 'next'
import Image from 'next/image'
import QuickContact from '@/components/QuickContact'

export const metadata: Metadata = {
  title: 'Land, Farm & Ranch | Colin Yang - DFW Luxury Real Estate',
  description: 'Looking for land, farm, or ranch property in Texas? Colin Yang offers expertise and off-market listings through his Texas Tech network.',
  keywords: 'Texas land for sale, ranch property Texas, farm land DFW, West Texas ranch, Colin Yang land broker',
}

export default function LandFarmRanchPage() {
  return (
    <div className="bg-[#0a0a0a]">
      <QuickContact />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center">
        <Image
          src="/images/land-ranch-1.jpeg"
          alt="Texas Ranch Land"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a]" />
        <div className="relative text-center px-6">
          <div className="badge mx-auto mb-6">Land & Ranch</div>
          <h1 className="text-white mb-4">Land, Farm & Ranch</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Looking for property in Texas for either developed or undeveloped land, farm, and ranch could be really tedious and misleading.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                With my background and network of people from Texas Tech, I am able to utilize this advantage and leverage many off-market listings and strategies that others do not offer.
              </p>
            </div>
            <div className="relative aspect-[4/3] border border-[#2a2a2a] overflow-hidden image-hover-zoom">
              <Image
                src="/images/land-ranch-2.jpeg"
                alt="Farm land in Texas"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Form */}
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-white mb-4">Get In Touch</h2>
              <p className="text-white/60">
                Please fill out the form below and I will reach out to you immediately about your inquiry.
              </p>
            </div>

            <div className="bg-[#141414] border border-[#2a2a2a] p-8 md:p-10">
              <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Name <span className="text-[#D52E28]">*</span>
                    </label>
                    <input type="text" id="name" name="name" required className="form-input" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email <span className="text-[#D52E28]">*</span>
                    </label>
                    <input type="email" id="email" name="email" required className="form-input" />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                    Phone
                  </label>
                  <input type="tel" id="phone" name="phone" className="form-input" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-3">
                    Property Type
                  </label>
                  <div className="flex flex-wrap gap-6">
                    {['Land', 'Farm', 'Ranch'].map((option) => (
                      <label key={option} className="flex items-center space-x-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          name="propertyType"
                          value={option}
                          className="form-checkbox"
                        />
                        <span className="text-white/70 group-hover:text-white transition-colors">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="purchaseDate" className="block text-sm font-medium text-white mb-2">
                      Preferred Purchase Date
                    </label>
                    <input type="date" id="purchaseDate" name="purchaseDate" className="form-input" />
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-white mb-2">
                      Budget
                    </label>
                    <input type="text" id="budget" name="budget" placeholder="e.g., $500,000 - $1,000,000" className="form-input" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="acreage" className="block text-sm font-medium text-white mb-2">
                      Acreage
                    </label>
                    <input type="text" id="acreage" name="acreage" placeholder="e.g., 50+ acres" className="form-input" />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-white mb-2">
                      Desired Location
                    </label>
                    <input type="text" id="location" name="location" placeholder="e.g., West Texas, Hill Country" className="form-input" />
                  </div>
                </div>

                <div>
                  <label htmlFor="purpose" className="block text-sm font-medium text-white mb-2">
                    Property Purpose
                  </label>
                  <textarea
                    id="purpose"
                    name="purpose"
                    rows={4}
                    placeholder="What do you plan to use the property for?"
                    className="form-textarea"
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
