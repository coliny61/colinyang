import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'New Client Inquiry | Colin Yang - DFW Real Estate',
  description: 'Start your real estate journey with Colin Yang. Whether buying, selling, or leasing in Dallas-Fort Worth, fill out our inquiry form to get started.',
}

export default function NewClientInquiryPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">New Client Inquiry</h1>
          <p className="text-gray-600">
            Tell me about what you&apos;re looking for and I&apos;ll reach out to you as soon as possible.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm">
          <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST" className="space-y-6">
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
                placeholder="Your name"
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
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="(555) 555-5555"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What are you looking for? <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-4">
                {['Buy', 'Lease', 'Sell'].map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="lookingFor"
                      value={option}
                      className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="moveInDate" className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Move-In Date
              </label>
              <input
                type="date"
                id="moveInDate"
                name="moveInDate"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="priceRange" className="block text-sm font-medium text-gray-700 mb-1">
                What is your Price Range?
              </label>
              <input
                type="text"
                id="priceRange"
                name="priceRange"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="e.g., $300,000 - $400,000"
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="location"
                name="location"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Preferred area or neighborhood"
              />
            </div>

            <div>
              <label htmlFor="howDidYouHear" className="block text-sm font-medium text-gray-700 mb-1">
                How did you hear about us?
              </label>
              <input
                type="text"
                id="howDidYouHear"
                name="howDidYouHear"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Referral, Google, Instagram, etc."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Submit
            </button>

            <p className="text-xs text-gray-500 mt-4">
              By submitting this form, you consent to receive marketing communications via calls, texts, and emails. You may opt out at any time.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
