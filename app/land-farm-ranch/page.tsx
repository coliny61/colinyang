import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Land, Farm & Ranch | Colin Yang - DFW Real Estate',
  description: 'Looking for land, farm, or ranch property in Texas? Colin Yang offers expertise and off-market listings through his Texas Tech network.',
}

export default function LandFarmRanchPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="banner min-h-[50vh]">
        <Image
          src="/images/land-ranch-1.jpeg"
          alt="Texas Ranch Land"
          fill
          className="object-cover"
        />
        <div className="hero-overlay" />
        <div className="banner-content">
          <h1 className="text-white">Land, Farm & Ranch</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                Looking for property in Texas for either developed or undeveloped land, farm, and ranch could be really tedious and misleading.
              </p>
              <p className="text-lg leading-relaxed">
                With my background and network of people from Texas Tech, I am able to utilize this advantage and leverage many off-market listings and strategies that others do not offer.
              </p>
            </div>
            <div className="relative aspect-[4/3] image-hover-zoom">
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
            <h2 className="text-center mb-8">
              Please fill out the form below and I will reach out to you immediately about your inquiry.
            </h2>

            <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name">Name *</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div>
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" required />
                </div>
              </div>

              <div>
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" />
              </div>

              <div>
                <label>Property Type</label>
                <div className="flex flex-wrap gap-6 mt-2">
                  {['Land', 'Farm', 'Ranch'].map((option) => (
                    <label key={option} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="propertyType"
                        value={option}
                        className="w-4 h-4"
                      />
                      <span className="text-sm">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="purchaseDate">Preferred Purchase Date</label>
                  <input type="date" id="purchaseDate" name="purchaseDate" />
                </div>
                <div>
                  <label htmlFor="budget">Budget</label>
                  <input type="text" id="budget" name="budget" placeholder="e.g., $500,000 - $1,000,000" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="acreage">Acreage</label>
                  <input type="text" id="acreage" name="acreage" placeholder="e.g., 50+ acres" />
                </div>
                <div>
                  <label htmlFor="location">Desired Location</label>
                  <input type="text" id="location" name="location" placeholder="e.g., West Texas, Hill Country" />
                </div>
              </div>

              <div>
                <label htmlFor="purpose">Property Purpose</label>
                <textarea
                  id="purpose"
                  name="purpose"
                  rows={4}
                  placeholder="What do you plan to use the property for?"
                  className="resize-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
