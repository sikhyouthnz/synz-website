'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const links = [
  { href: '/#about', label: 'About' },
  { href: '/events', label: 'Events' },
  { href: '/blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu whenever the route changes
  useEffect(() => setOpen(false), [pathname])

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-line bg-paper/85 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="shell flex h-[72px] items-center justify-between" aria-label="Main">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/synz-logo.jpeg"
            alt=""
            width={40}
            height={40}
            priority
            className="h-9 w-9 object-contain mix-blend-multiply sm:h-10 sm:w-10"
          />
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-semibold tracking-tight">Sikh Youth</span>
            <span className="text-[15px] font-semibold tracking-tight text-ink-mute transition-colors group-hover:text-saffron-600">
              New Zealand
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-wipe text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://events.humanitix.com/synz-leadership-retreat-2026"
            target="_blank"
            rel="noreferrer"
            className="btn-primary !px-5 !py-2.5"
          >
            Register
          </a>
        </div>

        <button
          type="button"
          className="-mr-2 flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-sand md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 block h-[1.5px] w-5 bg-current transition-transform duration-300 ${
                open ? 'top-1.5 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-[1.5px] w-5 bg-current transition-opacity duration-200 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 block h-[1.5px] w-5 bg-current transition-transform duration-300 ${
                open ? 'top-1.5 -rotate-45' : 'top-3'
              }`}
            />
          </span>
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="animate-slide-down border-t border-line bg-paper md:hidden"
        >
          <div className="shell flex flex-col py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/70 py-4 font-display text-2xl tracking-tight last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://events.humanitix.com/synz-leadership-retreat-2026"
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-5"
              onClick={() => setOpen(false)}
            >
              Register for the retreat
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
