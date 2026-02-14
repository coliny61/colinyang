'use client'

import { useState, FormEvent } from 'react'
import { formatPhone, submitToFormspree } from '@/lib/form-utils'
import FormSuccess from '@/components/FormSuccess'

const CONDITIONS = ['Excellent', 'Good', 'Fair', 'Needs Work']
const RECENT_UPDATES = [
  'Kitchen Remodel',
  'Bathroom Remodel',
  'New Roof',
  'New HVAC',
  'New Flooring',
  'Pool Added',
  'Landscaping',
  'Other',
]
const REASONS = [
  'Thinking of Selling',
  'Refinancing',
  'Curious About Value',
  'Estate Planning',
  'Other',
]
const TIMELINES = [
  'ASAP',
  'Within 3 Months',
  'Within 6 Months',
  'Within a Year',
  'Just Curious',
]

export default function ValuationForm() {
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [beds, setBeds] = useState('')
  const [baths, setBaths] = useState('')
  const [sqft, setSqft] = useState('')
  const [yearBuilt, setYearBuilt] = useState('')
  const [condition, setCondition] = useState('')
  const [updates, setUpdates] = useState<string[]>([])
  const [ownerName, setOwnerName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [reason, setReason] = useState('')
  const [timeline, setTimeline] = useState('')

  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function toggleUpdate(item: string) {
    setUpdates((prev) =>
      prev.includes(item) ? prev.filter((u) => u !== item) : [...prev, item]
    )
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    setSubmitting(true)

    const result = await submitToFormspree({
      _subject: `Home Valuation Request — ${address}, ${city}`,
      address,
      city,
      bedrooms: beds || 'Not specified',
      bathrooms: baths || 'Not specified',
      sqft: sqft || 'Not specified',
      year_built: yearBuilt || 'Not specified',
      condition: condition || 'Not specified',
      recent_updates: updates.length > 0 ? updates.join(', ') : 'None',
      owner_name: ownerName,
      email: email.toLowerCase(),
      phone: phone || 'Not provided',
      reason: reason || 'Not specified',
      timeline: timeline || 'Not specified',
      source_url: typeof window !== 'undefined' ? window.location.href : '',
      submitted_at: new Date().toISOString(),
    })

    if (result.ok) {
      setSubmitted(true)
    } else {
      setError(result.error || 'Something went wrong.')
    }
    setSubmitting(false)
  }

  if (submitted) {
    return (
      <FormSuccess
        title="Valuation Request Received!"
        message="Colin will prepare a Comparative Market Analysis (CMA) for your property and reach out within 24 hours."
      />
    )
  }

  return (
    <div className="bg-[#141414] border border-[#2a2a2a] p-8 md:p-10">
      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

        {/* Property Details */}
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-white mb-2">
            Property Address <span className="text-[#D52E28]">*</span>
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="form-input"
            placeholder="123 Main Street"
          />
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-white mb-2">
            City <span className="text-[#D52E28]">*</span>
          </label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            className="form-input"
            placeholder="Dallas, TX"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label htmlFor="beds" className="block text-sm font-medium text-white mb-2">Beds</label>
            <input type="number" id="beds" value={beds} onChange={(e) => setBeds(e.target.value)} min="0" max="20" className="form-input" placeholder="3" />
          </div>
          <div>
            <label htmlFor="baths" className="block text-sm font-medium text-white mb-2">Baths</label>
            <input type="number" id="baths" value={baths} onChange={(e) => setBaths(e.target.value)} min="0" max="20" step="0.5" className="form-input" placeholder="2" />
          </div>
          <div>
            <label htmlFor="sqft" className="block text-sm font-medium text-white mb-2">Sq Ft</label>
            <input type="number" id="sqft" value={sqft} onChange={(e) => setSqft(e.target.value)} min="0" className="form-input" placeholder="2,000" />
          </div>
          <div>
            <label htmlFor="yearBuilt" className="block text-sm font-medium text-white mb-2">Year Built</label>
            <input type="number" id="yearBuilt" value={yearBuilt} onChange={(e) => setYearBuilt(e.target.value)} min="1800" max="2026" className="form-input" placeholder="2005" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-3">Condition</label>
          <div className="flex flex-wrap gap-3">
            {CONDITIONS.map((c) => (
              <label
                key={c}
                className={`px-4 py-2 border cursor-pointer transition-all text-sm ${
                  condition === c
                    ? 'border-[#D52E28] bg-[#D52E28]/5 text-white'
                    : 'border-[#2a2a2a] text-white/60 hover:border-white/30'
                }`}
              >
                <input
                  type="radio"
                  name="condition"
                  value={c}
                  checked={condition === c}
                  onChange={() => setCondition(c)}
                  className="sr-only"
                />
                {c}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-3">
            Recent Updates <span className="text-white/40 font-normal ml-2">(select all that apply)</span>
          </label>
          <div className="grid sm:grid-cols-2 gap-3">
            {RECENT_UPDATES.map((item) => (
              <label
                key={item}
                className={`flex items-center gap-3 p-3 border cursor-pointer transition-all ${
                  updates.includes(item)
                    ? 'border-[#D52E28] bg-[#D52E28]/5'
                    : 'border-[#2a2a2a] hover:border-white/30'
                }`}
              >
                <input
                  type="checkbox"
                  checked={updates.includes(item)}
                  onChange={() => toggleUpdate(item)}
                  className="form-checkbox"
                />
                <span className="text-white/80 text-sm">{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Owner Info */}
        <div className="pt-4 pb-2">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-[#2a2a2a]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D52E28]">Your Information</span>
            <div className="h-px flex-1 bg-[#2a2a2a]" />
          </div>
        </div>

        <div>
          <label htmlFor="ownerName" className="block text-sm font-medium text-white mb-2">
            Name <span className="text-[#D52E28]">*</span>
          </label>
          <input
            type="text"
            id="ownerName"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            required
            className="form-input"
            placeholder="Your name"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
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
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(formatPhone(e.target.value))}
              className="form-input"
              placeholder="(214) 555-1234"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-3">Reason for Valuation</label>
          <div className="flex flex-wrap gap-3">
            {REASONS.map((r) => (
              <label
                key={r}
                className={`px-4 py-2 border cursor-pointer transition-all text-sm ${
                  reason === r
                    ? 'border-[#D52E28] bg-[#D52E28]/5 text-white'
                    : 'border-[#2a2a2a] text-white/60 hover:border-white/30'
                }`}
              >
                <input type="radio" name="reason" value={r} checked={reason === r} onChange={() => setReason(r)} className="sr-only" />
                {r}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-3">Timeline</label>
          <div className="flex flex-wrap gap-3">
            {TIMELINES.map((t) => (
              <label
                key={t}
                className={`px-4 py-2 border cursor-pointer transition-all text-sm ${
                  timeline === t
                    ? 'border-[#D52E28] bg-[#D52E28]/5 text-white'
                    : 'border-[#2a2a2a] text-white/60 hover:border-white/30'
                }`}
              >
                <input type="radio" name="timeline" value={t} checked={timeline === t} onChange={() => setTimeline(t)} className="sr-only" />
                {t}
              </label>
            ))}
          </div>
        </div>

        {error && (
          <div className="p-4 border border-red-500/40 bg-red-500/10 text-red-300 text-sm rounded flex items-start gap-3 animate-fade-in">
            <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="btn-primary w-full justify-center mt-8 disabled:!bg-slate-400 disabled:!text-slate-700 disabled:!border-slate-400 disabled:cursor-not-allowed"
        >
          {submitting ? (
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Submitting...
            </span>
          ) : 'Get My Free Valuation'}
        </button>

        <p className="text-xs text-white/30 text-center mt-4">
          Your information is kept confidential and will only be used to prepare your property valuation.
        </p>
      </form>
    </div>
  )
}
