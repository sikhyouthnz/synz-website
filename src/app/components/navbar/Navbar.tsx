'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
    const [showMediumWidthNav, setShowMediumWidthNav] = useState(false)
    return (
        <div>
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
                <button className='group block md:hidden' onClick={() => {
                    setShowMediumWidthNav((prevValue) => !prevValue)
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                </button>
                <div className='text-xl gap-5 font-normal hidden md:flex'>
                    <Link href="/blog">Blog</Link>
                    <Link href="/events">Events</Link>
                    <Link href="/photos">Photos</Link>
                    <Link href="/">Contact</Link>
                </div>
            </nav>

            {showMediumWidthNav &&
                <nav>
                    <div className='flex flex-col text-center text-lg'>
                        <Link className='hover:bg-gray-100' href="/blog">Blog</Link>
                        <Link className='hover:bg-gray-100' href="/events">Events</Link>
                        <Link className='hover:bg-gray-100' href="/photos">Photos</Link>
                        <Link className='hover:bg-gray-100' href="/">Contact</Link>
                    </div>
                </nav>
            }
        </div>
    )
}