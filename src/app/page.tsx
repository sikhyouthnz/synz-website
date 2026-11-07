import Link from 'next/link'
import Image from 'next/image'
import Slideshow from './components/Slideshow'
import Reveal from './components/Reveal'
import { formatEventDate, getEvents } from './lib/events'

export default function Home() {
  return (
    <>
      <Hero />
      <Facts />
      <About />
      <Mission />
      <Programmes />
      <RecentEvents />
      <Support />
    </>
  )
}

/* -------------------------------------------------------------------------- */

const Hero = () => (
  <section className="relative overflow-hidden">
    <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
    <div className="pointer-events-none absolute -right-32 -top-40 h-[28rem] w-[28rem] rounded-full bg-saffron-100/60 blur-3xl" />
    <div className="pointer-events-none absolute -left-40 top-40 h-[24rem] w-[24rem] rounded-full bg-azure-50 blur-3xl" />

    <div className="shell relative grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-24">
      <div className="animate-fade-up">
        <Link
          href="/kirtandirectory"
          className="group inline-flex items-center gap-2.5 rounded-full border border-line bg-white/80 py-1.5 pl-2 pr-4 text-sm text-ink-soft shadow-sm backdrop-blur transition-colors hover:border-saffron-300"
        >
          <span className="rounded-full bg-saffron-500 px-2.5 py-1 text-xs font-medium text-white">
            New
          </span>
          <span>Kirtan Learning Directory is now available</span>
          <span className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden>
            &rarr;
          </span>
        </Link>

        <h1 className="mt-8 font-display text-[3.25rem] leading-[0.95] tracking-tighter text-balance sm:text-7xl lg:text-[5.25rem]">
          By the youth,
          <br />
          for the <span className="italic text-saffron-600">youth</span>
        </h1>

        <p className="mt-7 max-w-lg text-lg leading-relaxed text-pretty text-ink-soft sm:text-xl">
          A national youth-led organisation uniting the Sikh youths of Aotearoa New Zealand
          whilst enriching their lives.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link href="/events" className="btn-ghost">
            See our events
          </Link>
          <Link href="/kirtandirectory" className="btn-ghost">
            Kirtan Learning Directory
          </Link>
        </div>
      </div>

      <div className="animate-fade-up [animation-delay:150ms]">
        <Slideshow />
      </div>
    </div>
  </section>
)

/* -------------------------------------------------------------------------- */

const facts = [
  { value: 'Registered', label: 'charity organisation' },
  { value: 'Youth-led', label: 'by young Sikhs, for young Sikhs' },
  { value: 'Two retreats', label: 'every single year' },
  { value: 'Nationwide', label: 'across New Zealand' },
]

const Facts = () => (
  <section className="border-y border-line bg-white">
    <div className="shell grid grid-cols-2 divide-line sm:grid-cols-4 sm:divide-x">
      {facts.map((fact, i) => (
        <Reveal
          key={fact.value}
          delay={i * 80}
          className="border-line px-2 py-8 first:pl-0 last:pr-0 sm:px-6 sm:py-10 [&:nth-child(-n+2)]:border-b sm:[&:nth-child(-n+2)]:border-b-0 [&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:border-r-0"
        >
          <div className="font-display text-2xl tracking-tight sm:text-3xl">{fact.value}</div>
          <div className="mt-1.5 text-sm text-ink-mute">{fact.label}</div>
        </Reveal>
      ))}
    </div>
  </section>
)

/* -------------------------------------------------------------------------- */

const About = () => (
  <section id="about" className="scroll-mt-24 py-24 sm:py-32">
    <div className="shell grid gap-10 lg:grid-cols-[auto_1fr] lg:gap-24">
      <div className="lg:sticky lg:top-28 lg:h-fit">
        <p className="eyebrow">About</p>
      </div>

      <Reveal>
        <p className="max-w-3xl font-display text-3xl leading-[1.2] tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]">
          We&apos;re a registered charity built on a simple idea: young Sikhs in New Zealand do
          better when they have each other.
        </p>

        <div className="mt-10 grid max-w-3xl gap-6 text-lg leading-relaxed text-pretty text-ink-soft sm:grid-cols-2 sm:gap-10">
          <p>
            Two retreats a year, kirtan diwans, and plenty of smaller gatherings in between.
            That&apos;s the rhythm of it. People often turn up not knowing anyone and leave with
            friends they keep. Looking after the wellbeing of young Sikhs isn&apos;t a side project
            for us; it&apos;s the reason we exist.
          </p>
          <p>
            We also run things that have nothing to do with religious events: career guidance,
            mental health talks, investment workshops and vehicle safety courses. Our members come
            from different ethnic backgrounds, which feels right for an organisation that takes the
            Guru&apos;s message of the unity of humanity seriously.
          </p>
        </div>
      </Reveal>
    </div>
  </section>
)

/* -------------------------------------------------------------------------- */

const mission = [
  'Providing a support network that cultivates an awareness and interest in the culture, identity, faith, and community of Sikh youths.',
  'Align our programs, operations and management with the principles of Sikhi.',
  'Collaborate and support other organisations that share the values of Sikh Youth New Zealand.',
  'Innovating modern and practical approaches to engage Sikh youths.',
]

