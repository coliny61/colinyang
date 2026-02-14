import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a]">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border border-[#2a2a2a]">
                <Image
                  src="/images/colin-headshot.jpg"
                  alt="Colin Yang"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <div className="font-semibold text-white text-lg">Colin Yang</div>
                <div className="text-sm text-[#D52E28] uppercase tracking-wider">Licensed REALTOR®</div>
              </div>
            </div>
            <p className="text-white/50 mb-6 max-w-sm leading-relaxed">
              Your trusted bilingual real estate expert in Dallas-Fort Worth. Specializing in luxury homes, investment properties, and seamless relocations.
            </p>

            {/* Bray Real Estate Group */}
            <div className="border-t border-[#2a2a2a] pt-6">
              <p className="text-xs text-white/30 uppercase tracking-wider mb-2">Brokered by</p>
              <p className="text-white font-semibold">Bray Real Estate Group</p>
              <p className="text-white/40 text-sm">3130 Harvard Ave, Ste. B, Dallas, TX 75205</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/about-colin" className="text-white/50 hover:text-[#D52E28] transition-colors">About Colin</Link></li>
              <li><Link href="/portfolio" className="text-white/50 hover:text-[#D52E28] transition-colors">Portfolio</Link></li>
              <li><Link href="/reviews" className="text-white/50 hover:text-[#D52E28] transition-colors">Reviews</Link></li>
              <li><Link href="/market-stats" className="text-white/50 hover:text-[#D52E28] transition-colors">Market Stats</Link></li>
              <li><Link href="/home-valuation" className="text-white/50 hover:text-[#D52E28] transition-colors">Home Valuation</Link></li>
              <li><Link href="/new-client-inquiry" className="text-white/50 hover:text-[#D52E28] transition-colors">Get Started</Link></li>
              <li><Link href="/lease-inquiry" className="text-white/50 hover:text-[#D52E28] transition-colors">Lease Inquiry</Link></li>
              <li><Link href="/apartment-locating" className="text-white/50 hover:text-[#D52E28] transition-colors">Apartment Locating</Link></li>
              <li><Link href="/land-farm-ranch" className="text-white/50 hover:text-[#D52E28] transition-colors">Land, Farm & Ranch</Link></li>
              <li><Link href="/lets-connect" className="text-white/50 hover:text-[#D52E28] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:4692561088" className="text-white/50 hover:text-[#D52E28] transition-colors flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#D52E28]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (469) 256-1088
                </a>
              </li>
              <li>
                <a href="mailto:colin@brayreg.com" className="text-white/50 hover:text-[#D52E28] transition-colors flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#D52E28]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  colin@brayreg.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/colinyang61/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-[#D52E28] transition-colors flex items-center gap-3"
                >
                  <svg className="w-4 h-4 text-[#D52E28]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @colinyang61
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/colinyang61/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-[#D52E28] transition-colors flex items-center gap-3"
                >
                  <svg className="w-4 h-4 text-[#D52E28]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </li>
            </ul>

            {/* Languages */}
            <div className="mt-8">
              <p className="text-xs text-white/30 uppercase tracking-wider mb-3">Languages</p>
              <div className="flex gap-3">
                <span className="text-white/50 text-sm">English</span>
                <span className="text-white/30">|</span>
                <span className="text-white/50 text-sm">Mandarin</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TREC Compliance Section - Required by Texas Law */}
      <div className="border-t border-[#2a2a2a]">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* License Info */}
            <div className="text-sm text-white/40">
              <p>Colin Yang | Texas Real Estate License #815417</p>
              <p>Bray Real Estate Group | Dallas, Texas</p>
            </div>

            {/* TREC Links - Required */}
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <a
                href="https://www.trec.texas.gov/forms/consumer-protection-notice"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-[#D52E28] transition-colors underline"
              >
                TREC Consumer Protection Notice
              </a>
              <span className="text-white/20">|</span>
              <a
                href="https://www.trec.texas.gov/forms/information-about-brokerage-services"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-[#D52E28] transition-colors underline"
              >
                Information About Brokerage Services
              </a>
            </div>

            {/* Equal Housing */}
            <div className="flex items-center gap-4">
              <Image
                src="/images/realtor-equal-logo.png"
                alt="Equal Housing Opportunity"
                width={80}
                height={28}
                className="opacity-40"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#2a2a2a]">
        <div className="container mx-auto px-6 py-6">
          <p className="text-center text-xs text-white/30">
            © {new Date().getFullYear()} Colin Yang Real Estate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
