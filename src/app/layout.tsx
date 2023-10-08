import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Contact from './components/Contact'

const poppins = Poppins({
  weight: ['600', '500', '400', '300'],
  subsets: ['latin']
})

export const metadata = {
  title: 'SYNZ - Sikh Youth New Zealand',
  description: "SYNZ is a registered charity empowering Sikh youths in New Zealand. Our website showcases annual events, career guidance, mental health talks, and more. We're a trusted, multicultural organization embodying Guru's unity message. Explore how SYNZ supports Sikh youth today.",
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
