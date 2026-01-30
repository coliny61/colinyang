import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import QuickContact from '@/components/QuickContact'

export const metadata: Metadata = {
  title: 'Colin Yang | Dallas-Fort Worth Luxury Real Estate Agent',
  description: 'Colin Yang is a bilingual luxury real estate agent serving Dallas-Fort Worth. Specializing in residential, investment properties, and relocation services. Licensed Texas REALTOR® with Bray Real Estate Group.',
  keywords: 'Dallas real estate agent, Fort Worth realtor, DFW homes for sale, luxury homes Dallas, bilingual realtor Texas, Bray Real Estate Group, Colin Yang realtor',
  openGraph: {
    title: 'Colin Yang | DFW Luxury Real Estate',
    description: 'Your trusted bilingual real estate expert in Dallas-Fort Worth.',
    type: 'website',
    locale: 'en_US',
  },
}

const services = [
  {
    title: 'Luxury Homes',
    description: 'Access exclusive listings and off-market properties in DFW\'s most prestigious neighborhoods.',
    href: '/new-client-inquiry',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Investment Properties',
    description: 'Strategic investment guidance for building wealth through real estate in Texas.',
    href: '/new-client-inquiry',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Relocation Services',
    description: 'Seamless relocation assistance for families and professionals moving to DFW.',
    href: '/new-client-inquiry',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Land & Ranch',
    description: 'Expert guidance for land, farm, and ranch acquisitions across Texas.',
    href: '/land-farm-ranch',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
]

const testimonials = [
  {
    quote: "Colin is a lifesaver! With football season fast approaching and my stress levels through the roof, Colin swooped in and found me the perfect home in under 2 days.",
    author: "Colby W.",
    role: "Professional Athlete",
  },
  {
    quote: "Colin went above and beyond as my realtor. He quickly found me the ideal home and made the entire process seamless. Highly recommend!",
    author: "Jalen R.",
    role: "First-Time Buyer",
  },
  {
    quote: "We had a crazy short two week window to find a home, and he made it feel like a walk in the park. Incredible service.",
    author: "Tannaz Z.",
    role: "Relocating Family",
  },
  {
    quote: "Working with Colin has been an exceptional real estate experience. His knowledge of the DFW market exceeded all expectations.",
    author: "Ryann H.",
    role: "Investor",
  },
]

const stats = [
  { number: '$50M+', label: 'Volume Closed' },
  { number: '100+', label: 'Happy Clients' },
  { number: '48hr', label: 'Avg Response' },
  { number: '5★', label: 'Client Rating' },
]

export default function Home() {
  return (
    <div>
      <QuickContact />

      {/* Hero Section - Luxury */}
      <section className="relative min-h-screen flex items-center">
        <Image
          src="/images/hero.jpeg"
          alt="Dallas Fort Worth Luxury Real Estate"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-overlay" />

        <div className="relative z-10 container mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <div className="badge mb-8">
                <span className="w-2 h-2 bg-[#D52E28] rounded-full animate-pulse"></span>
                Now Accepting New Clients
              </div>

              <h1 className="mb-6">
                Colin Yang
              </h1>

              <p className="text-2xl md:text-3xl text-white/90 mb-6 font-light">
                Dallas-Fort Worth Luxury Real Estate
              </p>

              <div className="divider mb-8"></div>

              <p className="text-lg text-white/70 mb-10 max-w-lg leading-relaxed">
                Bilingual real estate expertise for discerning clients. Whether you&apos;re buying, selling, or investing, I deliver exceptional results with white-glove service.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <a href="tel:4692561088" className="btn-primary">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Schedule Call
                </a>
                <Link href="/new-client-inquiry" className="btn-secondary">
                  Start Your Search
                </Link>
              </div>

              {/* Bray Real Estate Group */}
              <div className="flex items-center gap-4 pt-8 border-t border-white/10">
                <span className="text-sm text-white/40 uppercase tracking-wider">Powered by</span>
                <span className="text-white font-semibold">Bray Real Estate Group</span>
              </div>
            </div>

            {/* Profile Card */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#D52E28] to-[#ff6b6b] opacity-20 blur-xl"></div>
                <div className="relative bg-[#141414] border border-[#2a2a2a] p-8">
                  <div className="relative aspect-[3/4] mb-6 image-hover-zoom">
                    <Image
                      src="/images/colin-headshot.jpg"
                      alt="Colin Yang - DFW Luxury Real Estate Agent"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl mb-1">Colin Yang</h3>
                    <p className="text-[#D52E28] text-sm uppercase tracking-wider mb-4">Licensed REALTOR®</p>
                    <div className="flex justify-center gap-4 text-sm text-white/40">
                      <span>English</span>
                      <span>•</span>
                      <span>Mandarin</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="section-surface border-y border-[#2a2a2a] py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="stat-number mb-2">{stat.number}</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <div className="badge mx-auto mb-6">Services</div>
            <h2 className="mb-4">Comprehensive Real Estate Solutions</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link key={service.title} href={service.href} className="card group">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3 className="mb-3">{service.title}</h3>
                <p className="text-white/60 text-sm">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Colin */}
      <section className="section section-surface">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="badge mb-6">Why Choose Colin</div>
              <h2 className="mb-8">The Advantage of Working With Me</h2>

              <div className="space-y-6">
                {[
                  { title: 'Bilingual Service', desc: 'Fluent in English and Mandarin Chinese to serve diverse clients.' },
                  { title: 'Local Expertise', desc: 'Born and raised in Frisco, TX with deep DFW market knowledge.' },
                  { title: 'Data-Driven Approach', desc: 'Master\'s in Data Science ensures strategic, informed decisions.' },
                  { title: 'Athlete\'s Mindset', desc: 'Texas Tech football alumni bringing discipline and dedication.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-[#D52E28]/10 border border-[#D52E28]/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#D52E28]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white mb-1">{item.title}</h4>
                      <p className="text-white/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-[#D52E28] opacity-5 blur-3xl"></div>
              <div className="relative aspect-square image-hover-zoom">
                <Image
                  src="/images/colin-headshot.jpg"
                  alt="Colin Yang Real Estate Agent"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container mx-auto">
          <div className="text-center mb-20">
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
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section section-surface">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <div className="badge mb-6">Portfolio</div>
              <h2 className="mb-4">Recent Transactions</h2>
            </div>
            <Link href="/portfolio" className="btn-secondary mt-6 md:mt-0">
              View All Properties
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { slug: '4928-lexington', address: '4928 Lexington Court', city: 'Dallas', image: '/images/portfolio/4928-lexington/photo-1.jpeg' },
              { slug: '4700-sagan', address: '4700 Sagan Drive', city: 'McKinney', image: '/images/portfolio/4700-sagan/photo-1.jpeg' },
              { slug: '715-declaration', address: '715 Declaration Drive', city: 'Princeton', image: '/images/portfolio/715-declaration/photo-1.jpeg' },
            ].map((property) => (
              <Link key={property.slug} href={`/portfolio/${property.slug}`} className="group">
                <div className="image-hover-zoom mb-4 border border-[#2a2a2a]">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={property.image}
                      alt={property.address}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-lg group-hover:text-[#D52E28] transition-colors">{property.address}</h3>
                <p className="text-white/40 text-sm">{property.city}, TX</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#D52E28] to-[#b82420]"></div>
        <div className="absolute inset-0 bg-[url('/images/hero.jpeg')] bg-cover bg-center opacity-10"></div>

        <div className="relative container mx-auto text-center">
          <h2 className="text-white mb-6">Ready to Find Your Dream Home?</h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss your real estate goals. Schedule a complimentary consultation today.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:4692561088" className="btn-white">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (469) 256-1088
            </a>
            <a href="mailto:colin@brayreg.com" className="btn-white">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Colin
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
