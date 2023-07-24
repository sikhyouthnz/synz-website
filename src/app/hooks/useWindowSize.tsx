"use client"
import { useEffect, useState } from "react"

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

    useEffect(() => {
        window.addEventListener('load', () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight })
        })
        window.addEventListener('resize', () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight })
        })
    }, [])

    return windowSize
}