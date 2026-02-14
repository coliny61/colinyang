import { Metadata } from 'next'
import QuickContact from '@/components/QuickContact'
import ClientInquiryForm from './ClientInquiryForm'

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

          <ClientInquiryForm />

          {/* Direct Contact */}
          <div className="mt-12 text-center">
            <p className="text-white/50 mb-4">Prefer to reach out directly?</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:4692561088" className="btn-secondary inline-flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (469) 256-1088
              </a>
              <a href="mailto:colin@brayreg.com" className="btn-secondary inline-flex items-center gap-2">
                colin@brayreg.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
