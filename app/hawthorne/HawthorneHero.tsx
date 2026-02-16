'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HERO_IMAGES = [
  '/images/hawthorne/exterior.jpeg',
  '/images/hawthorne/living-room-2.jpeg',
  '/images/hawthorne/kitchen-island.jpeg',
  '/images/hawthorne/primary-bedroom.jpeg',
  '/images/hawthorne/backyard.jpeg',
]

const CYCLE_DURATION = 6000

export default function HawthorneHero() {
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
      {/* Background — photos or solid fallback */}
      {HERO_IMAGES.length > 0 ? (
        HERO_IMAGES.map((src, index) => (
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
              alt={`2315 Hawthorne Avenue - Photo ${index + 1}`}
              fill
              className={`object-cover ${index === currentIndex ? 'ken-burns-active' : ''}`}
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]" />
      )}

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
            2315 Hawthorne Avenue
          </h1>
          <p className="text-white/70 text-lg mb-8">
            Dallas, TX 75219
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <Link href="/lease-inquiry?property=2315-hawthorne" className="btn-primary">
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

      {/* Slide Indicators — only show when photos exist */}
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
