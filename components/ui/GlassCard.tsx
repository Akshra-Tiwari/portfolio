import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * 'default'  — rgba(255,255,255,0.03), thin border
   * 'strong'   — slightly more opaque, blur 40px
   * 'accent'   — purple tint border
   */
  variant?: 'default' | 'strong' | 'accent'
  /** Adds hover translate-y-1 and border brightening */
  hoverable?: boolean
  children: React.ReactNode
}

export default function GlassCard({
  variant = 'default',
  hoverable = false,
  className,
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl transition-all duration-300',
        // Base variants
        variant === 'default' && 'bg-white/[0.03] border border-white/[0.07] backdrop-blur-sm',
        variant === 'strong' && 'bg-white/[0.05] border border-white/[0.1] backdrop-blur-[40px]',
        variant === 'accent' &&
          'bg-purple-500/[0.05] border border-purple-500/[0.2] backdrop-blur-sm',
        // Hover state
        hoverable && 'cursor-pointer hover:-translate-y-1 hover:border-white/[0.15] hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
