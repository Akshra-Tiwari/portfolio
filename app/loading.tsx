// This file is automatically shown by Next.js while the page
// is loading on initial navigation. The LoadingScreen component
// (client-side) handles the animated version; this is the
// server-side fallback for Suspense boundaries.

export default function Loading() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: '#0a0a0b' }}
    >
      <div className="flex flex-col items-center gap-5">
        {/* Logo */}
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            background: 'rgba(139,92,246,0.2)',
            border: '1px solid rgba(139,92,246,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'Syne, system-ui, sans-serif',
              fontWeight: 700,
              fontSize: 14,
              background: 'linear-gradient(135deg, #a78bfa, #7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            AT
          </span>
        </div>

        {/* Shimmer bar */}
        <div
          style={{
            width: 160,
            height: 2,
            borderRadius: 1,
            background: 'rgba(255,255,255,0.05)',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.6) 50%, transparent 100%)',
              animation: 'shimmerBar 1.5s ease-in-out infinite',
            }}
          />
        </div>

        <style>{`
          @keyframes shimmerBar {
            0%   { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}</style>
      </div>
    </div>
  )
}
