'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight, Zap, Check, Pin } from 'lucide-react'
import { projects } from '@/lib/data'
import Reveal, { SectionLabel } from '@/components/ui/Reveal'

export default function ProjectsSection() {
  const [hovered, setHovered] = useState<string | null>(null)

  const pinned   = projects.filter(p => p.pinned)          // Synq
  const featured = projects.filter(p => p.featured && !p.pinned) // FraudSense, CampusShare
  const learning = projects.filter(p => !p.featured)       // SWAN, Lost&Found, Chatify, BubblePop

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-purple-900/[0.03] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <SectionLabel>Projects</SectionLabel>
          <Reveal delay={0.1}>
            <h2 className="section-title text-white mb-4">
              Things I&apos;ve
              <br />
              <span className="text-white/40">shipped.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-white/50">
              Seven projects, all live. Synq is my flagship — the rest show the
              progression from first deployment to full production systems.
            </p>
          </Reveal>
        </div>

        {/* ── PINNED PROJECT — Synq ─────────────────────────────── */}
        {pinned.map(project => (
          <Reveal key={project.id} delay={0.1} className="mb-6">
            <motion.div
              onHoverStart={() => setHovered(project.id)}
              onHoverEnd={() => setHovered(null)}
              className="relative rounded-2xl border overflow-hidden transition-all duration-500"
              style={{
                background: hovered === project.id
                  ? `linear-gradient(135deg, ${project.accentColor} 0%, rgba(255,255,255,0.01) 100%)`
                  : 'rgba(255,255,255,0.025)',
                borderColor: hovered === project.id
                  ? 'rgba(139,92,246,0.4)'
                  : 'rgba(139,92,246,0.2)',
              }}
            >
              {/* Pinned badge */}
              <div className="absolute top-5 right-5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-[10px] font-medium text-purple-400 uppercase tracking-widest z-10">
                <Pin size={9} />
                Main Project
              </div>

              {/* Subtle top-edge glow */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.6), transparent)' }}
              />

              <div className="relative p-8 lg:p-10">
                <div className="grid lg:grid-cols-5 gap-8 items-start">

                  {/* Left */}
                  <div className="lg:col-span-3">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span
                            className="text-[10px] font-medium uppercase tracking-widest px-2.5 py-1 rounded-full border flex items-center gap-1.5"
                            style={{ color: project.color, borderColor: `${project.color}40`, backgroundColor: `${project.color}10` }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                            Live
                          </span>
                          <span className="text-[10px] text-white/30 font-mono">{project.year}</span>
                        </div>
                        <h3 className="text-3xl font-bold font-display text-white mb-1">{project.title}</h3>
                        <p className="text-white/40">{project.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-white/60 text-sm leading-relaxed mb-6">{project.description}</p>

                    {/* Action buttons */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live demo`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white transition-all duration-200 shadow-lg"
                        style={{ backgroundColor: project.color, boxShadow: `0 8px 24px ${project.color}30` }}
                      >
                        <ExternalLink size={15} />
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub repository`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 glass border border-white/[0.1] hover:border-white/[0.2] rounded-xl text-sm font-medium text-white/70 hover:text-white transition-all duration-200"
                      >
                        <Github size={15} />
                        GitHub
                      </a>
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(tech => (
                        <span key={tech} className="text-xs px-2.5 py-1 glass border border-white/[0.08] rounded-lg text-white/50">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: features */}
                  <div className="lg:col-span-2">
                    <div className="glass border border-white/[0.06] rounded-xl p-5">
                      <div className="flex items-center gap-2 mb-4">
                        <Zap size={13} style={{ color: project.color }} />
                        <span className="text-xs font-medium text-white/50 uppercase tracking-wider">What it does</span>
                      </div>
                      <ul className="space-y-3">
                        {project.features.map(feature => (
                          <li key={feature} className="flex items-start gap-3">
                            <div
                              className="w-4 h-4 rounded flex-shrink-0 flex items-center justify-center mt-0.5"
                              style={{ backgroundColor: `${project.color}20` }}
                            >
                              <Check size={9} style={{ color: project.color }} />
                            </div>
                            <span className="text-xs text-white/50 leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}

        {/* ── FEATURED PROJECTS — FraudSense + CampusShare ─────── */}
        <div className="space-y-5 mb-16">
          {featured.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 0.12 + 0.1}>
              <motion.div
                onHoverStart={() => setHovered(project.id)}
                onHoverEnd={() => setHovered(null)}
                className="relative rounded-2xl border overflow-hidden transition-all duration-500"
                style={{
                  background: hovered === project.id
                    ? `linear-gradient(135deg, ${project.accentColor} 0%, rgba(255,255,255,0.01) 100%)`
                    : 'rgba(255,255,255,0.02)',
                  borderColor: hovered === project.id ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.07)',
                }}
              >
                <div className="relative p-8 lg:p-10">
                  <div className="grid lg:grid-cols-5 gap-8 items-start">

                    <div className="lg:col-span-3">
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span
                              className="text-[10px] font-medium uppercase tracking-widest px-2.5 py-1 rounded-full border flex items-center gap-1.5"
                              style={{ color: project.color, borderColor: `${project.color}40`, backgroundColor: `${project.color}10` }}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-current" />
                              Live
                            </span>
                            <span className="text-[10px] text-white/30 font-mono">{project.year}</span>
                          </div>
                          <h3 className="text-2xl font-bold font-display text-white mb-1">{project.title}</h3>
                          <p className="text-sm text-white/40">{project.subtitle}</p>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} GitHub`}
                            className="w-9 h-9 glass border border-white/[0.1] rounded-xl flex items-center justify-center text-white/50 hover:text-white transition-colors"
                          >
                            <Github size={16} />
                          </a>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} live demo`}
                            className="w-9 h-9 rounded-xl flex items-center justify-center text-white transition-colors"
                            style={{ backgroundColor: project.color }}
                          >
                            <ExternalLink size={15} />
                          </a>
                        </div>
                      </div>

                      <p className="text-white/55 text-sm leading-relaxed mb-6">{project.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map(tech => (
                          <span key={tech} className="text-xs px-2.5 py-1 glass border border-white/[0.08] rounded-lg text-white/50">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-2">
                      <div className="glass border border-white/[0.06] rounded-xl p-5">
                        <div className="flex items-center gap-2 mb-4">
                          <Zap size={13} style={{ color: project.color }} />
                          <span className="text-xs font-medium text-white/50 uppercase tracking-wider">What it does</span>
                        </div>
                        <ul className="space-y-3">
                          {project.features.map(feature => (
                            <li key={feature} className="flex items-start gap-3">
                              <div
                                className="w-4 h-4 rounded flex-shrink-0 flex items-center justify-center mt-0.5"
                                style={{ backgroundColor: `${project.color}20` }}
                              >
                                <Check size={9} style={{ color: project.color }} />
                              </div>
                              <span className="text-xs text-white/50 leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group mt-5 flex items-center justify-between w-full px-4 py-3 rounded-lg text-xs font-medium text-white/70 hover:text-white transition-colors border border-white/[0.08] hover:border-white/[0.18]"
                        >
                          <span>Open Live Demo</span>
                          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* ── EARLIER PROJECTS ─────────────────────────────────── */}
        <Reveal delay={0.1}>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-white/[0.05]" />
            <span className="text-xs text-white/25 uppercase tracking-widest">Earlier projects</span>
            <div className="h-px flex-1 bg-white/[0.05]" />
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {learning.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 0.08}>
              <motion.div
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="glass border border-white/[0.07] rounded-2xl p-5 hover:border-white/[0.13] transition-colors h-full flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-[10px] font-mono text-white/25 block mb-1">{project.year}</span>
                    <h3 className="font-semibold text-white font-display text-sm">{project.title}</h3>
                    <p className="text-[11px] text-white/35 mt-0.5">{project.subtitle}</p>
                  </div>
                  <div className="flex gap-1.5 flex-shrink-0">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub`}
                      className="w-7 h-7 glass border border-white/[0.08] rounded-lg flex items-center justify-center text-white/40 hover:text-white transition-colors"
                    >
                      <Github size={12} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} demo`}
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-white transition-colors"
                      style={{ backgroundColor: `${project.color}90` }}
                    >
                      <ExternalLink size={11} />
                    </a>
                  </div>
                </div>

                <p className="text-[11px] text-white/40 leading-relaxed mb-3 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map(tech => (
                    <span key={tech} className="text-[9px] px-2 py-0.5 glass border border-white/[0.06] rounded text-white/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* GitHub CTA */}
        <Reveal delay={0.3} className="mt-12 text-center">
          <a
            href="https://github.com/Akshra-Tiwari"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors group"
          >
            <Github size={16} />
            <span>All repositories on GitHub</span>
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
