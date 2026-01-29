import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import TestimonialCard from '@/components/TestimonialCard'

export const metadata: Metadata = {
  title: 'Colin Yang - Dallas Fort Worth Real Estate Agent',
  description: 'Colin Yang is a dedicated real estate professional in DFW committed to building lasting relationships through transparency. Native of Frisco, Texas. Bilingual in Chinese and English.',
}

const services = [
  {
    title: 'Property Search',
    href: '/new-client-inquiry',
    image: 'https://images.squarespace-cdn.com/content/v1/65abf6f1bf81c02e7cbd3cb1/1705780607659-UGYIUKTSLYFVABNRGHP0/image-asset.jpeg',
  },
  {
    title: 'Apartment Locating',
    href: '/apartment-locating',
    image: 'https://images.squarespace-cdn.com/content/v1/65abf6f1bf81c02e7cbd3cb1/1705781318874-B5EJ5NVULHV4O0X15G1A/image-asset.jpeg',
  },
  {
    title: 'Property Valuation',
    href: '/new-client-inquiry',
    image: 'https://images.squarespace-cdn.com/content/v1/65abf6f1bf81c02e7cbd3cb1/1705781595938-UUH09RGSFD5SMR0Y1AJC/image-asset.jpeg',
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/65abf6f1bf81c02e7cbd3cb1/1705880242436-D4KLQH8XNITGDHH609DB/image-asset.jpeg"
          alt="Dallas Fort Worth Real Estate"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Colin Yang</h1>
          <p className="text-xl md:text-2xl mb-2">Dallas - Fort Worth Real Estate Agent</p>
          <p className="text-lg text-gray-200 mb-8">
            Meet Colin Yang, your dedicated real estate professional committed to building lasting relationships through transparency
          </p>
          <Link
            href="/new-client-inquiry"
            className="inline-block bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.title} href={service.href} className="group">
                <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-center">{service.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/65abf6f1bf81c02e7cbd3cb1/d8a549bd-f074-42eb-9bd9-ba5ae45c55d2/IMG_9363.png"
                alt="Colin Yang"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">About Colin</h2>
              <p className="text-gray-600 mb-4">
                Native of Frisco, Texas. Texas Tech University football alumni. Bilingual in Chinese and English.
              </p>
              <p className="text-gray-600 mb-6">
                With expertise in the DFW Metroplex, Colin emphasizes transparency and open communication in every transaction. Whether you&apos;re a first-time buyer or seasoned investor, he&apos;s here to guide you every step of the way.
              </p>
              <Link
                href="/about-colin"
                className="inline-block border border-black text-black px-6 py-2 rounded-lg font-medium hover:bg-black hover:text-white transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Clients Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/65abf6f1bf81c02e7cbd3cb1/1705880705725-A3OMGPYFK7P0FG0UNCS7/image-asset.jpeg"
          alt="Dallas skyline"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let&apos;s Connect</h2>
          <p className="text-lg text-gray-200 mb-8">
            Ready to find your dream home in Dallas-Fort Worth?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/new-client-inquiry"
              className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              New Client Inquiry
            </Link>
            <a
              href="tel:4692561088"
              className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              (469) 256-1088
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
