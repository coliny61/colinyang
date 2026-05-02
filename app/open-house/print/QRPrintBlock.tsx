'use client'

import { useRef } from 'react'
import { QRCodeCanvas } from 'qrcode.react'
import Image from 'next/image'

const SIGN_IN_URL = 'https://colinyang.com/open-house'

export default function QRPrintBlock() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  function downloadPng() {
    const canvas = containerRef.current?.querySelector('canvas')
    if (!canvas) return
    const url = canvas.toDataURL('image/png')
    const a = document.createElement('a')
    a.href = url
    a.download = 'open-house-qr.png'
    a.click()
  }

  return (
    <div className="container mx-auto max-w-2xl text-center print:max-w-full">
      <div className="bg-[#141414] border border-[#2a2a2a] p-10 print:bg-white print:border-0">
        <div className="text-xs text-[#D52E28] uppercase tracking-widest font-semibold mb-3 print:text-black">
          Open House
        </div>
        <h1 className="text-white text-3xl md:text-4xl mb-2 print:text-black">
          Scan to Sign In
        </h1>
        <p className="text-white/60 text-sm mb-8 print:text-gray-700">
          Or visit{' '}
          <span className="font-mono text-white print:text-black">colinyang.com/open-house</span>
        </p>

        <div ref={containerRef} className="inline-block bg-white p-6 mb-8">
          <QRCodeCanvas value={SIGN_IN_URL} size={400} level="H" includeMargin={false} />
        </div>

        <div className="border-t border-[#2a2a2a] pt-6 print:border-gray-300">
          <div className="flex items-center justify-center gap-4">
            <Image
              src="/images/colin-headshot.jpg"
              alt="Colin Yang"
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
            <div className="text-left">
              <div className="text-white font-semibold print:text-black">Colin Yang</div>
              <div className="text-white/60 text-sm print:text-gray-700">
                Bray Real Estate Group · (469) 256-1088
              </div>
            </div>
          </div>
        </div>

        <button onClick={downloadPng} className="btn-secondary mt-8 print:hidden">
          Download QR as PNG
        </button>
      </div>
    </div>
  )
}
