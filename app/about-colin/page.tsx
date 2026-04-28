import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { testimonials as allTestimonials } from '@/lib/testimonials'
import CTABanner from '@/components/CTABanner'
import { AGENT_TEL, GOOGLE_REVIEW_URL } from '@/lib/agent'

export const metadata: Metadata = {
  title: 'About Colin Yang',
  description: 'Learn about Colin Yang - Frisco native, Texas Tech football alumni, bilingual real estate expert serving the Dallas-Fort Worth metroplex. Licensed REALTOR® with Bray Real Estate Group.',
  keywords: 'Colin Yang realtor, bilingual real estate agent Texas, Dallas realtor',
  alternates: {
    canonical: 'https://colinyang.com/about-colin',
  },
}

const highlights = [
  { label: 'Hometown', value: 'Frisco, TX' },
  { label: 'Education', value: 'Texas Tech University' },
  { label: 'Languages', value: 'English & Mandarin' },
  { label: 'License', value: '#815417' },
]

// About page shows 4 testimonials: Colby, Jalen, Chris, Tannaz
const testimonials = [allTestimonials[0], allTestimonials[1], allTestimonials[2], allTestimonials[3]]

export default function AboutColinPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="absolute -inset-4 bg-[#D52E28] opacity-10 blur-3xl"></div>
              <div className="relative border border-[#2a2a2a]">
                <div className="relative aspect-[3/4] image-hover-zoom">
                  <Image
                    src="/images/colin-headshot.jpg"
                    alt="Colin Yang - DFW Luxury Real Estate Agent"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="badge mb-8">About Me</div>
              <h1 className="mb-6">Colin Yang</h1>

              <div className="divider mb-8"></div>

              <div className="space-y-6 text-white/70 leading-relaxed">
                <p>
                  I&apos;m a real estate professional based in Dallas-Fort Worth, dedicated to helping clients navigate the complexities of buying, selling, and investing in Texas real estate.
                </p>
                <p>
                  Born and raised in Frisco, Texas, I bring deep local knowledge and genuine passion for the DFW metroplex. I earned my Master&apos;s degree in Data Science and Bachelor&apos;s degree in Business Analysis from Texas Tech University, where I also played football for four years (2016-2020).
                </p>
                <p>
                  My analytical background combined with my competitive drive as a former athlete means I approach every transaction with strategy, discipline, and an unwavering commitment to my clients&apos; success.
                </p>
                <p className="text-white font-semibold">
                  Fluent in English and Mandarin Chinese, I&apos;m uniquely positioned to serve our diverse DFW community.
                </p>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4 mt-10">
                {highlights.map((item) => (
                  <div key={item.label} className="bg-[#141414] border border-[#2a2a2a] p-5">
                    <div className="text-xs text-white/40 uppercase tracking-wider mb-1">
                      {item.label}
                    </div>
                    <div className="text-white font-medium">{item.value}</div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-4 mt-10">
                <a href="tel:4692561088" className="btn-primary">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Schedule Call
                </a>
                <a href="mailto:colin@brayreg.com" className="btn-secondary">
                  Email Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section section-surface">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="badge mx-auto mb-6">Services</div>
            <h2 className="mb-4">What I Offer</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Luxury Home Sales', icon: '🏛️' },
              { name: 'First-Time Buyers', icon: '🔑' },
              { name: 'Investment Properties', icon: '📈' },
              { name: 'Relocation Services', icon: '🌎' },
              { name: 'Apartment Locating', icon: '🏢' },
              { name: 'Land & Ranch', icon: '🌾' },
            ].map((service) => (
              <div key={service.name} className="card text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="mb-2">{service.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="badge mx-auto mb-6">Testimonials</div>
            <h2 className="mb-4">What Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p className="testimonial-quote pt-12 mb-8">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#D52E28] flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-white/40">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Past client review solicitation */}
          <div className="mt-16 max-w-2xl mx-auto bg-[#141414] border border-[#2a2a2a] p-8 md:p-10 text-center">
            <div className="flex justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-6 h-6 text-[#D52E28]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <h3 className="text-white text-2xl font-semibold mb-3">Worked With Me Before?</h3>
            <p className="text-white/60 mb-6">
              Your review on Google helps other DFW families and investors find me. It takes about 30 seconds — and it means a lot.
            </p>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Leave a Google Review
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        heading="Let's Work Together"
        subtext="Ready to buy, sell, or invest? I'm here to guide you every step of the way."
        backgroundImage="/images/hero.jpeg"
      >
        <Link href="/new-client-inquiry" className="btn-white">
          Start Your Journey
        </Link>
        <a href={AGENT_TEL} className="btn-white">
          (469) 256-1088
        </a>
      </CTABanner>
    </div>
  )
}
