import { Suspense } from 'react'
import { Metadata } from 'next'
import OpenHouseForm from './OpenHouseForm'

export const metadata: Metadata = {
  title: 'Open House Sign-In | Colin Yang — DFW Real Estate',
  description:
    "Welcome to Colin Yang's open house. Sign in below so we can follow up with property details and answer any questions.",
  alternates: { canonical: 'https://colinyang.com/open-house' },
}

export default function OpenHousePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <div className="section">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-10">
            <div className="badge mx-auto mb-6">Open House Sign-In</div>
            <h1 className="text-white mb-4">Welcome — Glad You&apos;re Here</h1>
            <p className="text-lg text-white/70">
              Quick sign-in so Colin can follow up with property details, answer questions,
              or send comparable listings if you&apos;re interested.
            </p>
          </div>

          <Suspense
            fallback={
              <div className="bg-[#141414] border border-[#2a2a2a] p-8 text-center text-white/50">
                Loading form...
              </div>
            }
          >
            <OpenHouseForm />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
