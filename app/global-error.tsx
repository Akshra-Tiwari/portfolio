'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log to your error reporting service here
    console.error('[GlobalError]', error)
  }, [error])

  return (
    <html lang="en">
      <body
        style={{
          backgroundColor: '#0a0a0b',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          fontFamily: 'system-ui, sans-serif',
          color: 'white',
          margin: 0,
        }}
      >
        <div style={{ textAlign: 'center', padding: '0 24px' }}>
          <p
            style={{
              fontSize: '12px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#a78bfa',
              marginBottom: '16px',
            }}
          >
            Something went wrong
          </p>
          <h2
            style={{
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              fontWeight: 800,
              marginBottom: '12px',
              letterSpacing: '-0.04em',
            }}
          >
            Unexpected error
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '32px', maxWidth: 400 }}>
            {error.digest
              ? `Error ID: ${error.digest}`
              : 'An unexpected error occurred. Refreshing usually fixes this.'}
          </p>
          <button
            onClick={reset}
            style={{
              padding: '12px 24px',
              background: '#7c3aed',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
