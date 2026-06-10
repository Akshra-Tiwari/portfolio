'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MarqueeProps {
  children: React.ReactNode
  speed?: number
  direction?: 'left' | 'right'
  pauseOnHover?: boolean
  className?: string
  fadeEdges?: boolean
}

export default function Marquee({
  children,
  speed = 50,
  direction = 'left',
  pauseOnHover = true,
  className,
  fadeEdges = true,
}: MarqueeProps) {
  const singleRef = useRef<HTMLDivElement>(null)
  const [trackWidth, setTrackWidth] = useState(0)
  const controls = useAnimationControls()

  // Measure the single-set width after paint
  useEffect(() => {
    if (!singleRef.current) return
    setTrackWidth(singleRef.current.scrollWidth)
  }, [children])

  // Start (or restart) the animation whenever trackWidth is known
  useEffect(() => {
    if (trackWidth === 0) return
    const duration = trackWidth / speed

    controls.start({
      x: direction === 'left' ? [0, -trackWidth] : [-trackWidth, 0],
      transition: {
        duration,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
      },
    })
  }, [trackWidth, speed, direction, controls])

  return (
    <div
      className={cn('relative overflow-hidden', className)}
      onMouseEnter={() => pauseOnHover && controls.stop()}
      onMouseLeave={() => {
        if (!pauseOnHover || trackWidth === 0) return
        const duration = trackWidth / speed
        controls.start({
          x: direction === 'left' ? [0, -trackWidth] : [-trackWidth, 0],
          transition: { duration, ease: 'linear', repeat: Infinity, repeatType: 'loop' },
        })
      }}
    >
      {fadeEdges && (
        <>
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#0a0a0b] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#0a0a0b] to-transparent" />
        </>
      )}
      <motion.div className="flex w-max" animate={controls}>
        {/* Measured set */}
        <div ref={singleRef} className="flex">{children}</div>
        {/* Duplicate for seamless loop — only rendered once we know the width */}
        {trackWidth > 0 && <div className="flex">{children}</div>}
      </motion.div>
    </div>
  )
}
