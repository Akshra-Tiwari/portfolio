import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

type BadgeVariant =
  | 'default'
  | 'purple'
  | 'green'
  | 'blue'
  | 'amber'
  | 'rose'
  | 'outline'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  size?: 'sm' | 'md'
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-white/[0.05] border-white/[0.1] text-white/50',
  purple: 'bg-purple-500/10 border-purple-500/25 text-purple-400',
  green: 'bg-emerald-500/10 border-emerald-500/25 text-emerald-400',
  blue: 'bg-blue-500/10 border-blue-500/25 text-blue-400',
  amber: 'bg-amber-500/10 border-amber-500/25 text-amber-400',
  rose: 'bg-rose-500/10 border-rose-500/25 text-rose-400',
  outline: 'bg-transparent border-white/[0.15] text-white/60',
}

const sizeStyles = {
  sm: 'px-2 py-0.5 text-[10px]',
  md: 'px-3 py-1 text-xs',
}

export default function Badge({
  variant = 'default',
  size = 'md',
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border font-medium uppercase tracking-wider transition-colors',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
