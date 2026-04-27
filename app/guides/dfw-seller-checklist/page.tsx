import { Metadata } from 'next'
import Link from 'next/link'
import GuideLeadForm from '@/components/GuideLeadForm'
import { AGENT_TEL } from '@/lib/agent'

export const metadata: Metadata = {
  title: 'DFW Pre-Listing Checklist (30/60/90 Days) | Colin Yang',
  description: 'A 30/60/90-day checklist for selling your DFW home for top dollar. Pre-listing prep, repairs, staging, and pricing strategy from a Dallas-Fort Worth real estate agent.',
  keywords: 'sell my home Dallas, DFW pre-listing checklist, prepare home for sale Dallas, home staging Dallas, what to do before listing my home, Dallas seller guide',
  alternates: { canonical: 'https://colinyang.com/guides/dfw-seller-checklist' },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The DFW Pre-Listing Checklist: 30 / 60 / 90 Days Out',
  description: 'A practical countdown for DFW homeowners preparing to sell — what to do 90, 60, and 30 days before your home hits the market.',
  author: { '@type': 'Person', name: 'Colin Yang', url: 'https://colinyang.com' },
  publisher: {
    '@type': 'Organization',
    name: 'Colin Yang Real Estate',
    logo: { '@type': 'ImageObject', url: 'https://colinyang.com/images/colin-headshot.jpg' },
  },
  mainEntityOfPage: 'https://colinyang.com/guides/dfw-seller-checklist',
  datePublished: '2026-04-27',
  dateModified: '2026-04-27',
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://colinyang.com' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://colinyang.com/guides' },
    { '@type': 'ListItem', position: 3, name: 'DFW Pre-Listing Checklist', item: 'https://colinyang.com/guides/dfw-seller-checklist' },
  ],
}

