import Image from 'next/image'
import Link from 'next/link'
import { AGENT, AGENT_TEL, AGENT_SMS, AGENT_MAILTO } from '@/lib/agent'

interface AgentCardProps {
  ctaLabel?: string
  ctaHref?: string
}

export default function AgentCard({ ctaLabel, ctaHref }: AgentCardProps) {
  return (
    <section className="section">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#141414] border border-[#2a2a2a] p-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#D52E28]/30">
              <Image
                src={AGENT.headshot}
                alt={AGENT.name}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-white mb-1">Listed by {AGENT.name}</h3>
              <p className="text-white/50 mb-4">{AGENT.title}</p>
              <div className="flex flex-wrap gap-4">
                <a href={AGENT_TEL} className="btn-primary !py-3 !px-5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call
                </a>
                <a href={AGENT_SMS} className="btn-secondary !py-3 !px-5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Text
                </a>
                <a href={AGENT_MAILTO} className="btn-secondary !py-3 !px-5">
                  Email
                </a>
                {ctaLabel && ctaHref && (
                  <Link href={ctaHref} className="btn-secondary !py-3 !px-5 !border-[#D52E28] !text-[#D52E28]">
                    {ctaLabel}
                  </Link>
                )}
              </div>
            </div>
            <div className="text-sm text-white/40">
              <p className="mb-1">{AGENT.phoneFormatted}</p>
              <p className="mb-1">{AGENT.email}</p>
              <p>License {AGENT.license}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
