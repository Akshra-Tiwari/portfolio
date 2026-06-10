import { cn } from '@/lib/utils'

interface SectionDividerProps {
  className?: string
  /** Show a centred dot between the lines */
  dot?: boolean
}

export default function SectionDivider({
  className,
  dot = false,
}: SectionDividerProps) {
  if (dot) {
    return (
      <div className={cn('flex items-center gap-4 w-full max-w-7xl mx-auto px-6', className)}>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
        <div className="w-1 h-1 rounded-full bg-purple-500/40" />
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
      </div>
    )
  }

  return (
    <div
      className={cn(
        'w-full max-w-7xl mx-auto px-6',
        className
      )}
    >
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </div>
  )
}
