'use client'

import { useEffect, useRef, useState } from 'react'

type RevealProps = {
  children: React.ReactNode
  /** Stagger in milliseconds, applied as an animation delay. */
  delay?: number
  className?: string
}

/**
 * Fades and lifts its children into view the first time they hit the viewport.
 *
 * Anything already on screen at mount is shown straight away rather than waiting
 * on the observer, and a `<noscript>` rule in the layout un-hides everything when
 * JavaScript is unavailable — the content must never be stuck at opacity 0.
 */
export default function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const inViewport = node.getBoundingClientRect().top < window.innerHeight
    if (inViewport || !('IntersectionObserver' in window)) {
      setShown(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.05 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      data-reveal
      className={`${shown ? 'animate-fade-up' : 'opacity-0'} ${className}`}
      style={shown && delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
