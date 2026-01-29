import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Colin Yang - Dallas Fort Worth Real Estate Agent',
  description: 'Colin Yang is a dedicated real estate professional in DFW committed to building lasting relationships through transparency. Native of Frisco, Texas. Bilingual in Chinese and English.',
}

const services = [
  {
    title: 'Property Search',
    href: '/new-client-inquiry',
    image: '/images/property-search.jpeg',
  },
  {
    title: 'Apartment Locating',
    href: '/apartment-locating',
    image: '/images/apartment-locating.jpeg',
  },
  {
    title: 'Property Valuation',
    href: '/new-client-inquiry',
    image: '/images/property-valuation.jpeg',
  },
]

const testimonials = [
  {
    quote: "Colin is a lifesaver! With football season fast approaching and my stress levels through the roof, Colin swooped in and found me the perfect home in under 2 days.",
    author: "Colby W.",
  },
  {
    quote: "Colin went above and beyond as my realtor...he quickly found me the ideal home and made the entire process seamless.",
    author: "Jalen R.",
  },
  {
    quote: "I was in a frantic rush...Colin stepped in and found me a fantastic home in less than 48 hours.",
    author: "Chris B.",
  },
  {
    quote: "We had a crazy short two week window to find a home, and he made it feel like a walk in the park.",
    author: "Tannaz Z.",
  },
  {
    quote: "Working with Colin has been an exceptional real estate experience...exceeded expectations.",
    author: "Ryann H.",
  },
  {
    quote: "Working with Colin was a pleasure...made the whole real estate process so much fun!",
    author: "Caitlin D.",
  },
  {
    quote: "Colin is the man! His expertise and genuine care made buying our home a breeze.",
    author: "Jordan S.",
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="/images/hero.jpeg"
          alt="Dallas Fort Worth Real Estate"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-overlay" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="mb-6">Colin Yang</h1>
          <p className="text-xl md:text-2xl mb-2 text-white/90 tracking-wide">
            Dallas - Fort Worth Real Estate Agent
          </p>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Meet Colin Yang, your dedicated real estate professional committed to building lasting relationships through transparency
          </p>
          <Link href="/new-client-inquiry" className="btn-white">
            Get Started
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-16">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.title} href={service.href} className="group image-hover-zoom">
                <div className="relative aspect-[4/3] mb-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-center uppercase tracking-widest text-sm font-semibold">
                  {service.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[3/4] image-hover-zoom">
              <Image
                src="/images/colin-profile.png"
                alt="Colin Yang"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="mb-8">About Colin</h2>
              <p className="text-lg leading-relaxed mb-4">
                Native of Frisco, Texas. Texas Tech University football alumni. Bilingual in Chinese and English.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                With expertise in the DFW Metroplex, Colin emphasizes transparency and open communication in every transaction. Whether you&apos;re a first-time buyer or seasoned investor, he&apos;s here to guide you every step of the way.
              </p>
              <Link href="/about-colin" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-16">What Clients Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 bg-gray-50">
                <p className="testimonial-quote mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="font-semibold uppercase tracking-widest text-sm">
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="banner min-h-[70vh]">
        <Image
          src="/images/connect-bg.jpeg"
          alt="Dallas skyline"
          fill
          className="object-cover"
        />
        <div className="hero-overlay" />
        <div className="banner-content">
          <h2 className="text-white mb-6">Let&apos;s Connect</h2>
          <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto">
            Ready to find your dream home in Dallas-Fort Worth?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/new-client-inquiry" className="btn-white">
              New Client Inquiry
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
