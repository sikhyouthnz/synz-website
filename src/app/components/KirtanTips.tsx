'use client'

import { useEffect, useRef } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { TIPS } from '../lib/kirtan'

/**
 * Tips stay collapsed until asked for; any link to #tips opens them, including
 * one followed from another page.
 */
export default function KirtanTips() {
  const box = useRef<HTMLDetailsElement>(null)

  useEffect(() => {
    const open = () => {
      if (window.location.hash === '#tips' && box.current) box.current.open = true
    }
    open()
    window.addEventListener('hashchange', open)
    return () => window.removeEventListener('hashchange', open)
  }, [])

  return (
    <section id="tips" className="scroll-mt-[150px] py-14 sm:py-20">
      <details ref={box} className="shell group">
        <summary className="flex cursor-pointer list-none flex-wrap items-center justify-between gap-x-6 gap-y-3 border-b border-line border-t-2 border-t-ink py-5 [&::-webkit-details-marker]:hidden">
          <h2 className="font-display text-3xl tracking-tighter sm:text-4xl">
            Tips for learning Kirtan
          </h2>
          <span className="btn-ghost !px-4 !py-2 !text-sm">
            <span className="group-open:hidden">Show tips</span>
            <span className="hidden group-open:inline">Hide tips</span>
            <AiOutlineDown
              size={16}
              aria-hidden
              className="transition-transform duration-300 group-open:rotate-180"
            />
          </span>
        </summary>

        <ol className="mt-1 grid list-none gap-x-10 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {TIPS.map(([title, body], i) => (
            <li
              key={title}
              className="grid grid-cols-[34px_1fr] content-start gap-x-2 border-t border-line py-[18px]"
            >
              <span className="row-span-2 pt-px text-[15px] font-semibold tabular-nums text-saffron-600">
                {i + 1}
              </span>
              <h3 className="text-[17px] font-semibold leading-snug">{title}</h3>
              <p className="col-start-2 mt-1 text-[15px] leading-relaxed text-ink-soft">{body}</p>
            </li>
          ))}
        </ol>
      </details>
    </section>
  )
}
