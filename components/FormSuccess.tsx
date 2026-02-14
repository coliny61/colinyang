export default function FormSuccess({
  title = 'Thank you!',
  message = "We'll review your information and get back to you soon.",
}: {
  title?: string
  message?: string
}) {
  return (
    <div className="bg-[#141414] border border-[#2a2a2a] p-8 md:p-10 text-center">
      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#D52E28]/10 flex items-center justify-center">
        <svg className="w-8 h-8 text-[#D52E28]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="text-2xl text-white font-semibold mb-3">{title}</h2>
      <p className="text-white/70 mb-6">{message}</p>
      <a href="tel:4692561088" className="btn-secondary inline-flex items-center gap-2">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        (469) 256-1088
      </a>
    </div>
  )
}
