import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import TestimonialCard from '@/components/TestimonialCard'

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/65abf6f1bf81c02e7cbd3cb1/d8a549bd-f074-42eb-9bd9-ba5ae45c55d2/IMG_9363.png"
                alt="Colin Yang"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-6">About Colin</h1>
              <div className="space-y-4 text-gray-600">
                <p>
                  Colin Yang is a real estate expert based in the Dallas-Fort Worth area. He&apos;s a Frisco, Texas native who earned a Master&apos;s degree in Data Science and Bachelor&apos;s degree in Business Analysis from Texas Tech University, where he played football for four years (2016-2020).
                </p>
                <p>
                  Colin emphasizes relationships and personalized service, positioning himself as someone who understands the local landscape, market trends, and neighborhood nuances.
                </p>
                <p>
                  He serves first-time homebuyers, investors, renters, and sellers with the same dedication and transparency.
                </p>
                <p className="font-medium text-black">
                  Bilingual in Chinese and English.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/new-client-inquiry"
                  className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  Work With Colin
                </Link>
                <a
                  href="tel:4692561088"
                  className="border border-black text-black px-6 py-3 rounded-lg font-medium hover:bg-black hover:text-white transition-colors"
                >
                  (469) 256-1088
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              'New Client Inquiries',
              'Apartment Locating',
              'Portfolio Listings',
              'Land, Farm & Ranch',
              'Off-Market Listings',
              'Property Valuation',
            ].map((service) => (
              <div key={service} className="bg-gray-50 p-6 rounded-xl">
                <p className="font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8">
            Contact Colin today to begin your real estate journey in DFW.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/new-client-inquiry"
              className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              New Client Inquiry
            </Link>
            <a
              href="mailto:colin@hugginsrealty.com"
              className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              colin@hugginsrealty.com
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
