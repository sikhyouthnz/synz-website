'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

const images = [
  { src: '/slider-images/img1.jpeg', alt: 'SYNZ campers gathered around a bonfire' },
  { src: '/slider-images/img2.jpeg', alt: 'Sikh youth at a SYNZ camp' },
  { src: '/slider-images/img3.jpeg', alt: 'A SYNZ group photo' },
  { src: '/slider-images/img4.jpeg', alt: 'Campers taking part in a SYNZ activity' },
  { src: '/slider-images/img5.jpeg', alt: 'SYNZ members together at an event' },
]

const INTERVAL = 5000

/** Auto-advancing crossfade gallery. Pauses on hover and on focus. */
export default function Slideshow() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const go = useCallback((next: number) => {
    setIndex((next + images.length) % images.length)
  }, [])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => setIndex((i) => (i + 1) % images.length), INTERVAL)
    return () => clearInterval(timer)
  }, [paused])

  return (
    <div
      className="group relative aspect-[3/2] w-full overflow-hidden rounded-2xl bg-sand shadow-lift"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Photos from SYNZ events"
    >
      {images.map((image, i) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          priority={i === 0}
          sizes="(max-width: 1024px) 100vw, 640px"
          className={`object-cover transition-opacity duration-1000 ease-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={i !== index}
        />
      ))}

      {/* Bottom scrim keeps the controls legible over bright photos */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/40 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 sm:p-5">
        <div className="flex gap-2" role="tablist" aria-label="Choose a photo">
          {images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Photo ${i + 1} of ${images.length}`}
              onClick={() => go(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-7 bg-white' : 'w-2.5 bg-white/70 hover:bg-white'
              }`}
            />
          ))}
        </div>

        <div className="flex gap-2 opacity-0 transition-opacity duration-200 focus-within:opacity-100 group-hover:opacity-100">
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous photo"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink backdrop-blur transition-colors hover:bg-white"
          >
            <Chevron className="rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next photo"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink backdrop-blur transition-colors hover:bg-white"
          >
            <Chevron />
          </button>
        </div>
      </div>
    </div>
  )
}

const Chevron = ({ className = '' }: { className?: string }) => (
  <svg
    className={`h-4 w-4 ${className}`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
)
