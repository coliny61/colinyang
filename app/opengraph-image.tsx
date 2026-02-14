import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Colin Yang - DFW Luxury Real Estate Agent'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
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

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '2px',
              lineHeight: 1.1,
            }}
          >
            COLIN YANG
          </div>

          {/* Divider */}
          <div
            style={{
              width: '80px',
              height: '3px',
              backgroundColor: '#D52E28',
              marginTop: '8px',
              marginBottom: '8px',
            }}
          />

          <div
            style={{
              fontSize: 28,
              color: '#a0a0a0',
              letterSpacing: '6px',
              textTransform: 'uppercase',
            }}
          >
            DFW Luxury Real Estate
          </div>

          <div
            style={{
              fontSize: 18,
              color: '#666666',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginTop: '12px',
            }}
          >
            Bray Real Estate Group
          </div>
        </div>

        {/* Bottom info bar */}
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
            colinyang.com
          </div>
          <div style={{ fontSize: 16, color: '#333333' }}>|</div>
          <div style={{ fontSize: 16, color: '#555555', letterSpacing: '1px' }}>
            (469) 256-1088
          </div>
          <div style={{ fontSize: 16, color: '#333333' }}>|</div>
          <div style={{ fontSize: 16, color: '#555555', letterSpacing: '1px' }}>
            colin@brayreg.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
