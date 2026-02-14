import { Metadata } from 'next'
import QuickContact from '@/components/QuickContact'
import LeaseInquiryForm from './LeaseInquiryForm'

export const metadata: Metadata = {
  title: 'Lease Inquiry | Colin Yang - DFW Real Estate',
  description: 'Submit a residential lease pre-qualification inquiry for properties in Dallas-Fort Worth. Colin Yang provides expert leasing services through Bray Real Estate Group.',
  keywords: 'lease inquiry Dallas, residential lease DFW, rental application, apartment lease, Colin Yang leasing, Bray Real Estate',
}

export default function LeaseInquiryPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <QuickContact />

      <div className="section">
        <div className="container mx-auto max-w-2xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="badge mx-auto mb-6">Pre-Qualification</div>
            <h1 className="text-white mb-4">Residential Lease Inquiry</h1>
            <p className="text-lg text-white/70 mb-4">
              Thank you for your interest. Please complete the following pre-qualification
              questionnaire. This form helps us determine if the property may be a good fit
              before proceeding with showings, applications, or credit/background checks.
            </p>
            <p className="text-sm text-white/40">
              All fields marked with <span className="text-[#D52E28]">*</span> are required.
            </p>
          </div>

          {/* Form */}
          <LeaseInquiryForm />

          {/* Contact Section */}
          <div className="mt-12 text-center">
            <p className="text-white/50 mb-4">Questions? Contact Colin directly:</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:4692561088" className="btn-secondary inline-flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (469) 256-1088
              </a>
              <a href="mailto:colin@brayreg.com" className="btn-secondary inline-flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                colin@brayreg.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
