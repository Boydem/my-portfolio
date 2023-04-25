import { useEffect, useRef, useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import { RootState } from '../../store/store'
import { useSelector } from 'react-redux'
import { cubicBezier, motion } from 'framer-motion'

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

    return (
        <motion.div
            className='cursor'
            ref={cursorRef}
            animate={
                cursorRef.current
                    ? {
                          x:
                              window.innerWidth > mousePos.x + cursorRef.current.offsetWidth / 2
                                  ? mousePos.x - cursorRef.current.offsetWidth / 2
                                  : window.innerWidth - cursorRef.current.offsetWidth / 2,
                          y:
                              window.innerHeight > mousePos.y + cursorRef.current.offsetHeight / 2
                                  ? mousePos.y - cursorRef.current.offsetHeight / 2
                                  : window.innerHeight - cursorRef.current.offsetHeight / 2,
                      }
                    : { x: 0, y: 0 }
            }
            transition={{ duration: 0.1, ease: cubicBezier(0, 1, 0, 1) }}
        >
            <div className={`cursor-shape ${isHover ? 'hover' : ''} ${isLinkHover ? 'link-hover' : ''}`}></div>
            <div className='cursor-cross'>{isLinkHover ? <BsPlus color='var(--c-bg)' /> : null}</div>
        </motion.div>
    )
}
