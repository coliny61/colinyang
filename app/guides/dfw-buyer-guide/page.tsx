import { Metadata } from 'next'
import Link from 'next/link'
import GuideLeadForm from '@/components/GuideLeadForm'
import { AGENT_TEL } from '@/lib/agent'

export const metadata: Metadata = {
  title: 'DFW Luxury Buyer\'s Guide | Colin Yang',
  description: 'A complete guide to buying luxury real estate in Dallas-Fort Worth: prestigious neighborhoods, the Texas buying process, off-market access, and what to know before making an offer.',
  keywords: 'DFW luxury homes, Dallas luxury real estate, buying a home in Dallas, Highland Park homes, Preston Hollow real estate, Frisco luxury homes, Texas home buying process, off-market listings DFW',
  alternates: { canonical: 'https://colinyang.com/guides/dfw-buyer-guide' },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The DFW Luxury Buyer\'s Guide',
  description: 'A complete guide to buying luxury real estate in Dallas-Fort Worth — neighborhoods, process, and insider strategy.',
  author: { '@type': 'Person', name: 'Colin Yang', url: 'https://colinyang.com' },
  publisher: {
    '@type': 'Organization',
    name: 'Colin Yang Real Estate',
    logo: { '@type': 'ImageObject', url: 'https://colinyang.com/images/colin-headshot.jpg' },
  },
  mainEntityOfPage: 'https://colinyang.com/guides/dfw-buyer-guide',
  datePublished: '2026-04-27',
  dateModified: '2026-04-27',
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://colinyang.com' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://colinyang.com/guides' },
    { '@type': 'ListItem', position: 3, name: 'DFW Luxury Buyer\'s Guide', item: 'https://colinyang.com/guides/dfw-buyer-guide' },
  ],
}

