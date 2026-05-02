'use client'

import { useState, FormEvent } from 'react'
import { useSearchParams } from 'next/navigation'
import { formatPhone, submitToFormspree } from '@/lib/form-utils'
import { OPEN_HOUSE_PROPERTIES, DEFAULT_PROPERTY_SLUG } from '@/lib/open-house-properties'

const TIMELINE_OPTIONS = [
  'Now — actively looking',
  '1–3 months',
  '3–6 months',
  '6–12 months',
  'Just browsing',
]

export default function OpenHouseForm() {
  const searchParams = useSearchParams()

  const requestedSlug = searchParams.get('property')
  const propertySlug =
    requestedSlug && OPEN_HOUSE_PROPERTIES[requestedSlug]
      ? requestedSlug
      : DEFAULT_PROPERTY_SLUG
  const property = OPEN_HOUSE_PROPERTIES[propertySlug]

  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [hasAgent, setHasAgent] = useState<string>('')
  const [agentName, setAgentName] = useState('')
  const [timeline, setTimeline] = useState('')

  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')

    const phoneDigits = phone.replace(/\D/g, '')
    if (phoneDigits.length !== 10) {
      setError('Please enter a valid 10-digit phone number.')
      return
    }

    setSubmitting(true)

    const formData = {
      _subject: `Open House Sign-In — ${property.address} — ${fullName}`,
      property: property.address,
      property_slug: propertySlug,
      visitor: fullName,
      phone,
      email: email.toLowerCase(),
      timeline,
      agent:
        hasAgent === 'yes'
          ? agentName.trim()
            ? `Yes — ${agentName.trim()}`
            : 'Yes (no agent name provided)'
          : 'No',
      submitted_at: new Date().toISOString(),
    }

    const result = await submitToFormspree(formData)
    if (result.ok) {
      setSubmitted(true)
    } else {
      setError(result.error || 'Something went wrong. Please try again.')
    }
    setSubmitting(false)
  }

  if (submitted) {
    const firstName = fullName.trim().split(/\s+/)[0] || ''
    return (
      <div className="bg-[#141414] border border-[#2a2a2a] p-8 md:p-10 text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#D52E28]/10 flex items-center justify-center">
          <svg className="w-8 h-8 text-[#D52E28]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl text-white font-semibold mb-3">
          Thanks{firstName && `, ${firstName}`}!
        </h2>
        <p className="text-white/70 mb-6">
          Take your time looking around. Colin&apos;s here if you have questions, or text/call him
          anytime at{' '}
          <a href="tel:4692561088" className="text-[#D52E28] hover:underline">
            (469) 256-1088
          </a>
          .
        </p>
        <a href={property.detailsHref} className="btn-secondary inline-flex items-center gap-2">
          View Full Listing Details →
        </a>
      </div>
    )
  }

  return (
    <div className="bg-[#141414] border border-[#2a2a2a] p-6 md:p-10">
      <div className="mb-6 pb-6 border-b border-[#2a2a2a]">
        <div className="text-xs text-[#D52E28] uppercase tracking-widest font-semibold mb-2">
          Signing in for
        </div>
        <div className="text-white text-lg md:text-xl font-semibold">{property.address}</div>
        <div className="text-white/60 text-sm">{property.cityStateZip}</div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

        <div>
          <label htmlFor="full_name" className="block text-sm font-medium text-white mb-2">
            Full Name <span className="text-[#D52E28]">*</span>
          </label>
          <input
            type="text"
            id="full_name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            minLength={2}
            maxLength={120}
            className="form-input"
            placeholder="Jane Smith"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
              Phone <span className="text-[#D52E28]">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(formatPhone(e.target.value))}
              required
              className="form-input"
              placeholder="(469) 555-1234"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              Email <span className="text-[#D52E28]">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
              placeholder="jane@example.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-3">
            Are you currently working with a real estate agent?{' '}
            <span className="text-[#D52E28]">*</span>
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            {[
              { value: 'no', label: 'No' },
              { value: 'yes', label: 'Yes' },
            ].map((opt) => (
              <label
                key={opt.value}
                className={`flex items-center gap-3 px-5 py-3 border cursor-pointer transition-all flex-1 justify-center ${
                  hasAgent === opt.value
                    ? 'border-[#D52E28] bg-[#D52E28]/5'
                    : 'border-[#2a2a2a] hover:border-white/30'
                }`}
              >
                <input
                  type="radio"
                  name="has_agent"
                  value={opt.value}
                  checked={hasAgent === opt.value}
                  onChange={(e) => setHasAgent(e.target.value)}
                  className="form-checkbox"
                  required
                />
                <span className="text-white/80">{opt.label}</span>
              </label>
            ))}
          </div>
        </div>

        {hasAgent === 'yes' && (
          <div>
            <label htmlFor="agent_name" className="block text-sm font-medium text-white mb-2">
              Your agent&apos;s name (optional)
            </label>
            <input
              type="text"
              id="agent_name"
              value={agentName}
              onChange={(e) => setAgentName(e.target.value)}
              maxLength={120}
              className="form-input"
              placeholder="John Doe, Keller Williams"
            />
          </div>
        )}

        <div>
          <label htmlFor="timeline" className="block text-sm font-medium text-white mb-2">
            What&apos;s your timeline to buy? <span className="text-[#D52E28]">*</span>
          </label>
          <select
            id="timeline"
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
            required
            className="form-select"
          >
            <option value="">Select a timeline</option>
            {TIMELINE_OPTIONS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        {error && (
          <div className="p-4 border border-red-500/40 bg-red-500/10 text-red-300 text-sm rounded flex items-start gap-3">
            <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="btn-primary w-full justify-center mt-4 disabled:!bg-slate-400 disabled:!text-slate-700 disabled:!border-slate-400 disabled:cursor-not-allowed"
        >
          {submitting ? (
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Signing In...
            </span>
          ) : (
            'Sign In →'
          )}
        </button>

        <p className="text-xs text-white/40 text-center">
          Your info is sent only to Colin Yang at Bray Real Estate Group. We don&apos;t share or sell
          visitor information.
        </p>
      </form>
    </div>
  )
}
