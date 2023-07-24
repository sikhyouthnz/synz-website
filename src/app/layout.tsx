import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Contact from './components/Contact'

const poppins = Poppins({
  weight: ['600', '500', '400', '300'],
  subsets: ['latin']
})

export const metadata = {
  title: 'SYNZ',
  description: 'Sikh Youth New Zealand Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar /> 
        {children}
        <Contact />
      </body>
    </html>
  )
}
