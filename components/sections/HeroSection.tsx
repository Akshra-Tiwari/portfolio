'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Sparkles, Code2 } from 'lucide-react'
import MagneticButton from '@/components/ui/MagneticButton'
import { useTypewriter } from '@/hooks/useTypewriter'
import { personalInfo } from '@/lib/data'

const floatingBadges = [
  { label: 'React',      icon: '⚛️', delay: 0.0, x: -185, y: -95  },
  { label: 'Next.js',    icon: '▲',  delay: 0.3, x:  185, y: -75  },
  { label: 'Node.js',    icon: '🟢', delay: 0.6, x: -165, y:  115 },
  { label: 'MongoDB',    icon: '🍃', delay: 0.9, x:  170, y:  105 },
]

const roleWords = [
  'Full Stack Developer',
  'React Developer',
  'Node.js Developer',
  'MERN Stack Developer',
]

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 40, damping: 18 })
  const springY = useSpring(mouseY, { stiffness: 40, damping: 18 })
  // Track whether we are on the client — used only for mouse-parallax, NOT for
  // hiding the section (avoids the blank SSR flash bug from the audit).
  const [isClient, setIsClient] = useState(false)
  const [glowPos, setGlowPos] = useState({ x: '50%', y: '40%' })

  const { text: roleText, isTyping } = useTypewriter({
    words: roleWords,
    typingSpeed: 70,
    deletingSpeed: 40,
    pauseDuration: 2200,
  })

  useEffect(() => {
    setIsClient(true)
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      mouseX.set((e.clientX - cx) / 35)
      mouseY.set((e.clientY - cy) / 35)
      setGlowPos({
        x: `${(e.clientX / window.innerWidth) * 100}%`,
        y: `${(e.clientY / window.innerHeight) * 100}%`,
      })
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      {/* Mouse-tracking glow — only rendered client-side, section itself always renders */}
      {isClient && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 700px 500px at ${glowPos.x} ${glowPos.y}, rgba(139,92,246,0.07) 0%, transparent 70%)`,
          }}
        />
      )}

      {/* Static ambient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-purple-600/[0.04] blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-[15%] w-[350px] h-[350px] rounded-full bg-violet-800/[0.05] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* ── LEFT: copy ──────────────────────────────────────────── */}
          <div className="flex-1 text-center lg:text-left">

            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/[0.08] text-xs text-white/60 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Open to internships &amp; opportunities</span>
              <Sparkles size={11} className="text-purple-400" />
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="hero-title text-white mb-4"
            >
              <span className="block">Akshra</span>
              <span
                className="block"
                style={{
                  background: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 50%, #c4b5fd 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Tiwari
              </span>
            </motion.h1>

            {/* Animated role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex items-center gap-3 justify-center lg:justify-start mb-6"
            >
              <div className="h-px w-8 bg-purple-500/60" />
              <span className="text-sm font-medium text-purple-400 tracking-widest uppercase font-display min-w-[240px]">
                {roleText}
                <span
                  className="inline-block w-px h-[1em] bg-purple-400 ml-0.5 align-middle"
                  style={{ opacity: isTyping ? 1 : 0, transition: 'opacity 0.1s' }}
                />
              </span>
              <div className="h-px w-8 bg-purple-500/60" />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="hero-subtitle text-white/50 max-w-lg mb-10"
            >
              CS undergrad at <span className="text-white/75">RGPV</span> building
              full-stack web apps with React, Node.js, and a bit of machine learning.
              Started coding in 2024 — shipped 5 projects since.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap items-center gap-4 justify-center lg:justify-start mb-12"
            >
              <MagneticButton
                as="a"
                href="#projects"
                className="group flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium rounded-xl transition-all duration-200 shadow-lg shadow-purple-600/25 hover:shadow-purple-500/35"
              >
                <Code2 size={16} />
                View Projects
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </MagneticButton>

              <MagneticButton
                as="a"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 glass border border-white/[0.1] hover:border-white/[0.22] text-white/80 hover:text-white text-sm font-medium rounded-xl transition-all duration-200"
              >
                <Download size={16} />
                Resume
              </MagneticButton>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex items-center gap-5 justify-center lg:justify-start"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex items-center gap-2 text-white/40 hover:text-white/80 transition-colors"
              >
                <Github size={17} />
                <span className="text-xs">GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex items-center gap-2 text-white/40 hover:text-white/80 transition-colors"
              >
                <Linkedin size={17} />
                <span className="text-xs">LinkedIn</span>
              </a>
              <div className="h-px w-8 bg-white/10" />
              <span className="text-xs text-white/25">{personalInfo.location}</span>
            </motion.div>
          </div>

          {/* ── RIGHT: profile photo ─────────────────────────────────── */}
          <div className="flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={isClient ? { x: springX, y: springY } : {}}
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-purple-500/10 blur-2xl scale-125 pointer-events-none" />

              <div className="relative w-72 h-72 lg:w-80 lg:h-80">
                {/* Spinning ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      'conic-gradient(from 0deg, rgba(139,92,246,0.9) 0%, transparent 45%, rgba(139,92,246,0.9) 100%)',
                    padding: '1.5px',
                    borderRadius: '50%',
                    WebkitMask:
                      'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />

                {/* Photo */}
                <div className="absolute inset-[3px] rounded-full overflow-hidden border border-white/[0.08]">
                  <Image
                    src="/akshra.png"
                    alt="Akshra Tiwari"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 768px) 288px, 320px"
                  />
                </div>

                {/* Floating tech badges — hidden on mobile via CSS */}
                {floatingBadges.map(badge => (
                  <motion.div
                    key={badge.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + badge.delay, type: 'spring', bounce: 0.45 }}
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      x: badge.x,
                      y: badge.y,
                    }}
                    className="hidden lg:flex glass border border-white/[0.1] rounded-full px-3 py-1.5 items-center gap-1.5 text-xs text-white/70 whitespace-nowrap"
                  >
                    <span>{badge.icon}</span>
                    <span className="font-medium">{badge.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                className="mt-6 grid grid-cols-3 gap-3"
              >
                {[
                  { value: '5',    label: 'Projects' },
                  { value: '250+', label: 'LC Solved' },
                  { value: '2027', label: 'Grad year' },
                ].map(stat => (
                  <div
                    key={stat.label}
                    className="glass border border-white/[0.07] rounded-xl p-3 text-center"
                  >
                    <div className="text-lg font-bold font-display text-white">{stat.value}</div>
                    <div className="text-[10px] text-white/40 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-white/25 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-white/25 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
