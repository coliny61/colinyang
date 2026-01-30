import { Metadata } from 'next'
import QuickContact from '@/components/QuickContact'

export const metadata: Metadata = {
  title: 'New Client Inquiry | Colin Yang - DFW Luxury Real Estate',
  description: 'Start your real estate journey with Colin Yang. Whether buying, selling, or leasing in Dallas-Fort Worth, fill out our inquiry form to get started.',
  keywords: 'Colin Yang contact, DFW real estate inquiry, Dallas home buying, bilingual realtor Dallas',
}

export default function NewClientInquiryPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <QuickContact />

      <div className="section">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <div className="badge mx-auto mb-6">Get Started</div>
            <h1 className="text-white mb-4">New Client Inquiry</h1>
            <p className="text-white/70">
              Tell me about what you&apos;re looking for and I&apos;ll reach out to you as soon as possible.
            </p>
          </div>

          <div className="bg-[#141414] border border-[#2a2a2a] p-8 md:p-10">
            <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Name <span className="text-[#D52E28]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
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
                  Phone <span className="text-[#D52E28]">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="form-input"
                  placeholder="(555) 555-5555"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-3">
                  What are you looking for? <span className="text-[#D52E28]">*</span>
                </label>
                <div className="flex flex-wrap gap-6">
                  {['Buy', 'Lease', 'Sell'].map((option) => (
                    <label key={option} className="flex items-center space-x-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="lookingFor"
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
                <label htmlFor="priceRange" className="block text-sm font-medium text-white mb-2">
                  Price Range
                </label>
                <input
                  type="text"
                  id="priceRange"
                  name="priceRange"
                  className="form-input"
                  placeholder="e.g., $300,000 - $400,000"
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-white mb-2">
                  Location <span className="text-[#D52E28]">*</span>
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  className="form-input"
                  placeholder="Preferred area or neighborhood"
                />
              </div>

              <div>
                <label htmlFor="howDidYouHear" className="block text-sm font-medium text-white mb-2">
                  How did you hear about us?
                </label>
                <input
                  type="text"
                  id="howDidYouHear"
                  name="howDidYouHear"
                  className="form-input"
                  placeholder="Referral, Google, Instagram, etc."
                />
              </div>

              <button type="submit" className="btn-primary w-full justify-center mt-8">
                Submit
              </button>

              <p className="text-xs text-white/40 mt-4 text-center">
                By submitting this form, you consent to receive marketing communications via calls, texts, and emails. You may opt out at any time.
              </p>
            </form>
          </div>

          {/* Direct Contact */}
          <div className="mt-12 text-center">
            <p className="text-white/50 mb-4">Prefer to reach out directly?</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:4692561088" className="btn-secondary">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (469) 256-1088
              </a>
              <a href="mailto:colin@brayreg.com" className="btn-secondary">
                colin@brayreg.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
