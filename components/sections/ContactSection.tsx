'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Send, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react'
import Reveal, { SectionLabel } from '@/components/ui/Reveal'
import { Input, Textarea } from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { personalInfo } from '@/lib/data'
import type { ContactFormData } from '@/types'

type Status = 'idle' | 'sending' | 'sent' | 'error'
const initialForm: ContactFormData = { name: '', email: '', message: '' }

export default function ContactSection() {
  const [form, setForm] = useState<ContactFormData>(initialForm)
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [fieldErrors, setFieldErrors] = useState<Partial<ContactFormData>>({})

  function validate(): boolean {
    const errors: Partial<ContactFormData> = {}
    if (!form.name.trim() || form.name.trim().length < 2)
      errors.name = 'Name must be at least 2 characters.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errors.email = 'Please enter a valid email address.'
    if (!form.message.trim() || form.message.trim().length < 10)
      errors.message = 'Message must be at least 10 characters.'
    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? 'Something went wrong.')
      setStatus('sent')
      setForm(initialForm)
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err: unknown) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send. Please try again.')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  function handleChange(field: keyof ContactFormData, value: string) {
    setForm(f => ({ ...f, [field]: value }))
    if (fieldErrors[field]) setFieldErrors(fe => ({ ...fe, [field]: undefined }))
  }

  const socials = [
    {
      icon: Github,
      label: 'GitHub',
      handle: '@Akshra-Tiwari',
      href: personalInfo.github,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      handle: 'akshra-tiwari',
      href: personalInfo.linkedin,
    },
  ]

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-purple-900/[0.05] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-20">
          <SectionLabel>Contact</SectionLabel>
          <Reveal delay={0.1}>
            <h2 className="section-title text-white mb-4">
              Let&apos;s work
              <br />
              <span className="text-white/40">together.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-white/50">
              I&apos;m actively looking for software development internship opportunities.
              If you&apos;re hiring or want to collaborate on something — reach out.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* Form */}
          <Reveal delay={0.15} className="lg:col-span-3">
            <div className="glass border border-white/[0.07] rounded-2xl p-8">
              <AnimatePresence mode="wait">

                {status === 'sent' && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-14"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 size={28} className="text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-semibold font-display text-white mb-2">Message sent!</h3>
                    <p className="text-white/50 text-sm">I&apos;ll get back to you within 24 hours.</p>
                  </motion.div>
                )}

                {status !== 'sent' && (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-5"
                  >
                    {status === 'error' && (
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-rose-500/10 border border-rose-500/25">
                        <AlertCircle size={16} className="text-rose-400 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-rose-300">{errorMsg}</p>
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-5">
                      <Input
                        label="Name"
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={e => handleChange('name', e.target.value)}
                        error={fieldErrors.name}
                        autoComplete="name"
                        required
                      />
                      <Input
                        label="Email"
                        type="email"
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={e => handleChange('email', e.target.value)}
                        error={fieldErrors.email}
                        autoComplete="email"
                        required
                      />
                    </div>

                    <Textarea
                      label="Message"
                      placeholder="Tell me about the role, project, or opportunity…"
                      value={form.message}
                      onChange={e => handleChange('message', e.target.value)}
                      error={fieldErrors.message}
                      rows={5}
                      required
                    />

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      loading={status === 'sending'}
                      icon={<Send size={15} />}
                      iconPosition="left"
                    >
                      {status === 'sending' ? 'Sending…' : 'Send Message'}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>

          {/* Right side */}
          <div className="lg:col-span-2 space-y-4">

            {/* Availability + contact info */}
            <Reveal delay={0.25}>
              <div className="glass border border-white/[0.07] rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sm text-white/60">Open to opportunities</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center flex-shrink-0">
                      <Mail size={14} className="text-white/40" />
                    </div>
                    <div>
                      <div className="text-xs text-white/30 mb-0.5">Email</div>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-sm text-white/70 hover:text-white transition-colors break-all"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center flex-shrink-0">
                      <MapPin size={14} className="text-white/40" />
                    </div>
                    <div>
                      <div className="text-xs text-white/30 mb-0.5">Location</div>
                      <span className="text-sm text-white/70">{personalInfo.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Social links */}
            <Reveal delay={0.35}>
              <div className="glass border border-white/[0.07] rounded-2xl p-6">
                <p className="text-xs text-white/30 uppercase tracking-wider mb-4">Find me on</p>
                <div className="space-y-3">
                  {socials.map(social => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${social.label} profile`}
                        whileHover={{ x: 4, transition: { duration: 0.15 } }}
                        className="group flex items-center gap-3 p-3 rounded-xl border border-white/[0.07] hover:border-white/[0.15] transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center">
                          <Icon size={15} className="text-white/50 group-hover:text-white/80 transition-colors" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                            {social.label}
                          </div>
                          <div className="text-xs text-white/30">{social.handle}</div>
                        </div>
                        <ArrowRight size={14} className="ml-auto text-white/20 group-hover:text-white/50 group-hover:translate-x-1 transition-all" />
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </Reveal>

            {/* Response hint */}
            <Reveal delay={0.45}>
              <div className="rounded-xl border border-purple-500/20 p-4" style={{ background: 'rgba(139,92,246,0.04)' }}>
                <p className="text-xs text-white/50 leading-relaxed">
                  ⚡ I typically respond within{' '}
                  <span className="text-purple-400 font-medium">24 hours</span>.
                  LinkedIn is fastest for quick questions.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
