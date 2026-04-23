'use client'

import { cn } from '@/lib/utils'

export type LogoLoaderProps = {
  className?: string
}

function LogoLoader({ className }: LogoLoaderProps) {
  return (
    <span className="logo-loader-track" aria-hidden="true">
      <img
        src="/munragirl.png"
        alt="munr"
        className={cn('logo-loader-icon size-4 rounded', className)}
      />
    </span>
  )
}

export { LogoLoader }
