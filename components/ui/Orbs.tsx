import { cn } from '@/lib/utils'

interface OrbProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number
  color?: string
  blur?: number
  className?: string
}

export function Orb({
  size = 600,
  color = 'bg-purple-600/[0.05]',
  blur = 120,
  className,
  style,
  ...rest
}: OrbProps) {
  return (
    <div
      aria-hidden="true"
      className={cn('absolute rounded-full pointer-events-none', color, className)}
      style={{ width: size, height: size, filter: `blur(${blur}px)`, ...style }}
      {...rest}
    />
  )
}

export function SectionOrbs({ variant = 'purple' }: { variant?: 'purple' | 'blue' | 'green' | 'amber' | 'none' }) {
  const colors: Record<string, [string, string]> = {
    purple: ['bg-purple-600/[0.04]', 'bg-violet-800/[0.05]'],
    blue:   ['bg-blue-600/[0.04]',   'bg-cyan-800/[0.04]'  ],
    green:  ['bg-emerald-600/[0.04]','bg-teal-800/[0.04]'  ],
    amber:  ['bg-amber-600/[0.04]',  'bg-yellow-800/[0.04]'],
    none:   ['', ''],
  }
  const [primary, secondary] = colors[variant]
  if (variant === 'none') return null
  return (
    <>
      <Orb size={700} color={primary}   blur={140} className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <Orb size={400} color={secondary} blur={100} className="bottom-0 right-0 translate-x-1/4 translate-y-1/4" />
    </>
  )
}
