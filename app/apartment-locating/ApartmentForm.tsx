'use client'

import { useState, FormEvent } from 'react'
import { formatPhone, submitToFormspree } from '@/lib/form-utils'
import FormSuccess from '@/components/FormSuccess'

export default function ApartmentForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [moveInDate, setMoveInDate] = useState('')
  const [location, setLocation] = useState('')
  const [budget, setBudget] = useState('')
  const [bedrooms, setBedrooms] = useState('')
  const [bathrooms, setBathrooms] = useState('')

  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    setSubmitting(true)

    const result = await submitToFormspree({
      _subject: `Apartment Locating Inquiry — ${name}`,
      name: name || 'Not provided',
      email: email.toLowerCase(),
      phone: phone || 'Not provided',
      moveInDate: moveInDate || 'Not specified',
      location: location || 'Not specified',
      budget: budget || 'Not specified',
      bedrooms: bedrooms || 'Not specified',
      bathrooms: bathrooms || 'Not specified',
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
        title="Request Received!"
        message="Colin will review your preferences and start searching for the perfect place. Expect a follow-up soon."
      />
    )
  }

  return (
    <div className="bg-[#141414] border border-[#2a2a2a] p-8 md:p-10">
      <h2 className="text-xl text-white font-semibold mb-6">Lease Contact Form</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(formatPhone(e.target.value))}
            className="form-input"
            placeholder="(555) 555-5555"
          />
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
          <label htmlFor="location" className="block text-sm font-medium text-white mb-2">
            Location
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="form-input"
            placeholder="Preferred area or neighborhood"
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
            className="form-input"
            placeholder="e.g., $1,500 - $2,000/month"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="bedrooms" className="block text-sm font-medium text-white mb-2">
              Bedrooms
            </label>
            <select
              id="bedrooms"
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              className="form-select"
            >
              <option value="">Select</option>
              <option value="studio">Studio</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4+">4+</option>
            </select>
          </div>

          <div>
            <label htmlFor="bathrooms" className="block text-sm font-medium text-white mb-2">
              Bathrooms
            </label>
            <select
              id="bathrooms"
              value={bathrooms}
              onChange={(e) => setBathrooms(e.target.value)}
              className="form-select"
            >
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="1.5">1.5</option>
              <option value="2">2</option>
              <option value="2.5">2.5</option>
              <option value="3+">3+</option>
            </select>
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
          ) : 'Submit'}
        </button>

        <p className="text-sm text-white/40 text-center">
          Thank you! I will review your information and get back to you shortly!
        </p>
      </form>
    </div>
  )
}
