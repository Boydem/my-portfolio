import { useCallback, useEffect, useState } from 'react'

export function Cursor() {
    const [mousePos, setMousePos] = useState<any>({ x: 0, y: 0 })
    const [lastHoveredTarget, setLastHoveredTarget] = useState<Element | null>(null)
    const [isHover, setIsHover] = useState<boolean>(false)

    const handleMouseMove = useCallback(
        (ev: MouseEvent) => {
            const target = ev.target as HTMLElement
            const { clientX, clientY } = ev

            // Check if the target or any of its parents have the data-hover attribute
            const parentWithDataHover = target ? target.closest('[data-hover="true"]') : null

            // Only update the hover state if the target has changed or the data-hover attribute has changed
            if (lastHoveredTarget !== parentWithDataHover) {
                setLastHoveredTarget(parentWithDataHover)
                setIsHover(!!parentWithDataHover)
            }

            setMousePos({ x: clientX, y: clientY })
        },
        [lastHoveredTarget]
    )

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [handleMouseMove])

    return (
        <div
            className={`cursor ${isHover ? 'hover' : ''}`}
            style={{ transform: `translate3d(${mousePos.x}px,${mousePos.y}px,0px) scale(${isHover ? 3 : 1})` }}
            // style={{
            //     transition: 'top 0.1s linear, left 0.1s linear,transform 0.13s ease-in-out',
            //     top: `${mousePos.y}px`,
            //     left: `${mousePos.x}px`,
            //     transform: `scale(${isHover ? 3 : 1})`,
            // }}
        ></div>
    )
}
