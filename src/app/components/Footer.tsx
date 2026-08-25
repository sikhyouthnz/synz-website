import Link from 'next/link'
import Image from 'next/image'
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
} from 'react-icons/ai'

const socials = [
  { href: 'https://www.instagram.com/sikhyouthnz/', label: 'Instagram', Icon: AiOutlineInstagram },
  { href: 'https://www.facebook.com/sikhyouthnz/', label: 'Facebook', Icon: AiOutlineFacebook },
  {
    href: 'https://www.linkedin.com/company/sikh-youth-nz-cc54981/',
    label: 'LinkedIn',
    Icon: AiOutlineLinkedin,
  },
]

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-line bg-sand">
      <div className="shell py-20 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <p className="eyebrow">Get in touch</p>
            <h2 className="mt-6 max-w-xl font-display text-4xl leading-[1.05] tracking-tighter text-balance sm:text-5xl lg:text-6xl">
              Come as you are.
              <br />
              <span className="italic text-saffron-600">Everyone is welcome.</span>
            </h2>
            <p className="mt-6 max-w-md text-pretty text-ink-soft">
              Whether you want to join a camp, sing at a diwan, volunteer, or just find out what
              we&apos;re about — send us a message. We&apos;d love to hear from you.
            </p>

            <a
              href="mailto:sikhyouthnz@gmail.com"
              className="group mt-10 inline-flex items-center gap-3 font-display text-2xl tracking-tight sm:text-3xl"
            >
              <AiOutlineMail
                className="shrink-0 text-saffron-500 transition-transform duration-300 group-hover:-rotate-6"
                size={28}
                aria-hidden
              />
              <span className="link-wipe break-all">sikhyouthnz@gmail.com</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-8 lg:justify-items-end">
            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-ink-mute">
                Explore
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <Link href="/#about" className="link-wipe text-ink-soft hover:text-ink">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="link-wipe text-ink-soft hover:text-ink">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="link-wipe text-ink-soft hover:text-ink">
                    Blog
                  </Link>
                </li>
                <li>
                  <a
                    href="https://events.humanitix.com/synz-leadership-retreat-2026"
                    target="_blank"
                    rel="noreferrer"
                    className="link-wipe text-ink-soft hover:text-ink"
                  >
                    Register
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-ink-mute">
                Follow
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                {socials.map(({ href, label, Icon }) => (
                  <li key={href}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2.5 text-ink-soft hover:text-ink"
                    >
                      <Icon
                        size={18}
                        className="shrink-0 transition-colors group-hover:text-saffron-600"
                        aria-hidden
                      />
                      <span className="link-wipe">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/synz-logo.jpeg"
              alt="SYNZ"
              width={32}
              height={32}
              className="h-8 w-8 object-contain mix-blend-multiply"
            />
            <p className="text-sm text-ink-mute">
              Sikh Youth New Zealand — a registered charity.
            </p>
          </div>
          <p className="text-sm text-ink-mute">
            &copy; {new Date().getFullYear()} SYNZ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
