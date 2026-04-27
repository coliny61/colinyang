'use client'

import { useState, FormEvent } from 'react'
import { formatPhone, submitToFormspree } from '@/lib/form-utils'
import FormSuccess from '@/components/FormSuccess'

interface GuideLeadFormProps {
  guideTitle: string
  variant?: 'full' | 'compact'
}

export default function GuideLeadForm({ guideTitle, variant = 'full' }: GuideLeadFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    const result = await submitToFormspree({
      _subject: `New Lead — ${guideTitle}`,
      lead_source: guideTitle,
      name,
      email: email.toLowerCase(),
      phone: phone || 'Not provided',
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
        title="You're on the list."
        message="Colin will reach out personally with DFW market insights and an updated copy of this guide. Want to talk sooner? Call (469) 256-1088."
      />
    )
  }

  const compact = variant === 'compact'

  return (
    <div
      className={`bg-[#141414] border border-[#2a2a2a] ${
        compact ? 'p-6' : 'p-8 md:p-10'
      }`}
    >
      <div className="mb-6">
        <div className="badge mb-4">Free</div>
        <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">
          Get DFW Market Updates From Colin
        </h3>
        <p className="text-white/60 text-sm">
          Monthly insights on luxury market trends, off-market listings, and neighborhood data — delivered to your inbox. Plus a printable copy of this guide.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

        <div className={compact ? '' : 'grid md:grid-cols-2 gap-4'}>
          <div>
            <label htmlFor={`name-${variant}`} className="block text-sm font-medium text-white mb-2">
              Name <span className="text-[#D52E28]">*</span>
            </label>
            <input
              type="text"
              id={`name-${variant}`}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="form-input"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor={`email-${variant}`} className="block text-sm font-medium text-white mb-2">
              Email <span className="text-[#D52E28]">*</span>
            </label>
            <input
              type="email"
              id={`email-${variant}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor={`phone-${variant}`} className="block text-sm font-medium text-white mb-2">
            Phone <span className="text-white/40 font-normal ml-1">(optional)</span>
          </label>
          <input
            type="tel"
            id={`phone-${variant}`}
            value={phone}
            onChange={(e) => setPhone(formatPhone(e.target.value))}
            className="form-input"
            placeholder="(214) 555-1234"
          />
        </div>

        {error && (
          <div className="p-4 border border-red-500/40 bg-red-500/10 text-red-300 text-sm rounded">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="btn-primary w-full justify-center disabled:!bg-slate-400 disabled:!text-slate-700 disabled:!border-slate-400 disabled:cursor-not-allowed"
        >
          {submitting ? 'Sending…' : 'Send Me The Guide'}
        </button>

        <p className="text-xs text-white/40 text-center">
          No spam. Unsubscribe anytime. Your information stays confidential.
        </p>
      </form>
    </div>
  )
}
