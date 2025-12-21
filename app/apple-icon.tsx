import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 100,
          background: 'linear-gradient(135deg, #00629B 0%, #004d7a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '36px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <span style={{ marginTop: '-10px' }}>I</span>
      </div>
    ),
    {
      ...size,
    }
  )
}
