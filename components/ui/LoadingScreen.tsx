'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Animate progress bar 0 → 100 over ~1.6s
    const start = performance.now()
    const duration = 1600

    const tick = (now: number) => {
      const elapsed = now - start
      const pct = Math.min(elapsed / duration, 1)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - pct, 3)
      setProgress(Math.round(eased * 100))
      if (pct < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)

    const timer = setTimeout(() => setVisible(false), 1900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ backgroundColor: '#0a0a0b' }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-10 flex flex-col items-center gap-4"
          >
            <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
              <span
                className="text-xl font-bold"
                style={{
                  fontFamily: 'Syne, sans-serif',
                  background: 'linear-gradient(135deg, #a78bfa, #7c3aed)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                AT
              </span>
            </div>
            <span
              className="text-sm font-medium tracking-widest uppercase text-white/30"
              style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '0.2em' }}
            >
              Akshra Tiwari
            </span>
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 h-px bg-white/[0.06] rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #7c3aed, #a78bfa)',
              }}
              transition={{ duration: 0.05 }}
            />
          </div>

          <motion.span
            className="mt-4 text-[11px] font-mono text-white/20"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            {progress}%
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
