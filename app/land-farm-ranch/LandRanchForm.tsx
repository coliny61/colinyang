'use client'

import { useState, FormEvent } from 'react'
import { formatPhone, submitToFormspree } from '@/lib/form-utils'
import FormSuccess from '@/components/FormSuccess'

export default function LandRanchForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [propertyType, setPropertyType] = useState<string[]>([])
  const [purchaseDate, setPurchaseDate] = useState('')
  const [budget, setBudget] = useState('')
  const [acreage, setAcreage] = useState('')
  const [location, setLocation] = useState('')
  const [purpose, setPurpose] = useState('')

  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function togglePropertyType(option: string) {
    setPropertyType((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    )
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    setSubmitting(true)

    const result = await submitToFormspree({
      _subject: `Land/Farm/Ranch Inquiry — ${name}`,
      name,
      email: email.toLowerCase(),
      phone: phone || 'Not provided',
      propertyType: propertyType.join(', ') || 'Not specified',
      purchaseDate: purchaseDate || 'Not specified',
      budget: budget || 'Not specified',
      acreage: acreage || 'Not specified',
      location: location || 'Not specified',
      purpose: purpose || 'Not specified',
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
        title="Inquiry Submitted!"
        message="Colin will review your land requirements and reach out with available options and next steps."
      />
    )
  }

  return (
    <div className="bg-[#141414] border border-[#2a2a2a] p-8 md:p-10">
      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

        <div className="grid md:grid-cols-2 gap-6">
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
            />
          </div>
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
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-3">
            Property Type
          </label>
          <div className="flex flex-wrap gap-4">
            {['Land', 'Farm', 'Ranch'].map((option) => (
              <label
                key={option}
                className={`flex items-center gap-3 px-5 py-3 border cursor-pointer transition-all ${
                  propertyType.includes(option)
                    ? 'border-[#D52E28] bg-[#D52E28]/5'
                    : 'border-[#2a2a2a] hover:border-white/30'
                }`}
              >
                <input
                  type="checkbox"
                  checked={propertyType.includes(option)}
                  onChange={() => togglePropertyType(option)}
                  className="form-checkbox"
                />
                <span className="text-white/80">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="purchaseDate" className="block text-sm font-medium text-white mb-2">
              Preferred Purchase Date
            </label>
            <input
              type="date"
              id="purchaseDate"
              value={purchaseDate}
              onChange={(e) => setPurchaseDate(e.target.value)}
              className="form-input"
            />
          </div>
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-white mb-2">
              Budget
            </label>
            <input
              type="text"
              id="budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="e.g., $500,000 - $1,000,000"
              className="form-input"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="acreage" className="block text-sm font-medium text-white mb-2">
              Acreage
            </label>
            <input
              type="text"
              id="acreage"
              value={acreage}
              onChange={(e) => setAcreage(e.target.value)}
              placeholder="e.g., 50+ acres"
              className="form-input"
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-white mb-2">
              Desired Location
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g., West Texas, Hill Country"
              className="form-input"
            />
          </div>
        </div>

        <div>
          <label htmlFor="purpose" className="block text-sm font-medium text-white mb-2">
            Property Purpose
          </label>
          <textarea
            id="purpose"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            rows={4}
            placeholder="What do you plan to use the property for?"
            className="form-textarea"
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
          className="btn-primary w-full justify-center disabled:!bg-slate-400 disabled:!text-slate-700 disabled:!border-slate-400 disabled:cursor-not-allowed"
        >
          {submitting ? (
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Submitting...
            </span>
          ) : 'Submit Inquiry'}
        </button>
      </form>
    </div>
  )
}
