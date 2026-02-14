'use client'

const metrics = [
  { label: 'Median Home Price', value: '$415,000', change: '+3.2%', icon: '📊' },
  { label: 'Avg Days on Market', value: '32', change: '-5 days', icon: '📅' },
  { label: 'Year-over-Year', value: '+3.2%', change: 'appreciation', icon: '📈' },
  { label: 'Active Listings', value: '12,450', change: '+8.1%', icon: '🏘️' },
]

const cities = [
  { city: 'Dallas', median: '$425,000', yoy: '+2.8%', dom: '28', priceSqft: '$215' },
  { city: 'Fort Worth', median: '$350,000', yoy: '+4.1%', dom: '30', priceSqft: '$185' },
  { city: 'Frisco', median: '$575,000', yoy: '+2.5%', dom: '25', priceSqft: '$235' },
  { city: 'McKinney', median: '$450,000', yoy: '+3.8%', dom: '27', priceSqft: '$205' },
  { city: 'Plano', median: '$485,000', yoy: '+2.1%', dom: '26', priceSqft: '$225' },
  { city: 'Allen', median: '$460,000', yoy: '+3.5%', dom: '29', priceSqft: '$210' },
  { city: 'Princeton', median: '$375,000', yoy: '+5.2%', dom: '35', priceSqft: '$175' },
  { city: 'The Colony', median: '$410,000', yoy: '+3.0%', dom: '31', priceSqft: '$200' },
  { city: 'Arlington', median: '$330,000', yoy: '+4.5%', dom: '33', priceSqft: '$170' },
]

export default function MarketDashboard() {
  return (
    <div className="space-y-12">
      {/* Key Metrics */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m) => (
          <div key={m.label} className="bg-[#141414] border border-[#2a2a2a] p-6">
            <div className="text-2xl mb-2">{m.icon}</div>
            <div className="text-2xl font-bold text-white mb-1">{m.value}</div>
            <div className="text-sm text-white/50 mb-2">{m.label}</div>
            <div className="text-xs text-green-400">{m.change}</div>
          </div>
        ))}
      </div>

      {/* City Comparison Table */}
      <div>
        <h2 className="text-xl text-white font-semibold mb-6">City-by-City Comparison</h2>
        <div className="bg-[#141414] border border-[#2a2a2a] overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#2a2a2a]">
                <th className="text-left text-xs font-semibold text-white/50 uppercase tracking-wider px-6 py-4">City</th>
                <th className="text-right text-xs font-semibold text-white/50 uppercase tracking-wider px-6 py-4">Median Price</th>
                <th className="text-right text-xs font-semibold text-white/50 uppercase tracking-wider px-6 py-4">YoY Change</th>
                <th className="text-right text-xs font-semibold text-white/50 uppercase tracking-wider px-6 py-4">Avg DOM</th>
                <th className="text-right text-xs font-semibold text-white/50 uppercase tracking-wider px-6 py-4">Price/SqFt</th>
              </tr>
            </thead>
            <tbody>
              {cities.map((c, i) => (
                <tr key={c.city} className={i !== cities.length - 1 ? 'border-b border-[#2a2a2a]/50' : ''}>
                  <td className="px-6 py-4 text-white font-medium">{c.city}</td>
                  <td className="px-6 py-4 text-right text-white/80">{c.median}</td>
                  <td className="px-6 py-4 text-right text-green-400">{c.yoy}</td>
                  <td className="px-6 py-4 text-right text-white/60">{c.dom} days</td>
                  <td className="px-6 py-4 text-right text-white/60">{c.priceSqft}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Market Insights */}
      <div>
        <h2 className="text-xl text-white font-semibold mb-6">Market Insights</h2>
        <div className="prose prose-invert max-w-none">
          <div className="bg-[#141414] border border-[#2a2a2a] p-8 space-y-4">
            <p className="text-white/70 leading-relaxed">
              The Dallas-Fort Worth real estate market continues to show resilience heading into 2025. While inventory levels have increased compared to the pandemic-era lows, demand remains strong thanks to continued population growth and corporate relocations to the region.
            </p>
            <p className="text-white/70 leading-relaxed">
              Suburban markets like McKinney, Princeton, and Allen are seeing above-average price appreciation as buyers seek more space and value. Meanwhile, established markets like Dallas and Plano maintain steady growth driven by proximity to major employment centers.
            </p>
          </div>
        </div>
      </div>

      {/* Buyer/Seller Advice */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-[#141414] border border-[#2a2a2a] p-8">
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-[#D52E28]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            For Buyers
          </h3>
          <ul className="space-y-3 text-white/60 text-sm">
            <li className="flex gap-2">
              <span className="text-[#D52E28] mt-1">•</span>
              Rising inventory gives you more options and negotiating power.
            </li>
            <li className="flex gap-2">
              <span className="text-[#D52E28] mt-1">•</span>
              Suburban cities offer the best value per square foot.
            </li>
            <li className="flex gap-2">
              <span className="text-[#D52E28] mt-1">•</span>
              Get pre-approved before shopping to strengthen your offers.
            </li>
            <li className="flex gap-2">
              <span className="text-[#D52E28] mt-1">•</span>
              Properties priced correctly still move fast — be ready to act.
            </li>
          </ul>
        </div>

        <div className="bg-[#141414] border border-[#2a2a2a] p-8">
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-[#D52E28]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            For Sellers
          </h3>
          <ul className="space-y-3 text-white/60 text-sm">
            <li className="flex gap-2">
              <span className="text-[#D52E28] mt-1">•</span>
              Prices are still appreciating — your equity has likely grown.
            </li>
            <li className="flex gap-2">
              <span className="text-[#D52E28] mt-1">•</span>
              Proper pricing strategy is more important than ever.
            </li>
            <li className="flex gap-2">
              <span className="text-[#D52E28] mt-1">•</span>
              Professional staging and photography make a big difference.
            </li>
            <li className="flex gap-2">
              <span className="text-[#D52E28] mt-1">•</span>
              Request a free CMA to understand your home&apos;s current value.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
