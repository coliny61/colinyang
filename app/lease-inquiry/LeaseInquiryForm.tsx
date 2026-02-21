'use client'

import { useState, useEffect, FormEvent } from 'react'
import { useSearchParams } from 'next/navigation'
import { FORMSPREE_ENDPOINT, formatPhone } from '@/lib/form-utils'

// ── Property Configuration ─────────────────────────────────────────
// Add new properties here. Units will populate automatically.
const PROPERTIES = [
  {
    id: '2203-hondo',
    name: '2203 Hondo Avenue, Dallas, TX',
    units: [
      { id: '203', label: 'Unit 203' },
      { id: '204', label: 'Unit 204' },
    ],
  },
  {
    id: '2315-hawthorne',
    name: '2315 Hawthorne Avenue, Dallas, TX',
    units: [],
  },
]

const LEASE_DURATIONS = [
  '6 Months',
  '12 Months',
  '24 Months',
  'Month-to-Month',
  'Other',
]

const EMPLOYMENT_OPTIONS = [
  'Full-time Employed',
  'Part-time Employed',
  'Self-Employed',
  'Student',
  'Retired',
  'Other',
]

const CREDIT_RANGES = [
  '750+',
  '700 - 749',
  '650 - 699',
  '600 - 649',
  'Below 600',
  "I don't know",
]

const INCOME_RANGES = [
  'Under $3,000/mo',
  '$3,000 - $4,999/mo',
  '$5,000 - $7,499/mo',
  '$7,500 - $9,999/mo',
  '$10,000+/mo',
  'Prefer not to say',
]

