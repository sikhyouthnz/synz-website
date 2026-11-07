'use client'

import { useEffect } from 'react'
import { scrollToHash } from '../lib/scrollToHash'

/**
 * Applies the URL's hash after the page has mounted.
 *
 * The app router returns to the top of the document once it hydrates, so a URL
 * that arrives with a hash, whether typed, shared or followed from another
 * page, lands at the top instead of at its section. Re-applying it afterwards
 * is the reliable way to get there.
 *
 * The jump is deliberately instant rather than smooth: the reader asked for a
 * section, not for a tour of the page above it.
 */
export default function HashScroll() {
  useEffect(() => {
    const jump = () => {
      const hash = window.location.hash.slice(1)
      if (hash) scrollToHash(decodeURIComponent(hash), false)
    }

    // After the router has finished its own scroll handling, then again once
    // images have settled and section offsets are final.
    const timer = window.setTimeout(jump, 120)
    window.addEventListener('load', jump)
    window.addEventListener('hashchange', jump)

    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('load', jump)
      window.removeEventListener('hashchange', jump)
    }
  }, [])

  return null
}
