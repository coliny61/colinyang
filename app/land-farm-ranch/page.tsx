import { Metadata } from 'next'
import Image from 'next/image'
import LandRanchForm from './LandRanchForm'

export const metadata: Metadata = {
  title: 'Land, Farm & Ranch | Colin Yang - DFW Luxury Real Estate',
  description: 'Looking for land, farm, or ranch property in Texas? Colin Yang offers expertise and off-market listings through his Texas Tech network.',
  keywords: 'Texas land for sale, ranch property Texas, farm land DFW, West Texas ranch, Colin Yang land broker',
  alternates: {
    canonical: 'https://colinyang.com/land-farm-ranch',
  },
}

export default function LandFarmRanchPage() {
  return (
    <div className="bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center">
        <Image
          src="/images/land-ranch-1.jpeg"
          alt="Texas Ranch Land"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a]" />
        <div className="relative text-center px-6">
          <div className="badge mx-auto mb-6">Land & Ranch</div>
          <h1 className="text-white mb-4">Land, Farm & Ranch</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Looking for property in Texas for either developed or undeveloped land, farm, and ranch could be really tedious and misleading.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                With my background and network of people from Texas Tech, I am able to utilize this advantage and leverage many off-market listings and strategies that others do not offer.
              </p>
            </div>
            <div className="relative aspect-[4/3] border border-[#2a2a2a] overflow-hidden image-hover-zoom">
              <Image
                src="/images/land-ranch-2.jpeg"
                alt="Farm land in Texas"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Form */}
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-white mb-4">Get In Touch</h2>
              <p className="text-white/60">
                Please fill out the form below and I will reach out to you immediately about your inquiry.
              </p>
            </div>

            <LandRanchForm />
          </div>
        </div>
      </section>
    </div>
  )
}
