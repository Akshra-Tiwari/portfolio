'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface AnimatedCounterProps {
  target: number
  duration?: number   // ms
  prefix?: string
  suffix?: string
  decimals?: number
  className?: string
}

/**
 * Counts up from 0 to `target` when it enters the viewport.
 * Uses a smooth ease-out cubic animation.
 */
export default function AnimatedCounter({
  target,
  duration = 1500,
  prefix = '',
  suffix = '',
  decimals = 0,
  className,
}: AnimatedCounterProps) {
  const [value, setValue] = useState(0)
  const startTime = useRef<number | null>(null)
  const rafRef = useRef<number| null>(null)

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })

  useEffect(() => {
    if (!inView) return

    const animate = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp
      const elapsed = timestamp - startTime.current
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(parseFloat((eased * target).toFixed(decimals)))

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      } else {
        setValue(target)
      }
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [inView, target, duration, decimals])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toLocaleString()}
      {suffix}
    </span>
  )
}
