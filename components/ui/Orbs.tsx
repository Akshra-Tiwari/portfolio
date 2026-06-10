import { cn } from '@/lib/utils'

interface OrbProps {
  /** Position from top — Tailwind class e.g. 'top-1/4' */
  top?: string
  /** Position from left — Tailwind class e.g. 'left-1/2' */
  left?: string
  /** Size in pixels — applied as width/height inline style */
  size?: number
  /** Tailwind color + opacity class e.g. 'bg-purple-600/[0.05]' */
  color?: string
  /** blur amount in px */
  blur?: number
  className?: string
}

/**
 * Soft radial glow orb. Use as a decorative background element
 * behind section content. Pointer-events are disabled.
 */
export function Orb({
  size = 600,
  color = 'bg-purple-600/[0.05]',
  blur = 120,
  className,
  ...rest
}: OrbProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-hidden="true"
      className={cn('absolute rounded-full pointer-events-none', color, className)}
      style={{
        width: size,
        height: size,
        filter: `blur(${blur}px)`,
        ...((rest as any).style ?? {}),
      }}
      {...rest}
    />
  )
}

/**
 * Pre-configured layout of orbs for a standard section background.
 * Wrap your section content in a relative container and place this before it.
 */
export function SectionOrbs({
  variant = 'purple',
}: {
  variant?: 'purple' | 'blue' | 'green' | 'amber' | 'none'
}) {
  const colors: Record<string, [string, string]> = {
    purple: ['bg-purple-600/[0.04]', 'bg-violet-800/[0.05]'],
    blue: ['bg-blue-600/[0.04]', 'bg-cyan-800/[0.04]'],
    green: ['bg-emerald-600/[0.04]', 'bg-teal-800/[0.04]'],
    amber: ['bg-amber-600/[0.04]', 'bg-yellow-800/[0.04]'],
    none: ['', ''],
  }

  const [primary, secondary] = colors[variant]

  if (variant === 'none') return null

  return (
    <>
      <Orb
        size={700}
        color={primary}
        blur={140}
        className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <Orb
        size={400}
        color={secondary}
        blur={100}
        className="bottom-0 right-0 translate-x-1/4 translate-y-1/4"
      />
    </>
  )
}
