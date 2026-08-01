'use client'

import { motion } from 'framer-motion'
import { ExternalLink, TrendingUp, Code2, Trophy } from 'lucide-react'
import { dsaStats } from '@/lib/data'
import Reveal, { SectionLabel } from '@/components/ui/Reveal'

export default function DSASection() {
  const lc = dsaStats.leetcode
  const total = lc.solved

  return (
    <section id="dsa" className="py-28 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full bg-amber-900/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-20">
          <SectionLabel>Problem Solving</SectionLabel>
          <Reveal delay={0.1}>
            <h2 className="section-title text-white mb-4">
              DSA &amp; coding
              <br />
              <span className="text-white/40">practice.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-white/50">
              Consistent practice on LeetCode covering arrays, linked lists, trees,
              recursion, and dynamic programming. 250+ problems and counting.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">

          {/* LeetCode main card */}
          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="glass border border-yellow-500/20 rounded-2xl p-8 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/[0.03] blur-[60px] pointer-events-none" />

              <div className="flex items-start justify-between mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-yellow-500/15 border border-yellow-500/25 flex items-center justify-center">
                      <Code2 size={16} className="text-yellow-400" />
                    </div>
                    <h3 className="font-semibold text-white font-display">LeetCode</h3>
                  </div>
                  <p className="text-sm text-white/40">@{lc.username}</p>
                </div>
                <a
                  href={lc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View LeetCode profile"
                  className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white/70 transition-colors"
                >
                  <span>Profile</span>
                  <ExternalLink size={11} />
                </a>
              </div>

              {/* Big stat */}
              <div className="mb-8">
                <div className="text-6xl font-bold font-display text-white mb-1">
                  {lc.solved}+
                </div>
                <div className="text-sm text-white/40">Problems solved</div>
              </div>

              {/* Difficulty breakdown */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: 'Easy',   value: lc.easy,   color: '#22c55e', pct: Math.round(lc.easy   / total * 100) },
                  { label: 'Medium', value: lc.medium, color: '#f59e0b', pct: Math.round(lc.medium / total * 100) },
                  { label: 'Hard',   value: lc.hard,   color: '#ef4444', pct: Math.round(lc.hard   / total * 100) },
                ].map(diff => (
                  <div key={diff.label} className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-white/40">{diff.label}</span>
                      <span style={{ color: diff.color }}>{diff.value}</span>
                    </div>
                    <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${diff.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: diff.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Note about real stats */}
              <div className="flex items-center gap-2 pt-6 border-t border-white/[0.05]">
                <Trophy size={13} className="text-yellow-400" />
                <span className="text-sm text-white/50">
                  Topics: arrays, strings, linked lists, trees, DP, recursion
                </span>
              </div>
            </div>
          </Reveal>

          {/* Right side stats */}
          <div className="space-y-4">
            {/* Total card */}
            <Reveal delay={0.2}>
              <div
                className="rounded-2xl p-6 border border-purple-500/20"
                style={{ background: 'rgba(139,92,246,0.05)' }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp size={14} className="text-purple-400" />
                  <span className="text-xs text-purple-400/80 uppercase tracking-wider">Total solved</span>
                </div>
                <div className="text-4xl font-bold font-display text-white mb-1">250+</div>
                <div className="text-xs text-white/40">on LeetCode</div>
              </div>
            </Reveal>

            {/* Topics covered */}
            <Reveal delay={0.3}>
              <div className="glass border border-white/[0.07] rounded-2xl p-6">
                <p className="text-xs text-white/30 uppercase tracking-wider mb-4">Topics practiced</p>
                <div className="space-y-2">
                  {[
                    'Arrays & Strings',
                    'Linked Lists',
                    'Trees & Recursion',
                    'Stacks & Queues',
                    'Dynamic Programming',
                  ].map((topic) => (
                    <div key={topic} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500/60 flex-shrink-0" />
                      <span className="text-xs text-white/50">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Profile CTA */}
            <Reveal delay={0.4}>
              <a
                href={lc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full glass border border-white/[0.07] hover:border-yellow-500/30 rounded-2xl p-5 transition-colors group"
              >
                <div>
                  <div className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                    View LeetCode Profile
                  </div>
                  <div className="text-xs text-white/30 mt-0.5">@{lc.username}</div>
                </div>
                <ExternalLink size={15} className="text-white/30 group-hover:text-white/60 transition-colors" />
              </a>
            </Reveal>
          </div>
        </div>

        {/* Topic mastery bars */}
        <Reveal delay={0.3}>
          <div className="glass border border-white/[0.07] rounded-2xl p-8">
            <h3 className="font-semibold text-white font-display mb-6">Topic breakdown</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {dsaStats.topics.map((topic, i) => (
                <motion.div
                  key={topic.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">{topic.name}</span>
                    <span className="font-medium font-mono" style={{ color: topic.color }}>
                      {topic.count}
                    </span>
                  </div>
                  <div className="h-1 bg-white/[0.05] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(topic.count / 90) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: topic.color }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
