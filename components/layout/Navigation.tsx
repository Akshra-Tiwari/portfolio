'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin } from 'lucide-react'
import { cn } from '@/lib/utils'
import { personalInfo } from '@/lib/data'

const navLinks = [
  { href: '#about',    label: 'About'    },
  { href: '#skills',   label: 'Skills'   },
  { href: '#projects', label: 'Projects' },
  { href: '#journey',  label: 'Journey'  },
  { href: '#dsa',      label: 'DSA'      },
  { href: '#contact',  label: 'Contact'  },
]

export default function Navigation() {
  const [scrolled, setScrolled]       = useState(false)
  const [mobileOpen, setMobileOpen]   = useState(false)
  const [activeSection, setActive]    = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
      const ids = navLinks.map(l => l.href.slice(1)).reverse()
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Skip to main content — accessibility */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-purple-600 focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'glass-strong border-b border-white/[0.06] py-3'
            : 'py-6 bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <motion.a href="#hero" className="flex items-center gap-3 group" whileHover={{ scale: 1.02 }}>
            <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
              <span className="text-purple-400 text-xs font-bold font-display">AT</span>
            </div>
            <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors font-display">
              Akshra Tiwari
            </span>
          </motion.a>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'relative px-4 py-2 text-sm transition-colors rounded-lg',
                  activeSection === link.href.slice(1)
                    ? 'text-white'
                    : 'text-white/50 hover:text-white/80'
                )}
              >
                {activeSection === link.href.slice(1) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 bg-white/[0.07] rounded-lg"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="p-2 text-white/50 hover:text-white/80 transition-colors rounded-lg hover:bg-white/[0.06]"
            >
              <Github size={17} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-2 text-white/50 hover:text-white/80 transition-colors rounded-lg hover:bg-white/[0.06]"
            >
              <Linkedin size={17} />
            </a>
            <a
              href="#contact"
              className="ml-2 px-4 py-2 text-sm font-medium rounded-lg bg-purple-600 hover:bg-purple-500 text-white transition-all duration-200 shadow-lg shadow-purple-600/20"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(o => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[60px] left-0 right-0 z-40 glass-strong border-b border-white/[0.06] py-4 px-6 md:hidden"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-3 mt-3 pt-3 border-t border-white/[0.06]">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 px-4 py-2 text-sm font-medium text-center rounded-lg bg-purple-600 hover:bg-purple-500 text-white transition-colors"
                >
                  Hire Me
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
