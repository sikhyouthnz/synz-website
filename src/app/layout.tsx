import type { Metadata } from 'next'
import { Inter, Instrument_Serif } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  // Next 13's metrics table predates this face, so supply the fallback ourselves
  fallback: ['Georgia', 'Times New Roman', 'serif'],
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sikhyouth.nz'),
  title: {
    default: 'SYNZ — Sikh Youth New Zealand',
    template: '%s · SYNZ',
  },
  description:
    "SYNZ is a registered charity empowering Sikh youths in New Zealand. Annual camps, kirtan diwans, career guidance, mental health talks and more — an inclusive, youth-led national platform.",
  openGraph: {
    title: 'SYNZ — Sikh Youth New Zealand',
    description:
      'An inclusive national youth-led platform enriching and supporting the lives of Sikh youths of New Zealand.',
    type: 'website',
    locale: 'en_NZ',
    images: ['/synz-logo.jpeg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-NZ" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <head>
        {/* Scroll-reveal wrappers start hidden — un-hide them when JS is off */}
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important}`}</style>
        </noscript>
      </head>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-5 focus:py-2 focus:text-sm focus:text-paper"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
