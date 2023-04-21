import { useEffect, useState } from 'react'
import { MousePos } from '../store/system.reducer'

export const useMouseMove = (targetHandler?: (target: HTMLElement) => void) => {
    const [mousePos, setMousePos] = useState<MousePos>({ x: 0, y: 0 })

    useEffect(() => {
        function handler(ev: MouseEvent) {
            const { clientX, clientY, target } = ev
            setMousePos({ x: clientX, y: clientY })
            if (targetHandler) targetHandler(target as HTMLElement)
        }

        window.addEventListener('mousemove', handler)
        return () => {
            window.removeEventListener('mousemove', handler)
        }
    }, [targetHandler])
    return mousePos
}