const Mission = () => (
  <section className="border-y border-line bg-sand py-24 sm:py-32">
    <div className="shell">
      <p className="eyebrow">Mission</p>
      <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.05] tracking-tighter text-balance sm:text-5xl">
        What we set out to do
      </h2>

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
        {mission.map((item, i) => (
          <Reveal key={item} delay={i * 90} className="bg-paper">
            <div className="h-full p-8 sm:p-10">
              <span className="font-display text-2xl text-saffron-500">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="mt-4 text-pretty leading-relaxed text-ink-soft">{item}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

/* -------------------------------------------------------------------------- */

const programmes = [
  {
    title: 'Annual retreats',
    body: 'Summer, winter and leadership retreats bringing young Sikhs together for a few days of sangat, learning and fun.',
  },
  {
    title: 'Kirtan diwans',
    body: 'Youth-led kirtan programmes encouraging young Sikhs to engage with Gurbani, Sangeet and Sangat.',
  },
  {
    title: 'Career guidance',
    body: 'Sessions and mentoring that help young people navigate study, work and the years right after school.',
  },
  {
    title: 'Wellbeing',
    body: 'Mental health talks and open conversations, because well-being sits at the core of what we do.',
  },
  {
    title: 'Practical skills',
    body: 'Investment workshops and vehicle safety courses: the everyday skills that rarely get taught.',
  },
  {
    title: 'Community',
    body: 'Collaborating with organisations across New Zealand that share the values of Sikh Youth New Zealand.',
  },
]

const Programmes = () => (
  <section className="py-24 sm:py-32">
    <div className="shell">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow">What we do</p>
          <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.05] tracking-tighter text-balance sm:text-5xl">
            More than events
          </h2>
        </div>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {programmes.map((programme, i) => (
          <Reveal key={programme.title} delay={(i % 3) * 90}>
            <div className="card h-full p-7 hover:border-saffron-200 hover:shadow-soft">
              <h3 className="font-display text-2xl tracking-tight">{programme.title}</h3>
              <p className="mt-3 text-pretty leading-relaxed text-ink-soft">{programme.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

/* -------------------------------------------------------------------------- */

const RecentEvents = () => {
  const events = getEvents().slice(0, 3)
  if (events.length === 0) return null

  return (
    <section className="border-t border-line py-24 sm:py-32">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Recently</p>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tighter sm:text-5xl">
              Where we&apos;ve been
            </h2>
          </div>
          <Link href="/events" className="btn-ghost">
            All events
            <span aria-hidden>&rarr;</span>
          </Link>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, i) => (
            <Reveal key={event.name} delay={i * 90}>
              <Link
                href="/events"
                className="card-interactive group block h-full overflow-hidden"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-sand">
                  {event.image ? (
                    <Image
                      src={event.image}
                      alt={`Poster for ${event.name}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center font-display text-5xl text-line">
                      SYNZ
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-saffron-600">
                    {formatEventDate(event.when)}
                  </p>
                  <h3 className="mt-2 font-display text-2xl leading-tight tracking-tight">
                    {event.name}
                  </h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}


/* -------------------------------------------------------------------------- */

const Support = () => (
  <section id="support" className="scroll-mt-24 border-t border-line bg-sand py-24 sm:py-32">
    <div className="shell grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
      <div>
        <p className="eyebrow">Support the retreat</p>
        <h2 className="mt-6 max-w-xl font-display text-4xl leading-[1.05] tracking-tighter text-balance sm:text-5xl">
          It takes a <span className="italic text-saffron-600">sangat</span>.
        </h2>

        <div className="mt-6 max-w-prose space-y-4 text-pretty text-ink-soft">
          <p>
            For our retreat we are bringing international facilitators whose knowledge and
            expertise align closely with SYNZ&apos;s values, and who will be most impactful to our
            sangat.
          </p>
          <p>
            Every contribution, big or small, makes a meaningful difference. The funds raised help
            us bring these opportunities to life and reduce the financial pressures of organising
            the retreat for everyone. We would be incredibly grateful for your support.
          </p>
          <p>Thank you for your ongoing love, support and seva towards SYNZ.</p>
        </div>
      </div>

      <Reveal>
        <div className="card h-fit p-8 shadow-soft sm:p-10">
          <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-ink-mute">
            Donation details
          </h3>

          <dl className="mt-7 space-y-5">
            <div>
              <dt className="text-sm text-ink-mute">Account name</dt>
              <dd className="mt-1 text-lg">Sikh Youth NZ</dd>
            </div>
            <div>
              <dt className="text-sm text-ink-mute">Account number</dt>
              <dd className="mt-1 text-xl font-medium tabular-nums tracking-tight">
                02-0290-0454309-066
              </dd>
            </div>
            <div>
              <dt className="text-sm text-ink-mute">Reference</dt>
              <dd className="mt-1 text-lg">Donation</dd>
            </div>
          </dl>

          <p className="mt-7 border-t border-line pt-5 text-sm text-ink-soft">
            For a donation receipt, email{' '}
            <a
              href="mailto:sikhyouthnz@gmail.com?subject=Donation%20receipt"
              className="link-wipe font-medium text-ink"
            >
              sikhyouthnz@gmail.com
            </a>
            .
          </p>
        </div>
      </Reveal>
    </div>
  </section>
)
