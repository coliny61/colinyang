import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import QuickContact from '@/components/QuickContact'

export const metadata: Metadata = {
  title: 'About Colin Yang',
  description: 'Learn about Colin Yang - Frisco native, Texas Tech football alumni, bilingual real estate expert serving the Dallas-Fort Worth metroplex. Licensed REALTOR® with Bray Real Estate Group.',
  keywords: 'Colin Yang realtor, bilingual real estate agent Texas, Dallas realtor',
}

const highlights = [
  { label: 'Hometown', value: 'Frisco, TX' },
  { label: 'Education', value: 'Texas Tech University' },
  { label: 'Languages', value: 'English & Mandarin' },
  { label: 'License', value: '#815417' },
]

const testimonials = [
  {
    quote: "Colin is a lifesaver! With football season fast approaching and my stress levels through the roof, Colin swooped in and found me the perfect home in under 2 days.",
    author: "Colby W.",
    role: "Professional Athlete",
  },
  {
    quote: "Colin went above and beyond as my realtor. He quickly found me the ideal home and made the entire process seamless.",
    author: "Jalen R.",
    role: "First-Time Buyer",
  },
  {
    quote: "I was in a frantic rush... Colin stepped in and found me a fantastic home in less than 48 hours.",
    author: "Chris B.",
    role: "Corporate Relocator",
  },
  {
    quote: "We had a crazy short two week window to find a home, and he made it feel like a walk in the park.",
    author: "Tannaz Z.",
    role: "Relocating Family",
  },
]

export default function AboutColinPage() {
  return (
    <div>
      <QuickContact />

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
        </div>
      </section>

      {/* CTA */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#D52E28] to-[#b82420]"></div>
        <div className="absolute inset-0 bg-[url('/images/hero.jpeg')] bg-cover bg-center opacity-10"></div>

        <div className="relative container mx-auto text-center">
          <h2 className="text-white mb-6">Let&apos;s Work Together</h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Ready to buy, sell, or invest? I&apos;m here to guide you every step of the way.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/new-client-inquiry" className="btn-white">
              Start Your Journey
            </Link>
            <a href="tel:4692561088" className="btn-white">
              (469) 256-1088
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
