import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Land, Farm & Ranch | Colin Yang - DFW Real Estate',
  description: 'Looking for land, farm, or ranch property in Texas? Colin Yang offers expertise and off-market listings through his Texas Tech network.',
}

export default function LandFarmRanchPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/65abf6f1bf81c02e7cbd3cb1/1705944856552-MAOULGQYK28W5TYVASQ9/image-asset.jpeg"
          alt="Texas Ranch Land"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Land, Farm & Ranch</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Looking for property in Texas for either developed or undeveloped land, farm, and ranch could be really tedious and misleading.
              </p>
              <p className="text-lg text-gray-600">
                With my background and network of people from Texas Tech, I am able to utilize this advantage and leverage many off-market listings and strategies that others do not offer.
              </p>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/65abf6f1bf81c02e7cbd3cb1/1705945000572-T99Z7LS9KTYK09TLOHIU/image-asset.jpeg"
                alt="Farm land in Texas"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Please fill out the form below and I will reach out to you immediately about your inquiry.
            </h2>

            <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Type
                </label>
                <div className="flex flex-wrap gap-4">
                  {['Land', 'Farm', 'Ranch'].map((option) => (
                    <label key={option} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name="propertyType"
                        value={option}
                        className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="purchaseDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Purchase Date
                  </label>
                  <input
                    type="date"
                    id="purchaseDate"
                    name="purchaseDate"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                    Budget
                  </label>
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    placeholder="e.g., $500,000 - $1,000,000"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="acreage" className="block text-sm font-medium text-gray-700 mb-1">
                    Acreage
                  </label>
                  <input
                    type="text"
                    id="acreage"
                    name="acreage"
                    placeholder="e.g., 50+ acres"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    Desired Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="e.g., West Texas, Hill Country"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 mb-1">
                  Property Purpose
                </label>
                <textarea
                  id="purpose"
                  name="purpose"
                  rows={3}
                  placeholder="What do you plan to use the property for?"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
