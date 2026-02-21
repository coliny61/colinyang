import { Metadata } from 'next'
import Link from 'next/link'
import { testimonials } from '@/lib/testimonials'
import CTABanner from '@/components/CTABanner'
import { AGENT_TEL } from '@/lib/agent'

export const metadata: Metadata = {
  title: 'Client Reviews | Colin Yang - DFW Luxury Real Estate',
  description: 'Read what clients say about working with Colin Yang. 5-star rated real estate agent in Dallas-Fort Worth specializing in luxury homes, investments, and relocations.',
  keywords: 'Colin Yang reviews, DFW realtor reviews, Dallas real estate agent reviews, 5 star realtor Dallas',
  alternates: {
    canonical: 'https://colinyang.com/reviews',
  },
}

const reviews = testimonials.map(t => ({
  quote: t.longQuote || t.quote,
  author: t.author,
  role: t.role,
  date: t.date || '2024',
  platform: t.platform || 'Google',
  rating: t.rating || 5,
}))

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Colin Yang',
  telephone: '+14692561088',
  email: 'colin@brayreg.com',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    bestRating: '5',
    worstRating: '1',
    reviewCount: reviews.length.toString(),
  },
  review: reviews.map((r) => ({
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: r.rating.toString(),
      bestRating: '5',
    },
    author: {
      '@type': 'Person',
      name: r.author,
    },
    reviewBody: r.quote,
  })),
}

function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-5 h-5 text-[#D52E28]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <section className="section">
        <div className="container mx-auto text-center">
          <div className="badge mx-auto mb-6">Testimonials</div>
          <h1 className="text-white mb-6">What Clients Say</h1>

          {/* Aggregate Rating */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-5xl font-bold text-white">5.0</span>
            <div>
              <StarRow />
              <p className="text-white/50 text-sm mt-1">Based on {reviews.length} reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section section-surface">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-[#141414] border border-[#2a2a2a] p-8 flex flex-col">
                <StarRow count={review.rating} />
                <blockquote className="text-white/80 leading-relaxed mt-4 mb-6 flex-1">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#D52E28] flex items-center justify-center text-white font-bold text-lg">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{review.author}</div>
                      <div className="text-sm text-white/40">{review.role}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-white/30 border border-white/10 px-2 py-1">{review.platform}</span>
                    <div className="text-xs text-white/20 mt-1">{review.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Google CTA */}
          <div className="mt-12 text-center">
            <p className="text-white/50 mb-4">Want to leave a review?</p>
            <a
              href="https://g.page/r/review"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Review on Google
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        heading="Ready to Be Our Next Success Story?"
        subtext="Join the growing list of satisfied clients. Let Colin help you achieve your real estate goals."
      >
        <Link href="/new-client-inquiry" className="btn-white">
          Get Started
        </Link>
        <a href={AGENT_TEL} className="btn-white">
          (469) 256-1088
        </a>
      </CTABanner>
    </div>
  )
}
