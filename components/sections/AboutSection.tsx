'use client'

import { motion } from 'framer-motion'
import { Layers, Zap, Heart, Target } from 'lucide-react'
import Reveal, { SectionLabel, StaggerContainer, staggerItem } from '@/components/ui/Reveal'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { personalInfo } from '@/lib/data'

const traits = [
  {
    icon: Layers,
    title: 'Full-Stack Mindset',
    description: 'I work across the entire stack — React frontends, Node.js APIs, MongoDB databases. No hand-offs, no silos.',
    color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20',
  },
  {
    icon: Zap,
    title: 'Fast Learner',
    description: 'Started coding in early 2024. By the end of the year I had shipped 5 projects including an ML-integrated fraud detection platform.',
    color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20',
  },
  {
    icon: Heart,
    title: 'Care About UX',
    description: "I don't just make things that work — I make things that feel good to use. Responsive, accessible, and visually considered.",
    color: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/20',
  },
  {
    icon: Target,
    title: 'Problem First',
    description: 'Every project starts with a real problem. Lost & Found was a campus pain point. FraudSense came from exploring how ML fits into real backends.',
    color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20',
  },
]

const stats = [
  { target: 5,    suffix: '',   label: 'Projects Shipped',  sub: 'all live & deployed' },
  { target: 250,  suffix: '+',  label: 'DSA Problems',      sub: 'solved on LeetCode' },
  { target: 7,    suffix: '.6', label: 'CGPA',              sub: 'B.Tech CSE, RGPV' },
  { target: 2027, suffix: '',   label: 'Graduating',        sub: 'Computer Science' },
]

const story = [
  {
    year: '2023',
    text: `Joined RGPV for B.Tech in Computer Science. Got introduced to programming fundamentals — C, data structures, algorithms — and realised I wanted to build things, not just study them.`,
  },
  {
    year: '2024',
    text: 'Picked up JavaScript, then React, then Node.js — all in the span of a few months. Deployed my first projects: Bubble Pop (vanilla JS), Chatify (Socket.io), Lost & Found (full MERN). Each one taught me something new.',
  },
  {
    year: '2024',
    text: 'Levelled up significantly with S.W.A.N. Protocol — a Next.js environmental monitoring platform with Cloudinary, Firebase auth, geolocation, and AI-powered summarization. First time working with cloud services at this scale.',
  },
  {
    year: '2025',
    text: 'Built FraudSense AI — a fraud detection platform integrating a Python Flask ML microservice with a MERN backend. First real experience combining machine learning with a production web application.',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 section-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <SectionLabel>About Me</SectionLabel>
          <Reveal delay={0.1}>
            <h2 className="section-title text-white mb-6">
              One year of coding.
              <br />
              <span className="text-white/40">Five shipped projects.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-white/50 leading-relaxed">
              {personalInfo.bio}
            </p>
          </Reveal>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-5 gap-12 items-start mb-20">
          {/* Story timeline */}
          <div className="lg:col-span-3 space-y-0">
            {story.map((item, i) => (
              <Reveal key={`${item.year}-${i}`} delay={i * 0.1}>
                <div className="flex gap-5 pb-10 last:pb-0">
                  <div className="flex-shrink-0 pt-1 w-14 text-right">
                    <span className="text-xs font-mono text-purple-500/70 font-medium">{item.year}</span>
                  </div>
                  <div className="flex flex-col items-center pt-1 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-purple-500/60" />
                    {i < story.length - 1 && <div className="w-px flex-1 bg-white/[0.05] mt-2" />}
                  </div>
                  <p className="text-white/55 text-sm leading-relaxed pt-0.5">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Stats + currently card */}
          <div className="lg:col-span-2">
            <StaggerContainer className="grid grid-cols-2 gap-3" stagger={0.08} delay={0.2}>
              {stats.map(stat => (
                <motion.div
                  key={stat.label}
                  variants={staggerItem}
                  className="glass border border-white/[0.07] rounded-2xl p-5 hover:border-purple-500/20 transition-colors"
                >
                  <div className="text-3xl font-bold font-display text-white mb-1">
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} duration={1400} />
                  </div>
                  <div className="text-xs font-medium text-white/60 mb-0.5">{stat.label}</div>
                  <div className="text-xs text-white/30">{stat.sub}</div>
                </motion.div>
              ))}
            </StaggerContainer>

            <Reveal delay={0.5} className="mt-4">
              <div className="glass border border-white/[0.07] rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-white/40 uppercase tracking-wider">Right now</span>
                </div>
                <div className="space-y-2">
                  {[
                    { emoji: '🎓', text: 'B.Tech CSE @ RGPV (2023–2027)' },
                    { emoji: '🔨', text: 'Improving FraudSense AI' },
                    { emoji: '🎯', text: 'Seeking SWE internships' },
                  ].map(item => (
                    <div key={item.text} className="flex items-center gap-2 text-sm text-white/50">
                      <span>{item.emoji}</span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Trait cards */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" stagger={0.1} delay={0.1}>
          {traits.map(trait => {
            const Icon = trait.icon
            return (
              <motion.div
                key={trait.title}
                variants={staggerItem}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`glass border ${trait.border} rounded-2xl p-6 cursor-default`}
              >
                <div className={`w-10 h-10 rounded-xl ${trait.bg} border ${trait.border} flex items-center justify-center mb-4`}>
                  <Icon size={18} className={trait.color} />
                </div>
                <h3 className="font-semibold text-white text-sm mb-2 font-display">{trait.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{trait.description}</p>
              </motion.div>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
