import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free DFW Real Estate Guides | Colin Yang',
  description: 'Free in-depth guides for buyers, sellers, and relocators in Dallas-Fort Worth. Expert insights from a bilingual DFW luxury real estate agent.',
  keywords: 'DFW real estate guide, Dallas home buying guide, Dallas seller checklist, relocating to Dallas, free real estate resources Texas',
  alternates: { canonical: 'https://colinyang.com/guides' },
}

const guides = [
  {
    slug: 'dfw-buyer-guide',
    badge: 'Buyers',
    title: 'The DFW Luxury Buyer\'s Guide',
    description: 'Prestigious neighborhoods, the Texas buying process, off-market access, and the mistakes high-end buyers make.',
    readMins: 12,
  },
  {
    slug: 'dfw-seller-checklist',
    badge: 'Sellers',
    title: 'The DFW Pre-Listing Checklist',
    description: 'A 30 / 60 / 90-day countdown for selling your DFW home for top dollar — repairs, staging, and pricing strategy.',
    readMins: 11,
  },
  {
    slug: 'relocating-to-dfw',
    badge: 'Relocation',
    title: 'Relocating to Dallas-Fort Worth',
    description: 'Choosing your area, school districts, property taxes, international buyer specifics, and resources for Mandarin-speaking families.',
    readMins: 14,
  },
]

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <section className="section">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-16">
            <div className="badge mb-6">Free Guides</div>
            <h1 className="text-white mb-6">DFW Real Estate Resources</h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
              In-depth, no-fluff guides for buyers, sellers, and relocators in Dallas-Fort Worth — written from real transactions, not generic templates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group bg-[#141414] border border-[#2a2a2a] hover:border-[#D52E28]/40 transition-all p-8 flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="badge">{guide.badge}</span>
                  <span className="text-xs text-white/40 uppercase tracking-wider">{guide.readMins} min read</span>
                </div>
                <h2 className="text-white text-2xl font-semibold mb-3 group-hover:text-[#D52E28] transition-colors">
                  {guide.title}
                </h2>
                <p className="text-white/60 leading-relaxed flex-1">{guide.description}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-[#D52E28] text-sm font-medium">
                  Read the guide
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 bg-[#141414] border border-[#2a2a2a] p-8 text-center">
            <h2 className="text-white text-xl font-semibold mb-3">Have a Question These Guides Don&apos;t Answer?</h2>
            <p className="text-white/60 mb-6">
              I&apos;m happy to answer specific questions over a quick call — no commitment, no pressure.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:4692561088" className="btn-primary">Call (469) 256-1088</a>
              <Link href="/lets-connect" className="btn-secondary">Send a Message</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
