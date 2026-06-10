import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

// ─── Input ───────────────────────────────────────────

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, className, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label
            htmlFor={inputId}
            className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/35"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'w-full rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20',
            'bg-white/[0.04] border transition-all duration-200 outline-none',
            error
              ? 'border-rose-500/50 focus:border-rose-500/70 focus:bg-rose-500/[0.04]'
              : 'border-white/[0.08] focus:border-purple-500/50 focus:bg-white/[0.06]',
            className
          )}
          {...props}
        />
        {hint && !error && (
          <p className="text-[11px] text-white/30">{hint}</p>
        )}
        {error && (
          <p className="text-[11px] text-rose-400">{error}</p>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'

// ─── Textarea ────────────────────────────────────────

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  hint?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, className, id, ...props }, ref) => {
    const textareaId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label
            htmlFor={textareaId}
            className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/35"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            'w-full rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20',
            'bg-white/[0.04] border transition-all duration-200 outline-none resize-none',
            error
              ? 'border-rose-500/50 focus:border-rose-500/70 focus:bg-rose-500/[0.04]'
              : 'border-white/[0.08] focus:border-purple-500/50 focus:bg-white/[0.06]',
            className
          )}
          {...props}
        />
        {hint && !error && (
          <p className="text-[11px] text-white/30">{hint}</p>
        )}
        {error && (
          <p className="text-[11px] text-rose-400">{error}</p>
        )}
      </div>
    )
  }
)
Textarea.displayName = 'Textarea'
