import React from 'react'
import { cn } from '@/lib/utils'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'

interface FadeInProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'none'
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = 'up',
  ...props
}: FadeInProps) {
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  })

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-1000 ease-editorial',
        !hasIntersected && 'opacity-0',
        !hasIntersected && direction === 'up' && 'translate-y-8',
        !hasIntersected && direction === 'down' && '-translate-y-8',
        hasIntersected && 'opacity-100 translate-y-0',
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  )
}
