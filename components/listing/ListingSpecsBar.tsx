interface ListingSpecsBarProps {
  beds: number
  baths: number
  sqft: string
  garage: string
  price: string
  priceLabel?: string
  priceSuffix?: string
  badges?: string[]
}

export default function ListingSpecsBar({ beds, baths, sqft, garage, price, priceLabel = 'Rent', priceSuffix = '/mo', badges }: ListingSpecsBarProps) {
  return (
    <section className="bg-[#141414] border-y border-[#2a2a2a]">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
          <div>
            <div className="text-xs text-white/40 uppercase tracking-widest mb-1">Beds</div>
            <div className="text-2xl font-semibold text-white">{beds}</div>
          </div>
          <div>
            <div className="text-xs text-white/40 uppercase tracking-widest mb-1">Baths</div>
            <div className="text-2xl font-semibold text-white">{baths}</div>
          </div>
          <div>
            <div className="text-xs text-white/40 uppercase tracking-widest mb-1">Sq Ft</div>
            <div className="text-2xl font-semibold text-white">{sqft}</div>
          </div>
          <div>
            <div className="text-xs text-white/40 uppercase tracking-widest mb-1">Garage</div>
            <div className="text-2xl font-semibold text-white">{garage}</div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="text-xs text-white/40 uppercase tracking-widest mb-1">{priceLabel}</div>
            <div className="text-2xl font-bold text-[#D52E28]">{price}{priceSuffix && <span className="text-sm font-normal text-white/50">{priceSuffix}</span>}</div>
          </div>
        </div>

        {badges && badges.length > 0 && (
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {badges.map((badge) => (
              <span key={badge} className="badge">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
