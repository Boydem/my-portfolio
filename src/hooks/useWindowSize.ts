import { useLayoutEffect, useState } from 'react'

export function useWindowSize() {
    const [windowSize, setSize] = useState({ vw: 0, vh: 0 })
    useLayoutEffect(() => {
        function updateSize() {
            setSize({ vw: window.innerWidth, vh: window.innerHeight })
        }
        window.addEventListener('resize', updateSize)
        updateSize()
        return () => window.removeEventListener('resize', updateSize)
    }, [])
    return windowSize
}
