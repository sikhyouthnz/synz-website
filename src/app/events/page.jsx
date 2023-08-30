'use client'
import { useState } from 'react'
import { attributes } from '../../../content/events.md'
import Image from 'next/image';
import { useWindowSize } from '../hooks/useWindowSize'

export default function Home() {
    const [showImage, setShowImage] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    let { title, events } = attributes

    const modal = {
        position: "fixed",
        zIndex: 1,
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        overflow: "auto",
        backgroundColor: "rgba(0, 0, 0, 0.8)"
    };

    const close = {
        position: "absolute",
        top: 15,
        right: 35,
        color: "#f1f1f1",
        fontSize: 40,
        fontWeight: "bold",
        cursor: "pointer"
    };

    const modalContent = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "85%",
        height: "100%",
        margin: "auto"
    };

    const windowSize = useWindowSize()

    let imgSize = { width: 621, height: 414 }

    if (windowSize.width > 1024) {
        imgSize = { width: 621, height: 414 }
    }

    return (
        <>
            <div className='flex flex-col gap-3 mx-4 md:mx-36 lg:mx-48 my-5'>
                <div className='text-3xl'>{title}</div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-12'>
                    {events.map((event, k) => (
                        <div onClick={() => {
                            setShowImage(true)
                            setSelectedImage(event.image)
                        }} key={k} className="cursor-pointer block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{event.name}</h5>
                            <p className="font-medium text-gray-500">Date: {(new Date(Date.parse(event.date))).toLocaleString('en-NZ')}</p>
                            <p className="font-medium text-gray-500">Venue: {event.venue}</p>
                            <p className="font-normal text-gray-700">{event.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            {showImage && (
                <div style={modal}>
                    <span style={close} onClick={() => { setShowImage(false) }}>
                        &times;
                    </span>
                    <div style={modalContent}>
                        <Image width={imgSize.width} height={imgSize.height} src={'/' + selectedImage} alt='event poster' />
                    </div>
                </div>
            )}
        </>
    )
}