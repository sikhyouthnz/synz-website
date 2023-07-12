import Link from 'next/link'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  weight: ['600', '500', '400', '300'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <nav className='flex py-3 items-center justify-around'>
          <Link className='font-medium text-2xl flex items-center gap-3' href="/">
            <Image
              src="/synz-logo.jpeg"
              alt="SYNZ Logo"
              width={53}
              height={54}
            />
            Sikh Youth New Zealand
          </Link>
          <div className='text-xl flex gap-5 font-light'>
            <Link href="/blog">Blog</Link>
            <Link href="/events">Events</Link>
            <Link href="/photos">Photos</Link>
            <Link href="/">Contact</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
