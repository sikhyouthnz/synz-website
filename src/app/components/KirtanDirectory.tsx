'use client'

import { useCallback, useEffect, useState } from 'react'
import {
  AiOutlineEnvironment,
  AiOutlineExport,
  AiOutlinePhone,
} from 'react-icons/ai'
import {
  CITIES,
  LISTINGS,
  WHATSAPP,
  mapsHref,
  telHref,
  type KirtanListing,
} from '../lib/kirtan'

const KINDS = [
  { id: 'all', label: 'All' },
  { id: 'gurdwara', label: 'Gurdwara' },
  { id: 'professional', label: 'Professional' },
  { id: 'online', label: 'Online' },
  { id: 'free', label: 'Free' },
] as const

type KindId = (typeof KINDS)[number]['id']

const KIND_LABEL: Record<KirtanListing['kind'], string> = {
  gurdwara: 'Gurdwara',
  professional: 'Professional',
  online: 'Online',
}

const KIND_DOT: Record<KirtanListing['kind'], string> = {
  gurdwara: 'bg-saffron-500',
  professional: 'bg-ink',
  online: 'bg-azure-500',
}

const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`

function Tag({ children, tone }: { children: React.ReactNode; tone: 'plain' | 'free' | 'outline' }) {
  const tones = {
    plain: 'bg-sand text-ink-soft',
    free: 'bg-saffron-50 font-medium text-saffron-700',
    outline: 'border border-line text-ink-mute',
  }
  return (
    <span
      className={`inline-flex h-6 items-center gap-1.5 rounded-md px-2 text-[12.5px] ${tones[tone]}`}
    >
      {children}
    </span>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[68px_1fr] gap-2.5">
      <dt className="text-[13px] text-ink-mute">{label}</dt>
      <dd className="text-ink">{value}</dd>
    </div>
  )
}

function Card({ listing }: { listing: KirtanListing }) {
  const x = listing
  const phones = [x.phone, x.phone2].filter(Boolean) as string[]

  return (
    <article className="card flex flex-col gap-2.5 p-5 shadow-soft hover:border-saffron-200 hover:shadow-lift">
      <div className="flex flex-wrap gap-1.5">
        <Tag tone="plain">
          <span className={`h-[7px] w-[7px] shrink-0 rounded-full ${KIND_DOT[x.kind]}`} />
          {KIND_LABEL[x.kind]}
        </Tag>
        {x.free && <Tag tone="free">Free</Tag>}
        {x.level && <Tag tone="outline">{x.level}</Tag>}
      </div>

      <h3 className="text-xl font-semibold leading-tight tracking-tight">{x.name}</h3>
      {x.sub && <p className="-mt-1.5 text-sm text-ink-mute">{x.sub}</p>}
      {x.desc && <p className="text-[15px] leading-relaxed text-ink-soft">{x.desc}</p>}

      {(x.address || x.area || x.when || x.format || (x.cost && !x.free) || x.contact) && (
        <dl className="grid gap-1.5 text-[14.5px] leading-snug">
          {x.address ? (
            <Row label="Where" value={x.address} />
          ) : x.area ? (
            <Row label="Where" value={`${x.area}, ${x.city}`} />
          ) : null}
          {x.when && <Row label="When" value={x.when} />}
          {x.format && <Row label="Format" value={x.format} />}
          {x.cost && !x.free && <Row label="Cost" value={x.cost} />}
          {x.contact && <Row label="Contact" value={x.contact} />}
        </dl>
      )}

      {x.note && <p className="text-sm italic text-ink-mute">{x.note}</p>}

      <div className="mt-auto flex flex-wrap gap-2 pt-2">
        {x.link && (
          <a
            className="btn-primary !px-3.5 !py-2 !text-sm"
            href={x.link}
            target="_blank"
            rel="noreferrer"
          >
            {x.linkLabel || 'Visit'}
            <AiOutlineExport size={16} aria-hidden />
          </a>
        )}
        {phones.map((p, i) => (
          <a
            key={p}
            className={`${
              i === 0 && !x.link ? 'btn-primary' : 'btn-ghost'
            } !px-3.5 !py-2 !text-sm`}
            href={telHref(p)}
            aria-label={`Call ${x.name} on ${p}`}
          >
            <AiOutlinePhone size={16} aria-hidden />
            <span className="tabular-nums">{p}</span>
          </a>
        ))}
        {x.address && (
          <a
            className="btn-ghost !px-3.5 !py-2 !text-sm"
            href={mapsHref(x.address)}
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineEnvironment size={16} aria-hidden />
            Directions
          </a>
        )}
      </div>
    </article>
  )
}

function Pill({
  label,
  count,
  pressed,
  subtle,
  onClick,
}: {
  label: string
  count?: number
  pressed: boolean
  subtle?: boolean
  onClick: () => void
}) {
  const base =
    'inline-flex flex-none items-center gap-1.5 rounded-full px-3.5 text-sm transition-colors duration-200'
  const look = subtle
    ? pressed
      ? 'h-[34px] border border-saffron-300 bg-saffron-50 font-medium text-ink'
      : `h-[34px] border border-transparent text-ink hover:border-line ${
          count === 0 ? 'border-dashed border-line text-ink-mute' : ''
        }`
    : pressed
    ? 'h-[38px] border border-ink bg-ink font-medium text-paper'
    : 'h-[38px] border border-line bg-white font-medium text-ink hover:border-ink'

  return (
    <button type="button" className={`${base} ${look}`} aria-pressed={pressed} onClick={onClick}>
      {label}
      {count != null && (
        <span
          className={`text-xs font-semibold tabular-nums ${
            pressed ? (subtle ? 'text-saffron-700' : 'text-saffron-300') : 'text-ink-mute'
          }`}
        >
          {count}
        </span>
      )}
    </button>
  )
}

export default function KirtanDirectory() {
  const [kind, setKind] = useState<KindId>('all')
  const [city, setCity] = useState<string>('all')
  // Bumped on every filter change so the cards replay their entrance
  const [pass, setPass] = useState(0)

  // Filters live in the URL so a filtered list can be shared on WhatsApp.
  // Read after mount rather than during render, so the server and client
  // markup match.
  useEffect(() => {
    const p = new URLSearchParams(window.location.search)
    const k = p.get('type')
    const c = p.get('city')
    if (KINDS.some((x) => x.id === k)) setKind(k as KindId)
    if (c && (CITIES as readonly string[]).includes(c)) setCity(c)
  }, [])

  const writeUrl = useCallback((nextKind: KindId, nextCity: string) => {
    const p = new URLSearchParams()
    if (nextKind !== 'all') p.set('type', nextKind)
    if (nextCity !== 'all') p.set('city', nextCity)
    const s = p.toString()
    window.history.replaceState(null, '', s ? `?${s}` : window.location.pathname)
  }, [])

  const pickKind = (next: KindId) => {
    setKind(next)
    setPass((n) => n + 1)
    writeUrl(next, city)
  }

  const pickCity = (next: string) => {
    setCity(next)
    setPass((n) => n + 1)
    writeUrl(kind, next)
    const results = document.getElementById('results')
    if (results && results.getBoundingClientRect().top < 0) {
      results.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'auto'
          : 'smooth',
      })
    }
  }

  const reset = () => {
    setKind('all')
    setCity('all')
    setPass((n) => n + 1)
    writeUrl('all', 'all')
  }

  const base = LISTINGS.filter((x) => (kind === 'free' ? !!x.free : kind === 'all' || x.kind === kind))
  const list = base.filter((x) => city === 'all' || x.city === city)

  const where =
    city === 'all' ? 'across New Zealand' : city === 'Online' ? 'online' : `in ${city}`

  return (
    <>
      <div className="sticky top-[72px] z-30 border-y border-line bg-paper/90 backdrop-blur-md">
        <div className="shell grid gap-2 py-3">
          <div
            className="-m-1 flex gap-2 overflow-x-auto p-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="group"
            aria-label="Type of class"
          >
            {KINDS.map((k) => (
              <Pill key={k.id} label={k.label} pressed={kind === k.id} onClick={() => pickKind(k.id)} />
            ))}
          </div>
          <div
            className="-m-1 flex gap-2 overflow-x-auto p-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="group"
            aria-label="City"
          >
            <Pill
              label="All of NZ"
              count={base.length}
              pressed={city === 'all'}
              subtle
              onClick={() => pickCity('all')}
            />
            {CITIES.map((c) => (
              <Pill
                key={c}
                label={c}
                count={base.filter((x) => x.city === c).length}
                pressed={city === c}
                subtle
                onClick={() => pickCity(c)}
              />
            ))}
          </div>
        </div>
      </div>

      <section
        id="results"
        tabIndex={-1}
        aria-labelledby="results-title"
        className="scroll-mt-[150px] bg-sand py-8 pb-16 outline-none sm:pb-24"
      >
        <div className="shell">
          <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1.5">
            <h2 id="results-title" className="font-display text-3xl tracking-tighter sm:text-4xl">
              Where to learn
            </h2>
            <p className="text-[15px] font-medium tabular-nums text-ink-mute" aria-live="polite">
              {list.length ? `${plural(list.length, 'place', 'places')} ${where}` : ''}
            </p>
          </div>

          <div key={pass}>
            {CITIES.map((c) => {
              const items = list.filter((x) => x.city === c)
              if (!items.length) return null
              const title = c === 'Online' ? 'Online resources' : c
              const meta =
                c === 'Online'
                  ? 'Learn anywhere, at your own pace. Many teachers above can also arrange live online lessons.'
                  : `${plural(items.length, 'place', 'places')} to learn`

              return (
                <section key={c} aria-label={title} className="mt-7 first:mt-2">
                  <div className="mb-3.5 flex flex-wrap items-baseline gap-x-3.5 gap-y-1 border-b border-line pb-2.5">
                    <h3 className="text-[22px] font-semibold tracking-tight">{title}</h3>
                    <span className="text-sm text-ink-mute">{meta}</span>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((x) => (
                      <Card key={`${x.city}-${x.name}`} listing={x} />
                    ))}
                  </div>
                </section>
              )
            })}
          </div>

          {list.length === 0 && (
            <div className="mt-8 grid justify-items-center gap-2.5 rounded-2xl border border-dashed border-line bg-white px-5 py-12 text-center">
              <h3 className="text-[22px] font-semibold tracking-tight">Nothing matches that yet</h3>
              <p className="max-w-[46ch] text-ink-mute">
                Try a different filter, or tell us on{' '}
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="link-wipe font-medium text-ink"
                >
                  the WhatsApp channel
                </a>{' '}
                if we&apos;re missing somewhere.
              </p>
              <button type="button" className="btn-ghost mt-1.5" onClick={reset}>
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
