import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-[4vw] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Info */}
          <div className="lg:col-span-2">
            <Image
              src="/images/logo-white.png"
              alt="Colin Yang"
              width={200}
              height={50}
              className="mb-6"
            />
            <p className="text-white/60 mb-2">Colin Yang</p>
            <p className="text-white/60 mb-2">Dallas - Fort Worth</p>
            <p className="text-white/60 mb-6">Real Estate Expert</p>
            <p className="text-xs text-white/40 uppercase tracking-widest">
              License #815417
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-6">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/new-client-inquiry" className="text-white/60 hover:text-white transition-colors text-sm">
                New Client Inquiry
              </Link>
              <Link href="/apartment-locating" className="text-white/60 hover:text-white transition-colors text-sm">
                Apartment Locating
              </Link>
              <Link href="/about-colin" className="text-white/60 hover:text-white transition-colors text-sm">
                About Colin
              </Link>
              <Link href="/portfolio" className="text-white/60 hover:text-white transition-colors text-sm">
                Portfolio
              </Link>
              <Link href="/land-farm-ranch" className="text-white/60 hover:text-white transition-colors text-sm">
                Land, Farm & Ranch
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-6">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:4692561088" className="text-white/60 hover:text-white transition-colors text-sm">
                (469) 256-1088
              </a>
              <a href="mailto:colin@hugginsrealty.com" className="text-white/60 hover:text-white transition-colors text-sm">
                colin@hugginsrealty.com
              </a>
              <a
                href="https://www.instagram.com/bundlbook/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @bundlbook
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Image
              src="/images/realtor-equal-logo.png"
              alt="REALTOR and Equal Housing"
              width={120}
              height={48}
              className="brightness-0 invert opacity-60"
            />
            <p className="text-white/40 text-xs text-center">
              &copy; {new Date().getFullYear()} Colin Yang. All rights reserved.
            </p>
          </div>
          <div className="mt-6 text-center">
            <p className="text-white/30 text-xs mb-4">
              All information is deemed reliable but not guaranteed and should be independently reviewed and verified.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-xs">
              <a
                href="https://www.trec.texas.gov/forms/consumer-protection-notice"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white/60 transition-colors"
              >
                TREC Consumer Protection Notice
              </a>
              <a
                href="https://www.trec.texas.gov/forms/information-about-brokerage-services"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white/60 transition-colors"
              >
                Information About Brokerage Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
