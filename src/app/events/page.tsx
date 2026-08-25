import type { Metadata } from 'next'
import EventsGallery from '../components/EventsGallery'
import { getEvents } from '../lib/events'

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Camps, kirtan diwans and gatherings run by Sikh Youth New Zealand — browse the posters and details from every SYNZ event.',
}

export default function EventsPage() {
  const events = getEvents()

  return (
    <div className="shell py-16 sm:py-24">
      <header className="max-w-2xl">
        <p className="eyebrow">Events</p>
        <h1 className="mt-6 font-display text-5xl leading-[0.95] tracking-tighter text-balance sm:text-6xl lg:text-7xl">
          Camps, kirtan &amp; everything in between
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-pretty text-ink-soft">
          Two camps a year, an annual kirtan diwan, and plenty in between. Here&apos;s where
          we&apos;ve gathered — tap any poster to see it full size.
        </p>
      </header>

      <div className="mt-20">
        {events.length > 0 ? (
          <EventsGallery events={events} />
        ) : (
          <p className="py-24 text-center text-ink-mute">Events coming soon.</p>
        )}
      </div>
    </div>
  )
}
