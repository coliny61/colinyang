import { Metadata } from 'next'
import Link from 'next/link'
import MarketDashboard from './MarketDashboard'

export const metadata: Metadata = {
  title: 'DFW Market Stats | Colin Yang - Real Estate Market Data',
  description: 'Stay informed with the latest Dallas-Fort Worth real estate market statistics. Median prices, days on market, and city-by-city comparisons updated monthly.',
  keywords: 'DFW real estate market stats, Dallas home prices, Fort Worth market data, Texas real estate trends, Colin Yang market analysis',
  alternates: {
    canonical: 'https://colinyang.com/market-stats',
  },
}

export default function MarketStatsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <section className="section pb-0">
        <div className="container mx-auto text-center">
          <div className="badge mx-auto mb-6">Market Intelligence</div>
          <h1 className="text-white mb-4">DFW Real Estate Market</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-6">
            Stay informed with the latest market data for Dallas-Fort Worth. Updated monthly with NTREIS data.
          </p>
          <p className="text-xs text-white/30">Last updated: February 2025</p>
        </div>
      </section>

      {/* Dashboard */}
      <section className="section">
        <div className="container mx-auto max-w-5xl">
          <MarketDashboard />
        </div>
      </section>

      {/* CTA */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#D52E28] to-[#b82420]"></div>
        <div className="relative container mx-auto text-center">
          <h2 className="text-white mb-4">Want a Personalized Market Analysis?</h2>
          <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
            Get a free Comparative Market Analysis for your specific property or neighborhood.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/home-valuation" className="btn-white">
              Get Free Valuation
            </Link>
            <a href="tel:4692561088" className="btn-white">
              (469) 256-1088
            </a>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="container mx-auto px-6 py-8">
        <p className="text-xs text-white/20 text-center max-w-3xl mx-auto">
          Data sourced from NTREIS (North Texas Real Estate Information Systems). Statistics are approximate and reflect general market trends.
          Individual property values may vary. For an accurate assessment of a specific property, please contact Colin for a personalized Comparative Market Analysis.
        </p>
      </div>
    </div>
  )
}
