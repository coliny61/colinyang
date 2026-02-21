'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HERO_IMAGES: string[] = []

const CYCLE_DURATION = 6000 // 6 seconds per slide

export default function HondoHero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (HERO_IMAGES.length <= 1) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length)
    }, CYCLE_DURATION)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[85vh] min-h-[600px] max-h-[900px] overflow-hidden -mt-20">
      {/* Background Images with Ken Burns */}
      {HERO_IMAGES.length > 0 && HERO_IMAGES.map((src, index) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1500"
          style={{
            opacity: index === currentIndex ? 1 : 0,
            transitionDuration: '1500ms',
          }}
        >
          <Image
            src={src}
            alt={`2203 Hondo Avenue - Photo ${index + 1}`}
            fill
            className={`object-cover ${index === currentIndex ? 'ken-burns-active' : ''}`}
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-[#0a0a0a]/30" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end pb-16 px-6">
        <div className="max-w-5xl mx-auto w-full">
          {/* FOR LEASE Badge */}
          <div className="mb-4">
            <span className="inline-block bg-[#D52E28] text-white text-xs font-bold uppercase tracking-[0.2em] px-4 py-2">
              For Lease
            </span>
          </div>

          {/* Address */}
          <h1 className="text-white mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            2203 Hondo Avenue
          </h1>
          <p className="text-white/70 text-lg mb-6">
            Dallas, TX 75219
          </p>

          {/* Promo */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-3 mb-8">
            <svg className="w-5 h-5 text-[#D52E28]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
            </svg>
            <span className="text-white font-medium">13th Month FREE on a 12-Month Lease</span>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <Link href="/lease-inquiry?property=2203-hondo" className="btn-primary">
              Apply Now
            </Link>
            <a href="tel:4692561088" className="btn-secondary">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (469) 256-1088
            </a>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      {HERO_IMAGES.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {HERO_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === currentIndex
                  ? 'w-8 bg-[#D52E28]'
                  : 'w-4 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  )
}