// ── Section Divider ────────────────────────────────────────────────
function SectionDivider({ title }: { title: string }) {
  return (
    <div className="pt-4 pb-2">
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-[#2a2a2a]" />
        <span className="text-xs font-semibold uppercase tracking-widest text-[#D52E28]">
          {title}
        </span>
        <div className="h-px flex-1 bg-[#2a2a2a]" />
      </div>
    </div>
  )
}

// ── Main Form Component ────────────────────────────────────────────
export default function LeaseInquiryForm() {
  const searchParams = useSearchParams()
  const [selectedProperty, setSelectedProperty] = useState('')
  const [unitInterest, setUnitInterest] = useState('')

  // Pre-select property/unit from query params (e.g., from /hondo page)
  useEffect(() => {
    const propertyParam = searchParams.get('property')
    const unitParam = searchParams.get('unit')
    if (propertyParam && PROPERTIES.some(p => p.id === propertyParam)) {
      setSelectedProperty(propertyParam)
      if (unitParam) {
        const property = PROPERTIES.find(p => p.id === propertyParam)
        if (property?.units.some(u => u.id === unitParam)) {
          setUnitInterest(unitParam)
        }
      }
    }
  }, [searchParams])
  const [applicantNames, setApplicantNames] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [currentAddress, setCurrentAddress] = useState('')
  const [desiredStartDate, setDesiredStartDate] = useState('')
  const [leaseDuration, setLeaseDuration] = useState('')
  const [leaseDurationOther, setLeaseDurationOther] = useState('')
  const [occupantCount, setOccupantCount] = useState('')
  const [hasPets, setHasPets] = useState<string>('')
  const [petDetails, setPetDetails] = useState('')
  const [smokesOnPremises, setSmokesOnPremises] = useState<string>('')
  const [employmentStatus, setEmploymentStatus] = useState<string[]>([])
  const [employmentOther, setEmploymentOther] = useState('')
  const [occupation, setOccupation] = useState('')
  const [creditScoreRange, setCreditScoreRange] = useState('')
  const [referenceConsent, setReferenceConsent] = useState<string>('')
  const [grossMonthlyIncome, setGrossMonthlyIncome] = useState('')

  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const property = PROPERTIES.find((p) => p.id === selectedProperty)
  const today = new Date().toISOString().split('T')[0]

  function toggleEmployment(option: string) {
    setEmploymentStatus((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    )
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')

    const phoneDigits = phone.replace(/\D/g, '')
    if (phoneDigits.length !== 10) {
      setError('Please enter a valid 10-digit phone number.')
      return
    }

    setSubmitting(true)

    const propertyName = property?.name || selectedProperty
    const unitLabel = unitInterest === 'either' ? 'Either (open to both)' : unitInterest

    const formData = {
      _subject: `New Lease Inquiry — ${propertyName} — ${unitLabel}`,
      property: propertyName,
      property_id: selectedProperty,
      unit_interest: unitLabel,
      applicant_names: applicantNames,
      phone: phone,
      email: email.toLowerCase(),
      current_address: currentAddress,
      desired_start_date: desiredStartDate,
      preferred_lease_duration: leaseDuration === 'Other' ? `Other: ${leaseDurationOther}` : leaseDuration,
      occupant_count: occupantCount,
      pets: hasPets === 'yes' ? `Yes — ${petDetails}` : 'No',
      smokes_on_premises: smokesOnPremises === 'yes' ? 'Yes' : 'No',
      employment_status: employmentStatus.includes('Other')
        ? [...employmentStatus.filter((s) => s !== 'Other'), `Other: ${employmentOther}`].join(', ')
        : employmentStatus.join(', '),
      occupation: occupation,
      credit_score_range: creditScoreRange,
      gross_monthly_income: grossMonthlyIncome,
      reference_check_consent: referenceConsent === 'yes' ? 'Yes' : 'No',
      source_url: typeof window !== 'undefined' ? window.location.href : '',
      submitted_at: new Date().toISOString(),
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again or contact us directly.')
      }
    } catch {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  // ── Success State ──────────────────────────────────────────────
  if (submitted) {
    return (
      <div className="bg-[#141414] border border-[#2a2a2a] p-8 md:p-10 text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#D52E28]/10 flex items-center justify-center">
          <svg className="w-8 h-8 text-[#D52E28]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl text-white font-semibold mb-3">
          Thanks — we received your inquiry.
        </h2>
        <p className="text-white/70 mb-6">
          We&apos;ll review your information and follow up soon regarding next steps and scheduling.
        </p>
        <a href="tel:4692561088" className="btn-secondary inline-flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          (469) 256-1088
        </a>
      </div>
    )
  }

  // ── Form ───────────────────────────────────────────────────────
  return (
    <div className="bg-[#141414] border border-[#2a2a2a] p-8 md:p-10">
      {/* Honeypot for spam */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

        {/* ── Property & Unit ─────────────────────────────────── */}
        <SectionDivider title="Property" />

        <div>
          <label htmlFor="property" className="block text-sm font-medium text-white mb-2">
            Property <span className="text-[#D52E28]">*</span>
          </label>
          <select
            id="property"
            value={selectedProperty}
            onChange={(e) => {
              setSelectedProperty(e.target.value)
              setUnitInterest('')
            }}
            required
            className="form-select"
          >
            <option value="">Select a property</option>
            {PROPERTIES.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>

        {property && (
          <div>
            <label className="block text-sm font-medium text-white mb-3">
              Which unit are you interested in? <span className="text-[#D52E28]">*</span>
            </label>
            <div className="space-y-3">
              {property.units.map((unit) => (
                <label
                  key={unit.id}
                  className={`flex items-center gap-3 p-3 border cursor-pointer transition-all ${
                    unitInterest === unit.id
                      ? 'border-[#D52E28] bg-[#D52E28]/5'
                      : 'border-[#2a2a2a] hover:border-white/30'
                  }`}
                >
                  <input
                    type="radio"
                    name="unit_interest"
                    value={unit.id}
                    checked={unitInterest === unit.id}
                    onChange={(e) => setUnitInterest(e.target.value)}
                    className="form-checkbox"
                    required
                  />
                  <span className="text-white/80">{unit.label}</span>
                </label>
              ))}
              <label
                className={`flex items-center gap-3 p-3 border cursor-pointer transition-all ${
                  unitInterest === 'either'
                    ? 'border-[#D52E28] bg-[#D52E28]/5'
                    : 'border-[#2a2a2a] hover:border-white/30'
                }`}
              >
                <input
                  type="radio"
                  name="unit_interest"
                  value="either"
                  checked={unitInterest === 'either'}
                  onChange={(e) => setUnitInterest(e.target.value)}
                  className="form-checkbox"
                />
                <span className="text-white/80">Either (open to both based on availability)</span>
              </label>
            </div>
          </div>
        )}

        {/* ── Personal Information ────────────────────────────── */}
        <SectionDivider title="Personal Information" />

        <div>
          <label htmlFor="applicant_names" className="block text-sm font-medium text-white mb-2">
            Full Name(s) of Applicant(s) <span className="text-[#D52E28]">*</span>
          </label>
          <input
            type="text"
            id="applicant_names"
            value={applicantNames}
            onChange={(e) => setApplicantNames(e.target.value)}
            required
            minLength={2}
            maxLength={120}
            className="form-input"
            placeholder="e.g., John Smith & Jane Smith"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
              Contact Phone Number <span className="text-[#D52E28]">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(formatPhone(e.target.value))}
              required
              className="form-input"
              placeholder="(214) 555-1234"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              Email Address <span className="text-[#D52E28]">*</span>
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
        </div>

        <div>
          <label htmlFor="current_address" className="block text-sm font-medium text-white mb-2">
            Current Residential Address <span className="text-[#D52E28]">*</span>
          </label>
          <textarea
            id="current_address"
            value={currentAddress}
            onChange={(e) => setCurrentAddress(e.target.value)}
            required
            minLength={5}
            maxLength={250}
            rows={2}
            className="form-textarea"
            placeholder="Street, City, State, ZIP"
          />
        </div>

        {/* ── Lease Details ────────────────────────────────────── */}
        <SectionDivider title="Lease Details" />

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="desired_start_date" className="block text-sm font-medium text-white mb-2">
              Desired Lease Start Date <span className="text-[#D52E28]">*</span>
            </label>
            <input
              type="date"
              id="desired_start_date"
              value={desiredStartDate}
              onChange={(e) => setDesiredStartDate(e.target.value)}
              required
              min={today}
              className="form-input"
            />
          </div>

          <div>
            <label htmlFor="lease_duration" className="block text-sm font-medium text-white mb-2">
              Preferred Lease Duration <span className="text-[#D52E28]">*</span>
            </label>
            <select
              id="lease_duration"
              value={leaseDuration}
              onChange={(e) => setLeaseDuration(e.target.value)}
              required
              className="form-select"
            >
              <option value="">Select duration</option>
              {LEASE_DURATIONS.map((d) => (
                <option key={d} value={d}>
                  {d === 'Other' ? 'Other (specify below)' : d}
                </option>
              ))}
            </select>
          </div>
        </div>

        {leaseDuration === 'Other' && (
          <div>
            <label htmlFor="lease_duration_other" className="block text-sm font-medium text-white mb-2">
              Please specify lease duration <span className="text-[#D52E28]">*</span>
            </label>
            <input
              type="text"
              id="lease_duration_other"
              value={leaseDurationOther}
              onChange={(e) => setLeaseDurationOther(e.target.value)}
              required
              className="form-input"
              placeholder="e.g., 18 months, flexible, etc."
            />
          </div>
        )}

        <div>
          <label htmlFor="occupant_count" className="block text-sm font-medium text-white mb-2">
            Number of Occupants (including applicants) <span className="text-[#D52E28]">*</span>
          </label>
          <input
            type="number"
            id="occupant_count"
            value={occupantCount}
            onChange={(e) => setOccupantCount(e.target.value)}
            required
            min={1}
            max={10}
            className="form-input"
            placeholder="e.g., 2"
          />
        </div>

        {/* ── Lifestyle ───────────────────────────────────────── */}
        <SectionDivider title="Lifestyle" />

        <div>
          <label className="block text-sm font-medium text-white mb-3">
            Do you have any pets? <span className="text-[#D52E28]">*</span>
          </label>
          <div className="flex gap-6">
            {['yes', 'no'].map((opt) => (
              <label
                key={opt}
                className={`flex items-center gap-3 px-5 py-3 border cursor-pointer transition-all ${
                  hasPets === opt
                    ? 'border-[#D52E28] bg-[#D52E28]/5'
                    : 'border-[#2a2a2a] hover:border-white/30'
                }`}
              >
                <input
                  type="radio"
                  name="has_pets"
                  value={opt}
                  checked={hasPets === opt}
                  onChange={(e) => setHasPets(e.target.value)}
                  className="form-checkbox"
                  required
                />
                <span className="text-white/80 capitalize">{opt}</span>
              </label>
            ))}
          </div>
        </div>

        {hasPets === 'yes' && (
          <div>
            <label htmlFor="pet_details" className="block text-sm font-medium text-white mb-2">
              Describe your pet(s) — type and weight <span className="text-[#D52E28]">*</span>
            </label>
            <textarea
              id="pet_details"
              value={petDetails}
              onChange={(e) => setPetDetails(e.target.value)}
              required
              minLength={3}
              maxLength={250}
              rows={2}
              className="form-textarea"
              placeholder="e.g., 1 dog, 35 lbs; 2 cats"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-white mb-3">
            Do you smoke (tobacco, vaping, or otherwise) on the premises? <span className="text-[#D52E28]">*</span>
          </label>
          <div className="flex gap-6">
            {['yes', 'no'].map((opt) => (
              <label
                key={opt}
                className={`flex items-center gap-3 px-5 py-3 border cursor-pointer transition-all ${
                  smokesOnPremises === opt
                    ? 'border-[#D52E28] bg-[#D52E28]/5'
                    : 'border-[#2a2a2a] hover:border-white/30'
                }`}
              >
                <input
                  type="radio"
                  name="smokes_on_premises"
                  value={opt}
                  checked={smokesOnPremises === opt}
                  onChange={(e) => setSmokesOnPremises(e.target.value)}
                  className="form-checkbox"
                  required
                />
                <span className="text-white/80 capitalize">{opt}</span>
              </label>
            ))}
          </div>
        </div>

        {/* ── Employment & Financial ──────────────────────────── */}
        <SectionDivider title="Employment & Financial" />

        <div>
          <label className="block text-sm font-medium text-white mb-3">
            Employment Status <span className="text-[#D52E28]">*</span>
            <span className="text-white/40 font-normal ml-2">(select all that apply)</span>
          </label>
          <div className="grid sm:grid-cols-2 gap-3">
            {EMPLOYMENT_OPTIONS.map((option) => (
              <label
                key={option}
                className={`flex items-center gap-3 p-3 border cursor-pointer transition-all ${
                  employmentStatus.includes(option)
                    ? 'border-[#D52E28] bg-[#D52E28]/5'
                    : 'border-[#2a2a2a] hover:border-white/30'
                }`}
              >
                <input
                  type="checkbox"
                  checked={employmentStatus.includes(option)}
                  onChange={() => toggleEmployment(option)}
                  className="form-checkbox"
                />
                <span className="text-white/80">{option === 'Other' ? 'Other (specify below)' : option}</span>
              </label>
            ))}
          </div>
        </div>

        {employmentStatus.includes('Other') && (
          <div>
            <label htmlFor="employment_other" className="block text-sm font-medium text-white mb-2">
              Please specify employment status <span className="text-[#D52E28]">*</span>
            </label>
            <input
              type="text"
              id="employment_other"
              value={employmentOther}
              onChange={(e) => setEmploymentOther(e.target.value)}
              required
              className="form-input"
              placeholder="e.g., freelance consultant, disability, etc."
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-white mb-3">
            Current Credit Score Range (Estimated) <span className="text-[#D52E28]">*</span>
          </label>
          <div className="grid sm:grid-cols-2 gap-3">
            {CREDIT_RANGES.map((range) => (
              <label
                key={range}
                className={`flex items-center gap-3 p-3 border cursor-pointer transition-all ${
                  creditScoreRange === range
                    ? 'border-[#D52E28] bg-[#D52E28]/5'
                    : 'border-[#2a2a2a] hover:border-white/30'
                }`}
              >
                <input
                  type="radio"
                  name="credit_score_range"
                  value={range}
                  checked={creditScoreRange === range}
                  onChange={(e) => setCreditScoreRange(e.target.value)}
                  className="form-checkbox"
                  required
                />
                <span className="text-white/80">{range}</span>
              </label>
            ))}
          </div>
          <p className="text-xs text-white/30 mt-2">
            This is self-reported and used only for pre-screening purposes.
          </p>
        </div>

        <div>
          <label htmlFor="occupation" className="block text-sm font-medium text-white mb-2">
            Occupation / Job Title <span className="text-[#D52E28]">*</span>
          </label>
          <input
            type="text"
            id="occupation"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            required
            className="form-input"
            placeholder="e.g., Software Engineer, Registered Nurse, Business Owner"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-3">
            Combined Gross Monthly Income (all applicants) <span className="text-[#D52E28]">*</span>
          </label>
          <div className="grid sm:grid-cols-2 gap-3">
            {INCOME_RANGES.map((range) => (
              <label
                key={range}
                className={`flex items-center gap-3 p-3 border cursor-pointer transition-all ${
                  grossMonthlyIncome === range
                    ? 'border-[#D52E28] bg-[#D52E28]/5'
                    : 'border-[#2a2a2a] hover:border-white/30'
                }`}
              >
                <input
                  type="radio"
                  name="gross_monthly_income"
                  value={range}
                  checked={grossMonthlyIncome === range}
                  onChange={(e) => setGrossMonthlyIncome(e.target.value)}
                  className="form-checkbox"
                  required
                />
                <span className="text-white/80">{range}</span>
              </label>
            ))}
          </div>
          <p className="text-xs text-white/30 mt-2">
            This is self-reported and used only for pre-screening purposes.
          </p>
        </div>

        {/* ── References ──────────────────────────────────────── */}
        <SectionDivider title="References" />

        <div>
          <label className="block text-sm font-medium text-white mb-3">
            Do you authorize us to contact your previous landlord/employer for a reference check? <span className="text-[#D52E28]">*</span>
          </label>
          <div className="flex gap-6">
            {['yes', 'no'].map((opt) => (
              <label
                key={opt}
                className={`flex items-center gap-3 px-5 py-3 border cursor-pointer transition-all ${
                  referenceConsent === opt
                    ? 'border-[#D52E28] bg-[#D52E28]/5'
                    : 'border-[#2a2a2a] hover:border-white/30'
                }`}
              >
                <input
                  type="radio"
                  name="reference_consent"
                  value={opt}
                  checked={referenceConsent === opt}
                  onChange={(e) => setReferenceConsent(e.target.value)}
                  className="form-checkbox"
                  required
                />
                <span className="text-white/80 capitalize">{opt}</span>
              </label>
            ))}
          </div>
        </div>

        {/* ── Submit ──────────────────────────────────────────── */}
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
          disabled={submitting || employmentStatus.length === 0}
          className="btn-primary w-full justify-center mt-8 disabled:!bg-slate-400 disabled:!text-slate-700 disabled:!border-slate-400 disabled:cursor-not-allowed disabled:hover:transform-none"
        >
          {submitting ? (
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Submitting...
            </span>
          ) : 'Submit Pre-Qualification'}
        </button>

        <div className="space-y-2 mt-4">
          <p className="text-xs text-white/30 text-center">
            Pre-qualification only — a formal application is required for approval.
            Completion of this form does not guarantee approval or reservation of the property.
          </p>
          <p className="text-xs text-white/30 text-center">
            By submitting, you authorize basic follow-up contact regarding your inquiry.
          </p>
          <p className="text-xs text-white/30 text-center">
            We comply with Fair Housing laws. We do not discriminate based on protected classes.
          </p>
        </div>
      </form>
    </div>
  )
}
