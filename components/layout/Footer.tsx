'use client'

import { Github, Linkedin, Mail } from 'lucide-react'
import { personalInfo } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
              <span className="text-purple-400 text-[10px] font-bold font-display">AT</span>
            </div>
            <span className="text-sm text-white/30 font-display">{personalInfo.name}</span>
          </div>

          <p className="text-xs text-white/20">
            {personalInfo.degree} · {personalInfo.college.split(' (')[0]}
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github,   href: personalInfo.github,           label: 'GitHub'   },
              { icon: Linkedin, href: personalInfo.linkedin,         label: 'LinkedIn' },
              { icon: Mail,     href: `mailto:${personalInfo.email}`, label: 'Email'    },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="text-white/25 hover:text-white/50 transition-colors"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
