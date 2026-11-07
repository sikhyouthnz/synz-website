import type { Metadata } from 'next'
import Image from 'next/image'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import KirtanDirectory from '../components/KirtanDirectory'
import KirtanTips from '../components/KirtanTips'
import Reveal from '../components/Reveal'
import { WHATSAPP } from '../lib/kirtan'

export const metadata: Metadata = {
  title: 'Kirtan Learning Directory',
  description:
    'In-person and online places to learn Gurbani Kirtan across New Zealand: Gurdwara classes, professional teachers and online resources.',
  openGraph: {
    title: 'Kirtan Learning Directory',
    description:
      'Find a Gurdwara class, teacher or online course to learn Gurbani Kirtan in New Zealand.',
    images: ['/kirtan/photos/sangat-row.jpg'],
  },
}

const STRIP = [
  { src: '/kirtan/photos/tree-lights.jpg', alt: 'Fairy lights strung through the tree' },
  {
    src: '/kirtan/photos/sangat-fields.jpg',
    alt: 'Sangat listening to Kirtan, facing the fields',
  },
  { src: '/kirtan/photos/harmonium.jpg', alt: 'Harmonium' },
  {
    src: '/kirtan/photos/tabla-lights.jpg',
    alt: 'Tabla and microphone under string lights',
  },
]

export default function KirtanDirectoryPage() {
  return (
    <>
      <section className="shell py-16 sm:py-20">
        <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <header>
            <p className="eyebrow">Kirtan learning</p>
            <h1 className="mt-6 font-display text-5xl leading-[0.95] tracking-tighter text-balance sm:text-6xl lg:text-7xl">
              Kirtan Learning Directory
            </h1>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-pretty text-ink-soft">
              Our events aim to spark a love of Sikhi through Gurbani Kirtan, and we hope the young
              people who feel that spark return to share it with others. This directory lists
              in-person and online places to learn across New Zealand.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#results" className="btn-primary">
                Find a class near you
              </a>
              <a href="#tips" className="btn-ghost">
                Tips for learning
              </a>
            </div>

            <div className="mt-10 flex items-center gap-3 border-t border-line pt-6">
              <Image
                src="/kirtan/logos/nz-sikh-youth.jpeg"
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
              />
              <Image
                src="/kirtan/logos/sikh-youth-nz.jpeg"
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
              />
              <p className="text-sm text-ink-mute">
                A joint initiative by <span className="text-ink">NZ Sikh Youth</span> &amp;{' '}
                <span className="text-ink">Sikh Youth NZ</span>
              </p>
            </div>
          </header>

          <Reveal>
            <Image
              src="/kirtan/photos/sangat-row.jpg"
              alt="Sangat seated in a row listening to Kirtan"
              width={836}
              height={692}
              priority
              className="aspect-[4/3] w-full rounded-2xl object-cover object-[center_78%] shadow-soft"
            />
          </Reveal>
        </div>
      </section>

      <KirtanDirectory />

      <KirtanTips />

      <section className="shell pb-16 sm:pb-24" aria-labelledby="wa-title">
        <Reveal>
          <div className="grid overflow-hidden rounded-2xl bg-[#0F3D34] text-white lg:grid-cols-[5fr_6fr]">
            <Image
              src="/kirtan/photos/ardas-night.jpg"
              alt="Sangat standing for Ardas at an evening Kirtan"
              width={654}
              height={644}
              className="aspect-[16/10] h-full w-full object-cover lg:aspect-auto"
            />
            <div className="flex flex-col items-start gap-4 p-8 sm:p-12">
              <h2
                id="wa-title"
                className="font-display text-3xl leading-tight tracking-tighter text-white sm:text-4xl"
              >
                Join the Kirtan Learning WhatsApp channel
              </h2>
              <p className="text-white/85">
                One channel for all Kirtan learning communications across New Zealand.
              </p>
              <ul className="grid list-none gap-2.5 p-0">
                {[
                  'New classes and listings as they are added',
                  'Upcoming Kirtan events and opportunities',
                  'A place to ask questions and meet other learners',
                  'Ask the admins to add or update a listing',
                ].map((item) => (
                  <li key={item} className="relative pl-[22px]">
                    <span className="absolute left-0.5 top-[0.62em] h-2 w-2 rounded-full bg-[#8FE3B4]" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="btn mt-1.5 bg-[#25D366] text-[#06301F] hover:bg-[#3BE07A]"
              >
                <AiOutlineWhatsApp size={20} aria-hidden />
                Join the channel
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <div className="grid grid-cols-2 sm:grid-cols-4" aria-label="Photos from our Kirtan evenings">
        {STRIP.map((photo) => (
          <Image
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            width={700}
            height={525}
            className="aspect-[4/3] w-full object-cover"
          />
        ))}
      </div>
    </>
  )
}