export default function DFWBuyerGuidePage() {
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

          <div className="badge mb-6">Free Guide · Buyers</div>
          <h1 className="text-white mb-4">The DFW Luxury Buyer&apos;s Guide</h1>
          <p className="text-xl text-white/70 leading-relaxed mb-12">
            Everything you need to know before purchasing luxury real estate in Dallas-Fort Worth — from the most prestigious neighborhoods to the Texas closing process and how to access off-market listings.
          </p>

          <div className="prose-content space-y-6 text-white/80 leading-relaxed">
            <h2 className="text-white text-2xl font-semibold pt-4">Why DFW Is One of America&apos;s Strongest Luxury Markets</h2>
            <p>
              Dallas-Fort Worth is no longer flying under the radar. Over the last decade, DFW has transformed from a regional hub into one of the most active luxury real estate markets in the United States. The combination of corporate relocations (Toyota, Charles Schwab, McKesson, JPMorgan&apos;s expanded footprint), no state income tax, business-friendly policy, top-tier private and public schools, and an inventory of newly built estate homes has created sustained demand for properties from $1 million to $20 million-plus.
            </p>
            <p>
              Unlike coastal luxury markets where supply is constrained by geography, DFW continues to develop. New luxury communities in Westlake, Prosper, Celina, and the M-Streets of Dallas appear every quarter. For buyers, that means real choice — but also a steep learning curve. Knowing where to look, how to time an offer, and how to access homes before they hit MLS is the difference between paying market and paying premium.
            </p>

            <h2 className="text-white text-2xl font-semibold pt-4">The Most Prestigious DFW Neighborhoods</h2>
            <p>
              Five established neighborhoods anchor the high end of the DFW market. Each has a distinct identity, price floor, and buyer profile.
            </p>
            <ul className="list-disc list-outside pl-6 space-y-3 marker:text-[#D52E28]">
              <li>
                <strong className="text-white">Highland Park</strong> — Old-money Dallas. Highland Park ISD, walkable to Highland Park Village, tight inventory. Entry price for a tear-down lot starts around $2M; estate homes routinely trade $5M–$20M+.
              </li>
              <li>
                <strong className="text-white">University Park</strong> — Sister neighborhood to Highland Park, slightly more relaxed feel, same school district. Strong family demand. $2M–$10M typical.
              </li>
              <li>
                <strong className="text-white">Preston Hollow</strong> — Larger lots, gated estates, classic Dallas wealth. Home to many of the city&apos;s most recognizable mansions. $3M–$30M+.
              </li>
              <li>
                <strong className="text-white">Southlake</strong> — Carroll ISD draws families willing to pay a premium for one of the top public school districts in Texas. Estate-style new construction common. $1.5M–$8M.
              </li>
              <li>
                <strong className="text-white">Westlake</strong> — Quietly the most exclusive small town in DFW. Vaquero, Glenwyck Farms, Terra Bella — hedge-fund-and-CEO addresses. $3M–$25M.
              </li>
            </ul>

            <h2 className="text-white text-2xl font-semibold pt-4">Emerging DFW Luxury Submarkets</h2>
            <p>
              Beyond the traditional names, several markets are climbing fast and deserve serious attention from buyers thinking 5–10 years out:
            </p>
            <ul className="list-disc list-outside pl-6 space-y-3 marker:text-[#D52E28]">
              <li>
                <strong className="text-white">Frisco</strong> — Headquartered for Toyota, Liberty Mutual, and the PGA. New construction $1M–$4M. Strong appreciation, top schools.
              </li>
              <li>
                <strong className="text-white">Prosper &amp; Celina</strong> — Northward expansion, large lots, master-planned luxury communities like Light Farms and Windsong Ranch. Excellent value at $1M–$3M.
              </li>
              <li>
                <strong className="text-white">McKinney (West / Adriatica / Tucker Hill)</strong> — Walkable, charm-driven, growing inventory of $1M–$3M custom homes.
              </li>
              <li>
                <strong className="text-white">The M-Streets / Lakewood / Forest Hills</strong> — Closer-in Dallas neighborhoods seeing extensive luxury renovation activity.
              </li>
            </ul>

            <div className="my-12">
              <GuideLeadForm guideTitle="DFW Luxury Buyer's Guide" />
            </div>

            <h2 className="text-white text-2xl font-semibold pt-4">The 7-Step Texas Home Buying Process</h2>
            <p>
              Texas is a non-disclosure state and a buyer-broker-agreement state, which makes the process unique. Here&apos;s the typical timeline once you&apos;re ready to look seriously:
            </p>
            <ol className="list-decimal list-outside pl-6 space-y-3 marker:text-[#D52E28] marker:font-semibold">
              <li><strong className="text-white">Get pre-approved.</strong> A real lender letter — not Zestimate &quot;pre-qualified&quot; — is required before sellers take you seriously above $1M. Bring proof of funds for cash offers.</li>
              <li><strong className="text-white">Sign a buyer-representation agreement.</strong> Required in Texas before showings. Compensation is negotiated upfront, in writing.</li>
              <li><strong className="text-white">Tour homes.</strong> Both MLS and off-market. A good agent should be surfacing pocket listings before they hit Zillow.</li>
              <li><strong className="text-white">Make an offer.</strong> Texas uses the standard TREC One to Four Family Residential Contract. Earnest money, option fee, and option period are negotiated.</li>
              <li><strong className="text-white">Option period &amp; inspection.</strong> Typically 7–10 days. You can terminate for any reason. Inspection happens here, plus structural, pool, foundation, and septic if applicable.</li>
              <li><strong className="text-white">Appraisal &amp; financing.</strong> Lender orders appraisal. If under contract price, you renegotiate or terminate (financing contingency).</li>
              <li><strong className="text-white">Closing.</strong> Title company, deed of trust, funding. 30–45 days from contract to keys for a financed deal; faster for cash.</li>
            </ol>

            <h2 className="text-white text-2xl font-semibold pt-4">What &quot;Luxury&quot; Actually Means in DFW</h2>
            <p>
              The word &quot;luxury&quot; gets thrown around loosely. In DFW, here&apos;s how brokers and the MLS roughly tier the high end:
            </p>
            <ul className="list-disc list-outside pl-6 space-y-3 marker:text-[#D52E28]">
              <li><strong className="text-white">$1M–$2M</strong> — Upper bracket of established markets, entry to luxury submarkets like Frisco, Prosper, Southlake.</li>
              <li><strong className="text-white">$2M–$5M</strong> — Estate homes, high-end new construction, Highland Park &amp; University Park entries.</li>
              <li><strong className="text-white">$5M–$10M</strong> — True luxury — large lots, custom architecture, premium finishes, often with pools, guest houses, and significant land.</li>
              <li><strong className="text-white">$10M+</strong> — Trophy estates. Often privately marketed. The $10M+ tier in DFW is small enough that most listings move through agent networks before hitting public sites.</li>
            </ul>

            <h2 className="text-white text-2xl font-semibold pt-4">How to Access Off-Market Listings</h2>
            <p>
              At the high end of the DFW market, the best inventory often never appears on Zillow, Realtor.com, or even MLS. Sellers value privacy, and listing publicly invites curiosity-tour traffic. To see these properties, you need an agent plugged into the right networks: brokerage-private listings (Bray, Briggs Freeman, Compass, Dave Perry-Miller), the &quot;coming soon&quot; pipeline, and direct relationships with listing agents who circulate quietly to qualified buyers.
            </p>
            <p>
              Practical tip: when you sign a buyer-representation agreement, ask your agent specifically what their off-market access looks like. The honest answer matters.
            </p>

            <h2 className="text-white text-2xl font-semibold pt-4">Inspection, Appraisal, and Financing Nuances</h2>
            <p>
              Three things consistently surprise out-of-state buyers in Texas:
            </p>
            <ul className="list-disc list-outside pl-6 space-y-3 marker:text-[#D52E28]">
              <li><strong className="text-white">Foundation issues are common.</strong> DFW has expansive clay soil. Even brand-new homes can have movement. A structural engineer report (separate from the general inspection) is worth $500–$800 on any home over $1M.</li>
              <li><strong className="text-white">Property taxes are high.</strong> No state income tax, but DFW property tax rates run 2.0–2.7% of assessed value. On a $3M home, that&apos;s $60K–$80K/year. Budget accordingly.</li>
              <li><strong className="text-white">Jumbo lending is competitive but specific.</strong> Above $766,550 (2026 conforming limit), you&apos;re in jumbo territory. Local relationship lenders often beat national banks on rate and underwriting flexibility.</li>
            </ul>

            <h2 className="text-white text-2xl font-semibold pt-4">Three Mistakes High-End DFW Buyers Make</h2>
            <ol className="list-decimal list-outside pl-6 space-y-3 marker:text-[#D52E28] marker:font-semibold">
              <li><strong className="text-white">Falling in love before due diligence.</strong> The home you toured at sunset looked perfect. The structural engineer&apos;s report two weeks later might say otherwise. Stay disciplined through the option period.</li>
              <li><strong className="text-white">Over-relying on Zestimate.</strong> Zillow&apos;s algorithm is unreliable above $1M because comps are sparse. A real CMA from a local agent is essential.</li>
              <li><strong className="text-white">Underestimating the holding cost.</strong> Property taxes, HOA, insurance (especially in tornado-prone areas), pool maintenance, lawn services — annual carry on a $3M home easily runs $130K+ before mortgage. Plan for it.</li>
            </ol>

            <h2 className="text-white text-2xl font-semibold pt-4">Why Work With a Luxury Specialist</h2>
            <p>
              The best agents at the high end aren&apos;t just transactionally competent — they&apos;re strategically valuable. They have direct relationships with listing agents in your target neighborhoods, they know which homes have been tried and pulled, they understand pricing nuance below the MLS surface, and they negotiate with the calm of someone who has done it dozens of times. The wrong agent costs you money in invisible ways: a missed off-market opportunity, a weak offer structure, an overpaid appraisal gap.
            </p>
            <p>
              Whether you work with me or someone else, vet aggressively. Ask for closed transactions in your target price band, references from clients in your situation, and specifics about off-market access. The right agent saves you 2–5% on your purchase. The wrong one costs you that and more.
            </p>

            <div className="mt-12 mb-4 border border-[#2a2a2a] bg-[#141414] p-8">
              <h3 className="text-white text-xl font-semibold mb-3">Ready to Start Your DFW Search?</h3>
              <p className="text-white/70 mb-6">
                I work with buyers across the DFW metroplex — from first-time luxury purchases to relocations and investment additions. Let&apos;s have a no-pressure conversation about what you&apos;re looking for and how I can help.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/new-client-inquiry" className="btn-primary">Start Your Search</Link>
                <a href={AGENT_TEL} className="btn-secondary">Call (469) 256-1088</a>
              </div>
            </div>

            <div className="my-12">
              <GuideLeadForm guideTitle="DFW Luxury Buyer's Guide" variant="compact" />
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
