import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Colin Yang - Dallas Fort Worth Real Estate Agent',
  description: 'Colin Yang is a dedicated real estate professional in DFW committed to building lasting relationships through transparency. Property search, apartment locating, and property valuation services. Bilingual in Chinese and English.',
  keywords: ['real estate', 'Dallas', 'Fort Worth', 'DFW', 'Texas', 'realtor', 'apartment locating', 'Colin Yang', 'Frisco', 'property search'],
  authors: [{ name: 'Colin Yang' }],
  openGraph: {
    title: 'Colin Yang - Dallas Fort Worth Real Estate Agent',
    description: 'Dedicated real estate professional in DFW. Property search, apartment locating, and property valuation services.',
    url: 'https://colinyang.com',
    siteName: 'Colin Yang Real Estate',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Colin Yang - DFW Real Estate Agent',
    description: 'Dedicated real estate professional in Dallas-Fort Worth.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
