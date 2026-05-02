import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'For Sale: 2609 Holland Ct, Celina TX — $529,900'
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

        <div
          style={{
            display: 'flex',
            gap: '12px',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              backgroundColor: '#D52E28',
              color: '#ffffff',
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: '4px',
              textTransform: 'uppercase',
              padding: '10px 24px',
            }}
          >
            FOR SALE
          </div>
          <div
            style={{
              backgroundColor: 'transparent',
              color: '#ffffff',
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              padding: '10px 24px',
              border: '2px solid #ffffff',
            }}
          >
            OPEN HOUSE · MAY 2 &amp; 3
          </div>
        </div>

        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '1px',
            lineHeight: 1.1,
            marginBottom: '12px',
          }}
        >
          2609 Holland Court
        </div>

        <div
          style={{
            fontSize: 40,
            fontWeight: 700,
            color: '#D52E28',
            letterSpacing: '2px',
            marginBottom: '16px',
          }}
        >
          $529,900
        </div>

        <div
          style={{
            fontSize: 22,
            color: '#a0a0a0',
            letterSpacing: '3px',
            marginBottom: '24px',
          }}
        >
          Celina, TX 75009 · Cambridge Crossing
        </div>

        <div
          style={{
            width: '80px',
            height: '3px',
            backgroundColor: '#D52E28',
            marginBottom: '24px',
          }}
        />

        <div
          style={{
            fontSize: 22,
            color: '#ffffff',
            letterSpacing: '2px',
            marginBottom: '16px',
            display: 'flex',
            gap: '16px',
          }}
        >
          <span>4 Bed</span>
          <span style={{ color: '#D52E28' }}>|</span>
          <span>3 Bath</span>
          <span style={{ color: '#D52E28' }}>|</span>
          <span>2,297 Sqft</span>
          <span style={{ color: '#D52E28' }}>|</span>
          <span>2-Car Garage</span>
        </div>

        <div
          style={{
            fontSize: 18,
            color: '#D52E28',
            fontWeight: 600,
            letterSpacing: '2px',
            marginTop: '8px',
          }}
        >
          Highland Homes · California Closets · Built 2023
        </div>

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
            colinyang.com/holland-ct
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
