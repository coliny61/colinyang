import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://colinyang.com'),
  title: {
    default: 'Colin Yang | Dallas-Fort Worth Luxury Real Estate Agent',
    template: '%s | Colin Yang Real Estate',
  },
  description: 'Colin Yang is a bilingual luxury real estate agent serving Dallas-Fort Worth. Specializing in residential, investment properties, and relocation services. Licensed Texas REALTOR® with Bray Real Estate Group.',
  keywords: [
    'Dallas real estate agent',
    'Fort Worth realtor',
    'DFW homes for sale',
    'luxury homes Dallas',
    'bilingual realtor Texas',
    'Bray Real Estate Group',
    'Colin Yang realtor',
    'Dallas luxury real estate',
    'DFW investment properties',
    'Texas relocation services',
    'Frisco real estate',
    'McKinney homes',
    'Plano realtor',
  ],
  authors: [{ name: 'Colin Yang', url: 'https://colinyang.com' }],
  creator: 'Colin Yang',
  publisher: 'Colin Yang Real Estate',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Colin Yang | DFW Luxury Real Estate Agent',
    description: 'Your trusted bilingual real estate expert in Dallas-Fort Worth. Specializing in luxury homes, investment properties, and seamless relocations.',
    url: 'https://colinyang.com',
    siteName: 'Colin Yang Real Estate',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/colin-headshot.jpg',
        width: 800,
        height: 600,
        alt: 'Colin Yang - Dallas Fort Worth Real Estate Agent',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Colin Yang | DFW Luxury Real Estate',
    description: 'Bilingual luxury real estate agent in Dallas-Fort Worth.',
    images: ['/images/colin-headshot.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  category: 'real estate',
  alternates: {
    canonical: 'https://colinyang.com',
  },
}

// JSON-LD Structured Data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Colin Yang',
  description: 'Bilingual luxury real estate agent serving Dallas-Fort Worth',
  url: 'https://colinyang.com',
  telephone: '+1-469-256-1088',
  email: 'colin@brayreg.com',
  image: 'https://colinyang.com/images/colin-headshot.jpg',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dallas',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 32.7767,
      longitude: -96.7970,
    },
    geoRadius: '50000',
  },
  knowsLanguage: ['English', 'Chinese'],
  worksFor: {
    '@type': 'RealEstateAgent',
    name: 'Bray Real Estate Group',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3130 Harvard Ave, Ste. B',
      addressLocality: 'Dallas',
      addressRegion: 'TX',
      postalCode: '75205',
      addressCountry: 'US',
    },
  },
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'license',
    name: 'Texas Real Estate License',
    recognizedBy: {
      '@type': 'Organization',
      name: 'Texas Real Estate Commission',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#0a0a0a]">
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
