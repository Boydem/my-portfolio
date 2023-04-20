import { useCallback, useEffect, useState } from 'react'
import { useMouseMove } from '../../hooks/useMouseMove'

export function Cursor() {
    // const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
    const [lastHoveredTarget, setLastHoveredTarget] = useState<Element | null>(null)
    const [isHover, setIsHover] = useState<boolean>(false)
    const [isLinkHover, setIsLinkHover] = useState<boolean>(false)

    const handleHoverEffects = useCallback(
        (target: HTMLElement) => {
            // Check if the target or any of its parents have the data-hover attribute
            const parentWithDataHover = target ? target.closest('[data-hover="true"]') : null

            // Only update the hover state if the target has changed or the data-hover attribute has changed
            if (lastHoveredTarget !== parentWithDataHover) {
                setLastHoveredTarget(parentWithDataHover)
                setIsHover(!!parentWithDataHover)
            }

            // Check if the target or any of its parents have the data-link-hover attribute
            const parentWithDataLinkHover = target ? target.closest('[data-link-hover="true"]') : null

            // Only update the link hover state if the target has changed or the data-link-hover attribute has changed
            if (lastHoveredTarget !== parentWithDataLinkHover) {
                setLastHoveredTarget(parentWithDataLinkHover)
                setIsLinkHover(!!parentWithDataLinkHover)
            }
        },
        [lastHoveredTarget]
    )
    const mousePos = useMouseMove(handleHoverEffects)

    return (
        <div
            className={`cursor ${isHover ? 'hover' : ''} ${isLinkHover ? 'link-hover' : ''}`}
            style={{
                transform: `translate3d(${mousePos.x}px,${mousePos.y}px,0px) scale(${isHover || isLinkHover ? 3 : 1})`,
            }}
        ></div>
    )
}
