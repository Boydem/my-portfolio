import { useCallback, useEffect, useState } from 'react'

export function useTouchDevice() {
    const [isTouchDevice, setIsTouchDevice] = useState(false)
    const detectTouchDevice = useCallback(() => {
        setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
    }, [])
    useEffect(() => {
        detectTouchDevice()
    }, [detectTouchDevice])
    return isTouchDevice
}
