import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Info */}
          <div className="md:col-span-2">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/65abf6f1bf81c02e7cbd3cb1/aeed104a-a804-42e3-914b-285974b4dffc/white+long+logo+new.png"
              alt="Colin Yang"
              width={200}
              height={50}
              className="mb-4"
            />
            <p className="text-gray-400 mb-4">
              Colin Yang<br />
              Dallas - Fort Worth<br />
              Real Estate Expert
            </p>
            <p className="text-sm text-gray-500">
              License #815417
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/new-client-inquiry" className="block text-gray-400 hover:text-white transition-colors">
                New Client Inquiry
              </Link>
              <Link href="/apartment-locating" className="block text-gray-400 hover:text-white transition-colors">
                Apartment Locating
              </Link>
              <Link href="/about-colin" className="block text-gray-400 hover:text-white transition-colors">
                About Colin
              </Link>
              <Link href="/portfolio" className="block text-gray-400 hover:text-white transition-colors">
                Portfolio
              </Link>
              <Link href="/land-farm-ranch" className="block text-gray-400 hover:text-white transition-colors">
                Land, Farm & Ranch
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>
                <a href="tel:4692561088" className="hover:text-white transition-colors">
                  (469) 256-1088
                </a>
              </p>
              <p>
                <a href="mailto:colin@hugginsrealty.com" className="hover:text-white transition-colors">
                  colin@hugginsrealty.com
                </a>
              </p>
              <a
                href="https://www.instagram.com/bundlbook/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 hover:text-white transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>@bundlbook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/65abf6f1bf81c02e7cbd3cb1/a3788cfe-5c41-44a3-a189-a7abb23f30ce/realtor+and+equal+logo.png"
                alt="REALTOR and Equal Housing"
                width={100}
                height={40}
                className="brightness-0 invert"
              />
            </div>
            <p className="text-gray-500 text-sm text-center">
              &copy; {new Date().getFullYear()} Colin Yang. All rights reserved.
            </p>
          </div>
          <div className="mt-4 text-center text-xs text-gray-600">
            <p className="mb-2">
              All information is deemed reliable but not guaranteed and should be independently reviewed and verified.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.trec.texas.gov/forms/consumer-protection-notice"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                TREC Consumer Protection Notice
              </a>
              <a
                href="https://www.trec.texas.gov/forms/information-about-brokerage-services"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                Information About Brokerage Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
