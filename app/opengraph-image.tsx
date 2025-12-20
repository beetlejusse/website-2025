import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'IEEE BPIT - Student Branch'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000000',
          backgroundImage: 'linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #16213e 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(0, 98, 155, 0.2) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)',
            display: 'flex',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '30px',
              padding: '20px 40px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              border: '2px solid rgba(0, 255, 255, 0.3)',
            }}
          >
            <span
              style={{
                fontSize: '72px',
                fontWeight: 'bold',
                color: '#00629B',
                letterSpacing: '-2px',
              }}
            >
              IEEE
            </span>
            <span
              style={{
                fontSize: '72px',
                fontWeight: 'bold',
                color: '#00ffff',
                marginLeft: '20px',
                letterSpacing: '-2px',
              }}
            >
              BPIT
            </span>
          </div>

          <div
            style={{
              fontSize: '32px',
              color: '#ffffff',
              marginBottom: '20px',
              fontWeight: '500',
            }}
          >
            Student Branch
          </div>

          <div
            style={{
              fontSize: '24px',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '800px',
              lineHeight: '1.4',
            }}
          >
            Bhagwan Parshuram Institute of Technology, Delhi
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: '40px',
              gap: '20px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px 20px',
                backgroundColor: 'rgba(0, 98, 155, 0.3)',
                borderRadius: '30px',
                border: '1px solid rgba(0, 98, 155, 0.5)',
              }}
            >
              <span style={{ color: '#00ffff', fontSize: '18px' }}>
                Empowering Students Through Technology
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '16px' }}>
            ieeebpit.org
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
