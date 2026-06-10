'use client'

import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface TooltipProps {
  children: ReactNode
  content: string
  side?: 'top' | 'bottom' | 'left' | 'right'
  delayDuration?: number
}

export default function Tooltip({
  children,
  content,
  side = 'top',
  delayDuration = 400,
}: TooltipProps) {
  return (
    <TooltipPrimitive.Provider delayDuration={delayDuration}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          {children}
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={side}
            sideOffset={6}
            className={cn(
              'z-50 max-w-xs rounded-lg px-3 py-1.5',
              'bg-[#1f1f23] border border-white/[0.1]',
              'text-xs text-white/80 font-medium',
              'shadow-xl shadow-black/40',
              'animate-in fade-in-0 zoom-in-95',
              'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
              'data-[side=bottom]:slide-in-from-top-2',
              'data-[side=left]:slide-in-from-right-2',
              'data-[side=right]:slide-in-from-left-2',
              'data-[side=top]:slide-in-from-bottom-2'
            )}
          >
            {content}
            <TooltipPrimitive.Arrow className="fill-[#1f1f23]" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}
