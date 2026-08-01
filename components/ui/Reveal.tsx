'use client'

import { useInView } from 'react-intersection-observer'
import { motion, Variants } from 'framer-motion'


interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  duration?: number
  once?: boolean
}

const variants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  none: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
}

export default function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 0.6,
  once = true,
}: RevealProps) {
  const [ref, inView] = useInView({ triggerOnce: once, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      variants={variants[direction]}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({
  children,
  className,
  stagger = 0.1,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  stagger?: number
  delay?: number
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
        hidden: {},
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <Reveal direction="none">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-6 h-px bg-purple-500/60" />
        <span className="section-label text-purple-400/80">{children}</span>
        <div className="w-6 h-px bg-purple-500/60" />
      </div>
    </Reveal>
  )
}
