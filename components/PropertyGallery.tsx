'use client'

import { useState } from 'react'
import Image from 'next/image'

interface PropertyGalleryProps {
  images: string[]
  address: string
}

export default function PropertyGallery({ images, address }: PropertyGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <>
      {/* Main Gallery */}
      <div className="relative">
        <div
          className="relative aspect-[4/3] bg-[#141414] cursor-pointer overflow-hidden border border-[#2a2a2a]"
          onClick={() => setLightboxOpen(true)}
        >
          <Image
            src={images[currentIndex]}
            alt={`${address} - Photo ${currentIndex + 1}`}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious() }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-[#D52E28] p-3 transition-colors"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goToNext() }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-[#D52E28] p-3 transition-colors"
              aria-label="Next image"
            >
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-black/80 text-white px-4 py-2 text-sm font-medium">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative flex-shrink-0 w-20 h-20 overflow-hidden border-2 transition-all ${
                index === currentIndex
                  ? 'border-[#D52E28]'
                  : 'border-[#2a2a2a] opacity-60 hover:opacity-100 hover:border-white/30'
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/98 z-50 flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 transition-colors"
            aria-label="Close lightbox"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative w-full h-full flex items-center justify-center p-4">
            <Image
              src={images[currentIndex]}
              alt={`${address} - Photo ${currentIndex + 1}`}
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); goToPrevious() }}
                className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 bg-black/50 hover:bg-[#D52E28] transition-colors"
                aria-label="Previous image"
              >
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goToNext() }}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 bg-black/50 hover:bg-[#D52E28] transition-colors"
                aria-label="Next image"
              >
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-lg bg-black/50 px-6 py-2">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}
