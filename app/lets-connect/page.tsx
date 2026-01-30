import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Let's Connect | Colin Yang - DFW Real Estate",
  description: 'Get in touch with Colin Yang for real estate services in Dallas-Fort Worth.',
}

export default function LetsConnectPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="banner min-h-[40vh]">
        <Image
          src="/images/lets-connect-bg.jpeg"
          alt="Let's Connect"
          fill
          className="object-cover"
        />
        <div className="hero-overlay" />
        <div className="banner-content">
          <h1 className="text-white">Let&apos;s Connect</h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">Phone</p>
                  <a href="tel:4692561088" className="text-xl font-medium hover:opacity-70 transition-opacity">
                    (469) 256-1088
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">Email</p>
                  <a href="mailto:colin@brayreg.com" className="text-xl font-medium hover:opacity-70 transition-opacity">
                    colin@brayreg.com
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">Instagram</p>
                  <a
                    href="https://www.instagram.com/bundlbook/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-medium hover:opacity-70 transition-opacity"
                  >
                    @bundlbook
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST" className="space-y-4">
                <div>
                  <label htmlFor="name">Name *</label>
                  <input type="text" id="name" name="name" required />
                </div>

                <div>
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" required />
                </div>

                <div>
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" />
                </div>

                <div>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} className="resize-none" />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
