import { useLayoutEffect, useState } from 'react'
import { utilService } from '../services/util.service'

export function useWindowSize() {
    const [windowSize, setSize] = useState({ vw: 0, vh: 0 })
    useLayoutEffect(() => {
        const debouncedUpdateSize = utilService.debounce(updateSize)
        function updateSize() {
            setSize({ vw: window.innerWidth, vh: window.innerHeight })
        }
        window.addEventListener('resize', debouncedUpdateSize)
        updateSize()
        return () => window.removeEventListener('resize', debouncedUpdateSize)
    }, [])
    return windowSize
}
