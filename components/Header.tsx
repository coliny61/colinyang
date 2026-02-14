'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'About', href: '/about-colin' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Market Stats', href: '/market-stats' },
  { name: 'Home Value', href: '/home-valuation' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-[#0a0a0a]/95 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 border-b border-[#2a2a2a]">
      <nav className="container mx-auto px-6" aria-label="Top">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#2a2a2a]">
              <Image
                src="/images/colin-headshot.jpg"
                alt="Colin Yang"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-semibold text-white text-sm tracking-wide">Colin Yang</div>
              <div className="text-xs text-[#D52E28] uppercase tracking-wider">Bray Real Estate</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-xs font-semibold uppercase tracking-widest transition-colors hover:text-[#D52E28] ${
                  pathname === item.href ? 'text-[#D52E28]' : 'text-white/70'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-6">
            <div className="text-right mr-4">
              <div className="text-xs text-white/40 uppercase tracking-wider">Call Now</div>
              <a href="tel:4692561088" className="text-white font-medium hover:text-[#D52E28] transition-colors">
                (469) 256-1088
              </a>
            </div>
            <Link href="/new-client-inquiry" className="btn-primary !py-3 !px-6 !text-xs">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-[#2a2a2a] animate-fade-in">
            <div className="flex flex-col gap-1">
              <Link
                href="/"
                className={`text-sm font-medium py-4 px-4 transition-colors ${
                  pathname === '/' ? 'text-[#D52E28] bg-[#D52E28]/10' : 'text-white/70 hover:bg-white/5'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium py-4 px-4 transition-colors ${
                    pathname === item.href ? 'text-[#D52E28] bg-[#D52E28]/10' : 'text-white/70 hover:bg-white/5'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <hr className="border-[#2a2a2a] my-4" />
              <a
                href="tel:4692561088"
                className="flex items-center gap-3 text-sm font-medium py-4 px-4 text-white/70"
              >
                <svg className="w-5 h-5 text-[#D52E28]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (469) 256-1088
              </a>
              <Link
                href="/new-client-inquiry"
                className="btn-primary text-center mx-4 mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
