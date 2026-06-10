'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skills } from '@/lib/data'
import Reveal, { SectionLabel } from '@/components/ui/Reveal'
import Marquee from '@/components/ui/Marquee'
import type { Skill } from '@/types'

const categories = ['All', 'Frontend', 'Backend', 'Language', 'Database', 'Styling'] as const
type Category = (typeof categories)[number]

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')

  const filtered: Skill[] =
    activeCategory === 'All'
      ? skills
      : skills.filter(s => s.category === activeCategory)

  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-900/[0.04] blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <SectionLabel>Technical Skills</SectionLabel>
          <Reveal delay={0.1}>
            <h2 className="section-title text-white mb-4">
              What I build
              <br />
              <span className="text-white/40">with.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-white/50">
              My stack is MERN-first with Next.js for full-stack projects and Python
              for ML integrations. Everything below I&apos;ve used in a shipped project.
            </p>
          </Reveal>
        </div>

        {/* Filter pills */}
        <Reveal delay={0.3} className="mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileTap={{ scale: 0.96 }}
                className={[
                  'px-4 py-2 text-xs font-medium rounded-lg transition-all duration-200',
                  activeCategory === cat
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/20'
                    : 'glass border border-white/[0.08] text-white/50 hover:text-white/80 hover:border-white/[0.15]',
                ].join(' ')}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </Reveal>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {filtered.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="relative glass border border-white/[0.07] rounded-2xl p-6 cursor-default overflow-hidden group"
              >
                {/* Hover tint */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${skill.color}15 0%, transparent 70%)` }}
                />

                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-lg border border-white/[0.08] font-bold"
                    style={{ backgroundColor: `${skill.color}18`, color: skill.color }}
                  >
                    {skill.icon.length <= 2 ? (
                      <span style={{ fontSize: '13px' }}>{skill.icon}</span>
                    ) : (
                      <span>{skill.icon}</span>
                    )}
                  </div>
                  <span className="text-[10px] text-white/30 bg-white/[0.04] border border-white/[0.06] rounded-full px-2.5 py-1 uppercase tracking-wider">
                    {skill.category}
                  </span>
                </div>

                <h3 className="font-semibold text-white mb-1 font-display">{skill.name}</h3>
                <p className="text-xs text-white/35 mb-5 leading-relaxed line-clamp-2">{skill.description}</p>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-white/30 uppercase tracking-wider">Proficiency</span>
                    <span className="text-xs font-mono font-medium" style={{ color: skill.color }}>{skill.level}%</span>
                  </div>
                  <div className="h-[3px] bg-white/[0.06] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: i * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Ticker */}
        <Reveal delay={0.4} className="mt-20">
          <Marquee speed={40} pauseOnHover fadeEdges className="py-3">
            {skills.map(skill => (
              <div
                key={skill.name}
                className="mx-3 flex items-center gap-2 px-4 py-2 glass border border-white/[0.06] rounded-full text-xs text-white/30 hover:text-white/60 transition-colors cursor-default"
              >
                <span>{skill.icon}</span>
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </Marquee>
        </Reveal>
      </div>
    </section>
  )
}
