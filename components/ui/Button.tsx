'use client'

import { forwardRef, ButtonHTMLAttributes } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-600/25 hover:shadow-purple-500/35',
  secondary:
    'bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.18] text-white/80 hover:text-white',
  ghost:
    'bg-transparent hover:bg-white/[0.05] text-white/60 hover:text-white',
  outline:
    'bg-transparent border border-white/[0.15] hover:border-white/[0.3] text-white/70 hover:text-white',
  danger:
    'bg-rose-600/10 hover:bg-rose-600/20 border border-rose-600/25 hover:border-rose-600/40 text-rose-400 hover:text-rose-300',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-xs rounded-lg gap-1.5',
  md: 'px-5 py-2.5 text-sm rounded-xl gap-2',
  lg: 'px-7 py-3.5 text-base rounded-xl gap-2.5',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      icon,
      iconPosition = 'left',
      fullWidth = false,
      disabled,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading

    return (
      <motion.button
        ref={ref}
        whileHover={isDisabled ? {} : { scale: 1.02, y: -1 }}
        whileTap={isDisabled ? {} : { scale: 0.98 }}
        transition={{ duration: 0.15 }}
        disabled={isDisabled}
        className={cn(
          'relative inline-flex items-center justify-center font-medium transition-all duration-200 select-none',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0b]',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          className
        )}
        {...(props as HTMLMotionProps<'button'>)}
      >
        {loading && (
          <Loader2
            size={size === 'sm' ? 12 : size === 'lg' ? 18 : 15}
            className="animate-spin flex-shrink-0"
          />
        )}
        {!loading && icon && iconPosition === 'left' && (
          <span className="flex-shrink-0">{icon}</span>
        )}
        {children}
        {!loading && icon && iconPosition === 'right' && (
          <span className="flex-shrink-0">{icon}</span>
        )}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export default Button
