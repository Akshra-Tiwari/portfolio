'use client'

import { motion } from 'framer-motion'
import { timeline } from '@/lib/data'
import Reveal, { SectionLabel } from '@/components/ui/Reveal'

const typeColors: Record<string, { badge: string; text: string }> = {
  education: { badge: 'bg-blue-500/10 border-blue-500/20 text-blue-400',     text: 'Education'  },
  project:   { badge: 'bg-purple-500/10 border-purple-500/20 text-purple-400', text: 'Project'    },
  learning:  { badge: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400', text: 'Learning' },
  milestone: { badge: 'bg-amber-500/10 border-amber-500/20 text-amber-400',   text: 'Milestone'  },
}

export default function JourneySection() {
  return (
    <section id="journey" className="py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-blue-900/[0.03] blur-[150px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-20">
          <SectionLabel>Journey</SectionLabel>
          <Reveal delay={0.1}>
            <h2 className="section-title text-white mb-4">
              How I got
              <br />
              <span className="text-white/40">here.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-white/50">
              Started from zero in 2024. No prior experience, no bootcamp —
              just curiosity, a lot of documentation, and projects that kept
              getting more ambitious.
            </p>
          </Reveal>
        </div>

        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-[22px] top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/40 via-white/[0.05] to-transparent" />

          <div className="space-y-0">
            {timeline.map((item, i) => {
              const colors = typeColors[item.type]
              return (
                <Reveal key={`${item.year}-${i}`} delay={i * 0.1} direction="left">
                  <div className="relative flex gap-8 pb-12 last:pb-0">
                    {/* Icon dot */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-11 h-11 rounded-xl glass border border-white/[0.1] flex items-center justify-center text-xl">
                        {item.icon}
                      </div>
                    </div>

                    {/* Card */}
                    <motion.div
                      whileHover={{ x: 4, transition: { duration: 0.2 } }}
                      className="flex-1 glass border border-white/[0.07] rounded-2xl p-6 hover:border-white/[0.12] transition-colors"
                    >
                      <div className="flex items-start gap-3 mb-3 flex-wrap">
                        <span className={`text-[10px] font-medium uppercase tracking-widest px-2.5 py-1 rounded-full border ${colors.badge}`}>
                          {colors.text}
                        </span>
                        <span className="text-xs font-mono text-white/30">{item.year}</span>
                      </div>
                      <h3 className="font-semibold text-white font-display mb-0.5">{item.title}</h3>
                      <p className="text-sm text-white/40 mt-0.5 mb-3">{item.subtitle}</p>
                      <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
                    </motion.div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
