import { useEffect, useRef, useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import { RootState } from '../../store/store'
import { useSelector } from 'react-redux'

export function Cursor() {
    const { mousePos, target } = useSelector((storeState: RootState) => storeState.systemModule)
    const [lastHoveredTarget, setLastHoveredTarget] = useState<Element | null>(null)
    const [isHover, setIsHover] = useState<boolean>(false)
    const [isLinkHover, setIsLinkHover] = useState<boolean>(false)
    const cursorRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const handleHoverEffects = (target: Element | null) => {
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
        }
        handleHoverEffects(target)
    }, [target])

    useEffect(() => {
        if (!cursorRef.current) return
        const x = mousePos.x - cursorRef.current.offsetWidth / 2,
            y = mousePos.y - cursorRef.current.offsetHeight / 2
        const keyframes = {
            transform: `translate(${x}px,${y}px)`,
        }
        cursorRef.current.animate(keyframes, { duration: 200, fill: 'forwards' })
    }, [mousePos])

    return (
        <div className='cursor' ref={cursorRef}>
            <div className={`cursor-shape ${isHover ? 'hover' : ''} ${isLinkHover ? 'link-hover' : ''}`}></div>
            <div className='cursor-cross'>{isLinkHover ? <BsPlus color='var(--c-bg)' /> : null}</div>
        </div>
    )
}
