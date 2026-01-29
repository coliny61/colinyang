import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Colin | Colin Yang - DFW Real Estate',
  description: 'Learn about Colin Yang - Frisco native, Texas Tech football alumni, bilingual real estate expert serving the Dallas-Fort Worth metroplex.',
}

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
]

export default function AboutColinPage() {
  return (
    <div>
      {/* Hero Section */}
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
              <h1 className="mb-8">About Colin</h1>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  Colin Yang is a real estate expert based in the Dallas-Fort Worth area. He&apos;s a Frisco, Texas native who earned a Master&apos;s degree in Data Science and Bachelor&apos;s degree in Business Analysis from Texas Tech University, where he played football for four years (2016-2020).
                </p>
                <p className="text-lg leading-relaxed">
                  Colin emphasizes relationships and personalized service, positioning himself as someone who understands the local landscape, market trends, and neighborhood nuances.
                </p>
                <p className="text-lg leading-relaxed">
                  He serves first-time homebuyers, investors, renters, and sellers with the same dedication and transparency.
                </p>
                <p className="text-lg leading-relaxed font-semibold text-black">
                  Bilingual in Chinese and English.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/new-client-inquiry" className="btn-primary">
                  Work With Colin
                </Link>
                <a href="tel:4692561088" className="btn-secondary">
                  (469) 256-1088
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-12">Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              'New Client Inquiries',
              'Apartment Locating',
              'Portfolio Listings',
              'Land, Farm & Ranch',
              'Off-Market Listings',
              'Property Valuation',
            ].map((service) => (
              <div key={service} className="bg-gray-50 p-8 text-center">
                <p className="text-sm font-semibold uppercase tracking-widest">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="text-center mb-12">Client Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8">
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

      {/* Contact CTA */}
      <section className="section section-dark">
        <div className="container text-center">
          <h2 className="text-white mb-6">Ready to Get Started?</h2>
          <p className="text-white/70 mb-10 max-w-xl mx-auto">
            Contact Colin today to begin your real estate journey in DFW.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/new-client-inquiry" className="btn-white">
              New Client Inquiry
            </Link>
            <a href="mailto:colin@hugginsrealty.com" className="btn-white">
              colin@hugginsrealty.com
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
