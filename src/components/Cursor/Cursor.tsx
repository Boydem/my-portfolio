import { useCallback, useState } from 'react'
import { useMouseMove } from '../../hooks/useMouseMove'
import { BsPlus } from 'react-icons/bs'

export function Cursor() {
    // const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
    const [lastHoveredTarget, setLastHoveredTarget] = useState<Element | null>(null)
    const [isHover, setIsHover] = useState<boolean>(false)
    const [isLinkHover, setIsLinkHover] = useState<boolean>(false)

    const handleHoverEffects = useCallback(
        (target: HTMLElement) => {
            // Check if the target or any of its parents have the data-hover attribute
            const parentWithDataHover = target ? target.closest('[data-hover="true"]') : null
            if (lastHoveredTarget !== parentWithDataHover) {
                setIsHover(!!parentWithDataHover)
            }

            // Check if the target or any of its parents have the data-link-hover attribute
            const parentWithDataLinkHover = target ? target.closest('[data-link-hover="true"]') : null
            if (lastHoveredTarget !== parentWithDataLinkHover) {
                setIsLinkHover(!!parentWithDataLinkHover)
            }
            setLastHoveredTarget(parentWithDataHover || parentWithDataLinkHover || null)
        },
        [lastHoveredTarget]
    )
    const mousePos = useMouseMove(handleHoverEffects)
    return (
        <div
            className={`cursor ${isHover ? 'hover' : ''} ${isLinkHover ? 'link-hover' : ''}`}
            style={{
                transform: `translate3d(${
                    window.innerWidth > mousePos.x + 20 ? mousePos.x : window.innerWidth - 20
                }px,${window.innerHeight > mousePos.y + 20 ? mousePos.y : window.innerHeight - 20}px,0px) scale(${
                    isHover || isLinkHover ? 2.25 : 1
                })`,
            }}
        >
            {isLinkHover ? <BsPlus color='var(--c-bg)' /> : null}
        </div>
    )
}
