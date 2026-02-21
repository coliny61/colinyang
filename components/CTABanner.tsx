import { ReactNode } from 'react'

interface CTABannerProps {
  heading: string
  subtext?: string
  children: ReactNode
  backgroundImage?: string
}

export default function CTABanner({ heading, subtext, children, backgroundImage }: CTABannerProps) {
  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#D52E28] to-[#b82420]" />
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
      )}

      <div className="relative container mx-auto text-center">
        <h2 className="text-white mb-6">{heading}</h2>
        {subtext && (
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            {subtext}
          </p>
        )}
        <div className="flex flex-wrap gap-4 justify-center">
          {children}
        </div>
      </div>
    </section>
  )
}
