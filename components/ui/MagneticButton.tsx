'use client'

import { useRef, useState, MouseEvent } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  strength?: number
  as?: 'button' | 'a'
  href?: string
  target?: string
  rel?: string
  onClick?: () => void
}

/**
 * A button that subtly moves toward the user's cursor when hovering nearby.
 * Creates that premium "magnetic" interaction popularised by Linear and Raycast.
 */
export default function MagneticButton({
  children,
  className,
  strength = 0.35,
  as: Tag = 'button',
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [hovering, setHovering] = useState(false)

  const rawX = useSpring(0, { stiffness: 200, damping: 20 })
  const rawY = useSpring(0, { stiffness: 200, damping: 20 })

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    rawX.set((e.clientX - centerX) * strength)
    rawY.set((e.clientY - centerY) * strength)
  }

  const handleMouseLeave = () => {
    rawX.set(0)
    rawY.set(0)
    setHovering(false)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <motion.div style={{ x: rawX, y: rawY }}>
        {Tag === 'a' ? (
          <a className={cn('inline-flex', className)} {...(props as any)}>
            {children}
          </a>
        ) : (
          <button className={cn('inline-flex', className)} {...(props as any)}>
            {children}
          </button>
        )}
      </motion.div>
    </div>
  )
}
