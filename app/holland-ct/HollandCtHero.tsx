'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AGENT_TEL } from '@/lib/agent'

const HERO_IMAGES = [
  '/images/holland-ct/exterior.jpg',
  '/images/holland-ct/foyer.jpg',
  '/images/holland-ct/kitchen-dining-living.jpg',
  '/images/holland-ct/primary-bedroom-1.jpg',
  '/images/holland-ct/driveway-sunset.jpg',
]

const CYCLE_DURATION = 6000

export default function HollandCtHero() {
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
            alt={`2609 Holland Ct - Photo ${index + 1}`}
            fill
            className={`object-cover ${index === currentIndex ? 'ken-burns-active' : ''}`}
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-[#0a0a0a]/30" />

      <div className="absolute inset-0 flex flex-col justify-end pb-16 px-6">
        <div className="max-w-5xl mx-auto w-full">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="inline-block bg-[#D52E28] text-white text-xs font-bold uppercase tracking-[0.2em] px-4 py-2">
              For Sale
            </span>
            <span className="inline-block bg-white/10 backdrop-blur border border-white/20 text-white text-xs font-bold uppercase tracking-[0.15em] px-4 py-2">
              Open House · May 2 &amp; 3
            </span>
          </div>

          <h1 className="text-white mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            2609 Holland Court
          </h1>
          <p className="text-white/70 text-lg mb-2">
            Celina, TX 75009 · Cambridge Crossing
          </p>
          <p className="text-white text-2xl font-semibold mb-8">
            $529,900
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/open-house?property=holland-ct" className="btn-primary">
              Open House Sign-In
            </Link>
            <Link href="/new-client-inquiry" className="btn-secondary">
              Schedule a Showing
            </Link>
            <a href={AGENT_TEL} className="btn-secondary">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (469) 256-1088
            </a>
          </div>
        </div>
      </div>

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
