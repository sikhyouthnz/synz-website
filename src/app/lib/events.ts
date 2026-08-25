import { attributes } from '../../../content/events.md'

export type SynzEvent = {
  name: string
  description: string
  date: string
  venue: string
  image?: string
  /** Parsed `date`, used for sorting and grouping. */
  when: Date
  year: number
}

type RawEvent = {
  name: string
  description?: string
  date: string
  venue?: string
  image?: string
}

const raw = attributes as { title?: string; events?: RawEvent[] }

/** Poster paths are authored with and without a leading slash — normalise them. */
const toPublicPath = (image?: string) =>
  image ? '/' + image.replace(/^\/+/, '') : undefined

/**
 * Editors often repeat the event name as the first line of the description.
 * Drop it so cards don't read the title twice.
 */
const tidyDescription = (description = '', name = '') => {
  const paragraphs = description
    .split(/\n+/)
    .map((p) => p.replace(/\s+/g, ' ').trim())
    .filter(Boolean)

  if (paragraphs[0]?.toLowerCase() === name.trim().toLowerCase()) paragraphs.shift()
  return paragraphs.join('\n\n')
}

/** All events, newest first. */
export const getEvents = (): SynzEvent[] =>
  (raw.events ?? [])
    .map((event) => {
      const when = new Date(event.date)
      return {
        name: event.name,
        description: tidyDescription(event.description, event.name),
        date: event.date,
        venue: event.venue ?? '',
        image: toPublicPath(event.image),
        when,
        year: when.getFullYear(),
      }
    })
    .sort((a, b) => b.when.getTime() - a.when.getTime())

export const eventsTitle = raw.title ?? 'Events'

export const formatEventDate = (date: Date) =>
  date.toLocaleDateString('en-NZ', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
