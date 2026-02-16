import { ImageResponse } from 'next/og'
import { availableListings } from '@/lib/available-listings'

export const runtime = 'edge'
export const alt = 'Available Properties | Colin Yang Real Estate'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const count = availableListings.length

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#0a0a0a',
          position: 'relative',
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            backgroundColor: '#D52E28',
          }}
        />

        {/* Badge */}
        <div
          style={{
            backgroundColor: '#D52E28',
            color: '#ffffff',
            fontSize: 16,
            fontWeight: 700,
            letterSpacing: '4px',
            textTransform: 'uppercase',
            padding: '10px 24px',
            marginBottom: '24px',
          }}
        >
          AVAILABLE PROPERTIES
        </div>

        {/* Count */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: '16px',
          }}
        >
          {count} {count === 1 ? 'Property' : 'Properties'} Available
        </div>

        <div
          style={{
            fontSize: 24,
            color: '#a0a0a0',
            letterSpacing: '3px',
            marginBottom: '24px',
          }}
        >
          Dallas-Fort Worth, Texas
        </div>

        {/* Divider */}
        <div
          style={{
            width: '80px',
            height: '3px',
            backgroundColor: '#D52E28',
            marginBottom: '24px',
          }}
        />

        {/* Listing addresses */}
        <div
          style={{
            fontSize: 20,
            color: '#888888',
            letterSpacing: '1px',
            display: 'flex',
            gap: '24px',
          }}
        >
          {availableListings.map((listing, i) => (
            <span key={listing.slug} style={{ display: 'flex', gap: '24px' }}>
              {i > 0 && <span style={{ color: '#D52E28' }}>|</span>}
              <span>{listing.address}</span>
            </span>
          ))}
        </div>

        {/* Bottom info */}
        <div
          style={{
            position: 'absolute',
            bottom: '32px',
            display: 'flex',
            gap: '32px',
            alignItems: 'center',
          }}
        >
          <div style={{ fontSize: 16, color: '#555555', letterSpacing: '1px' }}>
            Colin Yang
          </div>
          <div style={{ fontSize: 16, color: '#333333' }}>|</div>
          <div style={{ fontSize: 16, color: '#555555', letterSpacing: '1px' }}>
            (469) 256-1088
          </div>
          <div style={{ fontSize: 16, color: '#333333' }}>|</div>
          <div style={{ fontSize: 16, color: '#555555', letterSpacing: '1px' }}>
            colinyang.com/available
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
