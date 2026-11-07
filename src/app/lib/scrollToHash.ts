/**
 * Scrolls the element with the given id into view, honouring its scroll-margin
 * (the `scroll-mt-*` that keeps a section clear of the sticky header).
 *
 * Next 13's app router handles hash targets unreliably, so the site does this
 * itself. See HashLink and HashScroll for the two cases.
 */
export function scrollToHash(hash: string, smooth = true): boolean {
  const el = document.getElementById(hash)
  if (!el) return false

  // 'auto' would defer to the CSS scroll-behavior, which this site sets to
  // smooth, so the instant cases have to say 'instant' outright.
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: smooth && !reduced ? 'smooth' : 'instant' })
  return true
}
