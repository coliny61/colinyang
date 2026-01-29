interface TestimonialCardProps {
  quote: string
  author: string
  role?: string
}

export default function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <div className="bg-gray-50 p-6 rounded-xl">
      <svg
        className="h-8 w-8 text-gray-300 mb-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="text-gray-700 mb-4 italic">&ldquo;{quote}&rdquo;</p>
      <div>
        <p className="font-semibold text-black">{author}</p>
        {role && <p className="text-sm text-gray-500">{role}</p>}
      </div>
    </div>
  )
}
