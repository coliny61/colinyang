'use client'

import { useState, FormEvent } from 'react'
import { formatPhone, submitToFormspree } from '@/lib/form-utils'
import FormSuccess from '@/components/FormSuccess'

const SUBJECTS = [
  'Buying a Home',
  'Selling a Home',
  'Leasing',
  'Investment Properties',
  'Apartment Locating',
  'General Question',
  'Other',
]

export default function ConnectForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    setSubmitting(true)

    const result = await submitToFormspree({
      _subject: `New Message — ${subject || 'General'}`,
      name,
      email: email.toLowerCase(),
      phone: phone || 'Not provided',
      subject: subject || 'Not specified',
      message: message || 'No message provided',
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
        title="Message Sent!"
        message="Thanks for reaching out. Colin will get back to you shortly."
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
          <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
            Subject <span className="text-[#D52E28]">*</span>
          </label>
          <select
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="form-select"
          >
            <option value="">Select a topic</option>
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="form-textarea"
            placeholder="How can Colin help you?"
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
              Sending...
            </span>
          ) : 'Send Message'}
        </button>
      </form>
    </div>
  )
}