export default function DFWSellerChecklistPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <article className="section">
        <div className="container mx-auto max-w-3xl">
          <Link href="/guides" className="text-white/50 hover:text-[#D52E28] text-sm mb-6 inline-flex items-center gap-2 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Guides
          </Link>

          <div className="badge mb-6">Free Guide · Sellers</div>
          <h1 className="text-white mb-4">The DFW Pre-Listing Checklist</h1>
          <p className="text-xl text-white/70 leading-relaxed mb-12">
            A practical 30 / 60 / 90-day countdown for Dallas-Fort Worth homeowners who want to sell for top dollar. The work you do before listing is worth more than any single price reduction after.
          </p>

          <div className="prose-content space-y-6 text-white/80 leading-relaxed">
            <h2 className="text-white text-2xl font-semibold pt-4">Why Preparation Pays</h2>
            <p>
              In a balanced DFW market, well-prepared homes sell 12–18% faster and net 3–7% more than comparable homes that come to market raw. The reason is simple: buyers walking through a polished home see opportunity. Buyers walking through an under-prepared one see a project — and they price accordingly. The 90 days before listing are when sellers create the most value, dollar for dollar, in the entire selling process.
            </p>
            <p>
              This checklist is structured as a countdown. Use it as a working document — print it, edit it, share it with your spouse and your agent. Every box you check before listing day is one less reason a buyer has to lowball.
            </p>

            <h2 className="text-white text-2xl font-semibold pt-4">90 Days Out — Strategy &amp; Big Repairs</h2>
            <p>
              Three months before you want to be live. This is the strategic phase — it&apos;s about decisions, not paint colors.
            </p>
            <ul className="list-disc list-outside pl-6 space-y-3 marker:text-[#D52E28]">
              <li><strong className="text-white">Get a professional pre-listing CMA.</strong> Not a Zestimate. A real Comparative Market Analysis from a local agent who understands your specific submarket. <Link href="/home-valuation" className="text-[#D52E28] hover:underline">Request one here.</Link></li>
              <li><strong className="text-white">Address deferred maintenance.</strong> HVAC servicing, foundation movement, roof condition, plumbing leaks, electrical issues. These are the items that show up in inspection reports and become negotiation leverage for buyers.</li>
              <li><strong className="text-white">Consider a pre-listing inspection.</strong> $500–$700 for the inspection. You&apos;ll learn everything a buyer&apos;s inspector will find, with time to fix it on your terms instead of theirs. Texas is a non-disclosure state but you do have to fill out a Seller&apos;s Disclosure — better to fix issues than disclose them unaddressed.</li>
              <li><strong className="text-white">Declutter aggressively.</strong> Rent a storage unit. The goal is to remove 30–50% of visible items. Closets included. Buyers see space, not stuff.</li>
              <li><strong className="text-white">Research recent sales in your specific subdivision.</strong> Within 0.5 miles, sold within 90 days. These are your real comps.</li>
            </ul>

            <h2 className="text-white text-2xl font-semibold pt-4">60 Days Out — Paint, Polish, Professional Services</h2>
            <p>
              You&apos;ve done the strategic work. Now it&apos;s about visual transformation.
            </p>
            <ul className="list-disc list-outside pl-6 space-y-3 marker:text-[#D52E28]">
              <li><strong className="text-white">Neutral interior paint.</strong> Repaint accent walls, kid&apos;s rooms, anything bold. Dallas buyers favor warm whites (Sherwin-Williams Alabaster, Benjamin Moore Swiss Coffee) and soft greiges. ROI on neutral repaint is consistently 100%+ in the DFW market.</li>
              <li><strong className="text-white">Refresh exterior paint and trim.</strong> Front door especially. Pressure-wash siding, walks, driveway, and pool deck.</li>
              <li><strong className="text-white">Replace dated lighting.</strong> The single fastest visual upgrade. Brass-and-glass dome lights from 2003 say &quot;dated&quot; faster than anything else. Modern matte black or brushed nickel runs $80–$200 per fixture.</li>
              <li><strong className="text-white">Refinish or deep-clean flooring.</strong> Hardwood refinish if scratched. Carpet cleaning at minimum; replacement if worn through. Tile grout cleaned.</li>
              <li><strong className="text-white">Landscaping refresh.</strong> Mulch, fresh sod patches, trimmed shrubs, edged beds. DFW buyers&apos; first impression is curb appeal.</li>
              <li><strong className="text-white">Service pool / spa.</strong> Have it crystal clear, equipment serviced, with a recent receipt available for the disclosure.</li>
            </ul>

            <div className="my-12">
              <GuideLeadForm guideTitle="DFW Pre-Listing Checklist" />
            </div>

            <h2 className="text-white text-2xl font-semibold pt-4">30 Days Out — Staging &amp; Marketing Prep</h2>
            <p>
              The final stretch. This phase is about making your home camera-ready and pricing it correctly.
            </p>
            <ul className="list-disc list-outside pl-6 space-y-3 marker:text-[#D52E28]">
              <li><strong className="text-white">Professional staging consultation.</strong> Even just a paid 90-minute walkthrough with a stager ($150–$300) yields a punch list of small moves that elevate every room.</li>
              <li><strong className="text-white">Professional photography &amp; video.</strong> Non-negotiable above $750K. Twilight exterior shots, drone aerials, and a video walkthrough. Bad photos cost sellers 5–10% in offer price more often than they realize.</li>
              <li><strong className="text-white">Floor plan measurement.</strong> Buyers expect dimensions. A clean 2D floor plan is worth $75 and significantly increases time-on-listing.</li>
              <li><strong className="text-white">Final pricing strategy.</strong> Run final comps with your agent the week of listing. Pricing strategy in DFW depends on submarket — some neighborhoods reward listing 2% below comps to drive multiple offers; others reward pricing precisely at fair value.</li>
              <li><strong className="text-white">MLS description &amp; listing copy.</strong> Your agent should write this — but read it carefully. Misleading or generic copy attracts the wrong buyers.</li>
              <li><strong className="text-white">Prep a Seller&apos;s Disclosure draft.</strong> Required in Texas. Your agent will help, but start gathering documents now: HVAC age, roof age, recent repairs, known issues.</li>
            </ul>

            <h2 className="text-white text-2xl font-semibold pt-4">The Final Week — Go-Time</h2>
            <ul className="list-disc list-outside pl-6 space-y-3 marker:text-[#D52E28]">
              <li><strong className="text-white">Deep clean.</strong> Professional cleaning service ($300–$600). Windows inside and out.</li>
              <li><strong className="text-white">Stage the showing experience.</strong> Fresh flowers in the kitchen. Soft music on a Sonos for showings. Lights on every visit. Curtains open. Toilets down.</li>
              <li><strong className="text-white">Pets &amp; personal items.</strong> Plan to be out for showings. Dogs to a friend&apos;s or daycare. Personal photos minimized — buyers should see themselves living there.</li>
              <li><strong className="text-white">Decide on your offer-review strategy.</strong> Will you review offers as they come, or set a deadline? In a multiple-offer scenario, deadline strategies extract higher prices.</li>
            </ul>

            <h2 className="text-white text-2xl font-semibold pt-4">The First 7–14 Days After Listing</h2>
            <p>
              This is the most important window of the entire selling process. The first two weeks generate the most listing traffic, the most showings, and the highest probability of a strong offer. Watch the data carefully:
            </p>
            <ul className="list-disc list-outside pl-6 space-y-3 marker:text-[#D52E28]">
              <li><strong className="text-white">Showing-to-offer ratio.</strong> Healthy DFW listings get 8–15 showings before a credible offer. Above 25 showings with no offers means price feedback — not bad luck.</li>
              <li><strong className="text-white">Online metrics.</strong> Save count, view count, and listing &quot;velocity&quot; on Zillow / Realtor.com indicate market reception.</li>
              <li><strong className="text-white">Agent feedback.</strong> Aggregate it. If three different agents mention the same pricing or condition concern, take it seriously.</li>
              <li><strong className="text-white">Adjust quickly if needed.</strong> The first price reduction after 21 days of no offers is more effective than three reductions over 90 days.</li>
            </ul>

            <h2 className="text-white text-2xl font-semibold pt-4">DFW 2026 Pricing Strategy Notes</h2>
            <p>
              The DFW market in 2026 is more nuanced than the 2021–2022 frenzy. Pricing strategy depends heavily on submarket and price band:
            </p>
            <ul className="list-disc list-outside pl-6 space-y-3 marker:text-[#D52E28]">
              <li><strong className="text-white">Sub-$1M.</strong> Still moves quickly in well-prepared condition. Multi-offer situations remain common in Frisco, Plano, McKinney, and Allen.</li>
              <li><strong className="text-white">$1M–$3M.</strong> More buyer-friendly. Days on market average 30–60. Pricing precision matters more than ever.</li>
              <li><strong className="text-white">$3M+.</strong> Sophisticated buyers, longer timelines (60–120 days), and a real role for off-market or quietly-marketed strategies. Pricing too high turns serious buyers off permanently.</li>
            </ul>

            <h2 className="text-white text-2xl font-semibold pt-4">Eight Mistakes That Cost DFW Sellers Real Money</h2>
            <ol className="list-decimal list-outside pl-6 space-y-3 marker:text-[#D52E28] marker:font-semibold">
              <li><strong className="text-white">Listing at Zestimate.</strong> Zillow&apos;s algorithm misses local nuance. Above $1M, the error band can be 10–15%.</li>
              <li><strong className="text-white">Skipping professional photography.</strong> Phone photos cost sellers tens of thousands.</li>
              <li><strong className="text-white">Listing in November or mid-December.</strong> DFW peak is March–June. Off-peak listings net 2–5% less on average.</li>
              <li><strong className="text-white">Refusing to fix small items.</strong> $5,000 in pre-listing fixes routinely returns $20,000+ at offer.</li>
              <li><strong className="text-white">Choosing the agent who quotes the highest price.</strong> A bait-and-switch tactic. The right agent prices honestly and explains why.</li>
              <li><strong className="text-white">Negotiating like it&apos;s 2021.</strong> The market has moderated. Reasonable counter-offers preserve deals; rigid ones lose them.</li>
              <li><strong className="text-white">Hiding known issues.</strong> Texas requires the Seller&apos;s Disclosure. Hiding things turns into post-closing lawsuits.</li>
              <li><strong className="text-white">Letting the property go stale.</strong> Once a listing ages past 60 days, buyer perception shifts. Strategic re-listing or pricing resets matter.</li>
            </ol>

            <div className="mt-12 mb-4 border border-[#2a2a2a] bg-[#141414] p-8">
              <h3 className="text-white text-xl font-semibold mb-3">Thinking About Selling?</h3>
              <p className="text-white/70 mb-6">
                Start with a free, no-pressure Comparative Market Analysis. I&apos;ll walk through your home, build a real CMA, and outline a custom pre-listing plan based on your specific submarket and timeline.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/home-valuation" className="btn-primary">Get a Free CMA</Link>
                <a href={AGENT_TEL} className="btn-secondary">Call (469) 256-1088</a>
              </div>
            </div>

            <div className="my-12">
              <GuideLeadForm guideTitle="DFW Pre-Listing Checklist" variant="compact" />
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
