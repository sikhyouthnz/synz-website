'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { scrollToHash } from '../lib/scrollToHash'

type HashLinkProps = {
  /** Full path including the hash, e.g. "/#support". */
  href: string
  className?: string
  children: React.ReactNode
  /** Run alongside the navigation, e.g. to close the mobile menu. */
  onClick?: () => void
}

/**
 * A link to a section of a page.
 *
 * Next 13's app router drops the hash when the target pathname is the one
 * already open: the click is swallowed, so neither the URL nor the scroll
 * position changes. On that page we scroll ourselves. From any other page a
 * normal Link is right, and HashScroll finishes the job once the new route has
 * mounted.
 */
export default function HashLink({ href, className, children, onClick }: HashLinkProps) {
  const pathname = usePathname()
  const [path, hash] = href.split('#')
  const samePage = pathname === (path || '/')

  if (!samePage) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {children}
      </Link>
    )
  }

  return (
    <a
      href={`#${hash}`}
      className={className}
      onClick={(event) => {
        // Let modified clicks (new tab, download) behave normally
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
        if (!document.getElementById(hash)) return

        event.preventDefault()
        // Close the mobile menu first: it locks body scrolling and changes the
        // layout as it goes, so scrolling before it has gone overshoots.
        onClick?.()
        window.history.replaceState(null, '', `#${hash}`)
        requestAnimationFrame(() => requestAnimationFrame(() => scrollToHash(hash)))
      }}
    >
      {children}
    </a>
  )
}
