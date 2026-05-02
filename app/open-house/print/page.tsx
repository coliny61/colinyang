import { Metadata } from 'next'
import QRPrintBlock from './QRPrintBlock'

export const metadata: Metadata = {
  title: 'Open House QR Code (Print) | Colin Yang',
  robots: { index: false, follow: false },
}

export default function OpenHousePrintPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] print:bg-white">
      <div className="section">
        <QRPrintBlock />
      </div>
    </div>
  )
}
