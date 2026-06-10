import Link from 'next/link'

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-6"
      style={{ backgroundColor: '#0a0a0b' }}
    >
      {/* Background dot grid */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />
      {/* Purple glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] rounded-full bg-purple-900/[0.06] blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center">
        <p
          className="text-sm font-medium mb-4 uppercase tracking-widest"
          style={{
            background: 'linear-gradient(135deg, #a78bfa, #7c3aed)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontFamily: 'Syne, sans-serif',
          }}
        >
          404 — Page Not Found
        </p>

        <h1
          className="text-5xl sm:text-7xl font-bold text-white mb-6"
          style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '-0.04em', lineHeight: 0.95 }}
        >
          Oops.
        </h1>

        <p className="text-white/40 mb-10 max-w-sm mx-auto">
          This page doesn&apos;t exist — or it got lost in the event loop. Let&apos;s head back.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium rounded-xl transition-all duration-200 shadow-lg shadow-purple-600/25"
        >
          ← Back to Portfolio
        </Link>
      </div>
    </main>
  )
}
