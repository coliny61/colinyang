'use client'

import { useState, FormEvent } from 'react'
import { formatPhone, submitToFormspree } from '@/lib/form-utils'
import FormSuccess from '@/components/FormSuccess'

export default function ClientInquiryForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [lookingFor, setLookingFor] = useState<string[]>([])
  const [moveInDate, setMoveInDate] = useState('')
  const [priceRange, setPriceRange] = useState('')
  const [location, setLocation] = useState('')
  const [howDidYouHear, setHowDidYouHear] = useState('')

  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function toggleLookingFor(option: string) {
    setLookingFor((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    )
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    setSubmitting(true)

    const result = await submitToFormspree({
      _subject: `New Client Inquiry — ${name}`,
      name,
      email: email.toLowerCase(),
      phone,
      lookingFor: lookingFor.join(', ') || 'Not specified',
      moveInDate: moveInDate || 'Not specified',
      priceRange: priceRange || 'Not specified',
      location,
      howDidYouHear: howDidYouHear || 'Not specified',
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
        title="Inquiry Received!"
        message="Thanks for reaching out. Colin will review your information and get back to you as soon as possible."
      />
    )
  }

  return (
    <div className="bg-[#141414] border border-[#2a2a2a] p-8 md:p-10">
      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
            Name <span className="text-[#D52E28]">*</span>
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form-input"
            placeholder="Your name"
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
            placeholder="your@email.com"
          />
        </div>

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
            placeholder="(555) 555-5555"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-3">
            What are you looking for? <span className="text-[#D52E28]">*</span>
          </label>
          <div className="flex flex-wrap gap-4">
            {['Buy', 'Lease', 'Sell'].map((option) => (
              <label
                key={option}
                className={`flex items-center gap-3 px-5 py-3 border cursor-pointer transition-all ${
                  lookingFor.includes(option)
                    ? 'border-[#D52E28] bg-[#D52E28]/5'
                    : 'border-[#2a2a2a] hover:border-white/30'
                }`}
              >
                <input
                  type="checkbox"
                  checked={lookingFor.includes(option)}
                  onChange={() => toggleLookingFor(option)}
                  className="form-checkbox"
                />
                <span className="text-white/80">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="moveInDate" className="block text-sm font-medium text-white mb-2">
            Preferred Move-In Date
          </label>
          <input
            type="date"
            id="moveInDate"
            value={moveInDate}
            onChange={(e) => setMoveInDate(e.target.value)}
            className="form-input"
          />
        </div>

        <div>
          <label htmlFor="priceRange" className="block text-sm font-medium text-white mb-2">
            Price Range
          </label>
          <input
            type="text"
            id="priceRange"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="form-input"
            placeholder="e.g., $300,000 - $400,000"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-white mb-2">
            Location <span className="text-[#D52E28]">*</span>
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="form-input"
            placeholder="Preferred area or neighborhood"
          />
        </div>

        <div>
          <label htmlFor="howDidYouHear" className="block text-sm font-medium text-white mb-2">
            How did you hear about us?
          </label>
          <input
            type="text"
            id="howDidYouHear"
            value={howDidYouHear}
            onChange={(e) => setHowDidYouHear(e.target.value)}
            className="form-input"
            placeholder="Referral, Google, Instagram, etc."
          />
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
          ) : 'Submit'}
        </button>

        <p className="text-xs text-white/40 mt-4 text-center">
          By submitting this form, you consent to receive marketing communications via calls, texts, and emails. You may opt out at any time.
        </p>
      </form>
    </div>
  )
}
