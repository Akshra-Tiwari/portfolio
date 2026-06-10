import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

type GradientTextVariant =
  | 'white'      // white → white/70
  | 'purple'     // violet → purple → lavender
  | 'mixed'      // white → purple → white
  | 'shimmer'    // animated shimmer sweep

interface GradientTextProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: GradientTextVariant
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p'
}

const gradients: Record<GradientTextVariant, string> = {
  white: 'bg-gradient-to-r from-white to-white/70',
  purple: 'bg-gradient-to-r from-violet-400 via-purple-500 to-purple-300',
  mixed: 'bg-gradient-to-r from-white via-purple-300 to-white',
  shimmer: 'shimmer-text',
}

export default function GradientText({
  variant = 'purple',
  as: Tag = 'span',
  className,
  children,
  ...props
}: GradientTextProps) {
  const isShimmer = variant === 'shimmer'

  return (
    <Tag
      className={cn(
        isShimmer
          ? gradients.shimmer
          : [
              gradients[variant],
              'bg-clip-text text-transparent',
            ],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
