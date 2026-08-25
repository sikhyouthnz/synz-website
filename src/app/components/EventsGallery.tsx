'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import Reveal from './Reveal'
import { formatEventDate, type SynzEvent } from '../lib/events'

export default function EventsGallery({ events }: { events: SynzEvent[] }) {
  const [active, setActive] = useState<SynzEvent | null>(null)

  // Group by year so the archive reads as a timeline
  const years = Array.from(new Set(events.map((e) => e.year)))

  return (
    <>
      {years.map((year) => (
        <section key={year} className="mt-16 first:mt-0">
          <div className="flex items-center gap-5">
            <h2 className="font-display text-3xl tracking-tight text-ink-mute">{year}</h2>
            <div className="h-px flex-1 bg-line" />
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events
              .filter((event) => event.year === year)
              .map((event, i) => (
                <Reveal key={event.name} delay={(i % 3) * 90}>
                  <EventCard event={event} onOpen={() => event.image && setActive(event)} />
                </Reveal>
              ))}
          </div>
        </section>
      ))}

      {active && <Lightbox event={active} onClose={() => setActive(null)} />}
    </>
  )
}

/* -------------------------------------------------------------------------- */

const EventCard = ({ event, onOpen }: { event: SynzEvent; onOpen: () => void }) => {
  const Wrapper = event.image ? 'button' : 'div'

  return (
    <Wrapper
      {...(event.image
        ? {
            type: 'button' as const,
            onClick: onOpen,
            'aria-label': `View the poster for ${event.name}`,
          }
        : {})}
      className="card-interactive group flex h-full w-full flex-col overflow-hidden text-left"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-sand">
        {event.image ? (
          <>
            <Image
              src={event.image}
              alt={`Poster for ${event.name}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-ink opacity-0 shadow-sm backdrop-blur transition-opacity duration-200 group-hover:opacity-100">
              View poster
            </span>
          </>
        ) : (
          <div className="flex h-full items-center justify-center font-display text-5xl text-line">
            SYNZ
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-saffron-600">
          {formatEventDate(event.when)}
        </p>
        <h3 className="mt-2 font-display text-2xl leading-tight tracking-tight">{event.name}</h3>

        {event.description && (
          <p className="mt-3 text-pretty text-sm leading-relaxed text-ink-soft">
            {event.description}
          </p>
        )}

        {event.venue && (
          /* mt-auto pins the venue to the card floor so rows line up */
          <div className="mt-auto pt-5">
            <p className="flex items-start gap-2 border-t border-line pt-4 text-sm text-ink-mute">
              <PinIcon />
              <span>{event.venue}</span>
            </p>
          </div>
        )}
      </div>
    </Wrapper>
  )
}

/* -------------------------------------------------------------------------- */

const Lightbox = ({ event, onClose }: { event: SynzEvent; onClose: () => void }) => {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = previousOverflow
    }
  }, [handleKey])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Poster for ${event.name}`}
      onClick={onClose}
      className="animate-fade-in fixed inset-0 z-50 flex flex-col items-center justify-center gap-5 bg-ink/85 p-5 backdrop-blur-sm sm:p-10"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6 sm:top-6"
      >
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          strokeLinecap="round"
          aria-hidden
        >
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      <div className="relative h-full max-h-[78vh] w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
        <Image
          src={event.image as string}
          alt={`Poster for ${event.name}`}
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          className="rounded-xl object-contain"
        />
      </div>

      <p className="text-center text-sm text-white/70">
        {event.name} &middot; {formatEventDate(event.when)}
      </p>
    </div>
  )
}

const PinIcon = () => (
  <svg
    className="mt-0.5 h-4 w-4 shrink-0 text-saffron-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)
