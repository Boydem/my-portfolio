import { useEffect, useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import { RootState } from '../../store/store'
import { useSelector } from 'react-redux'
import { cubicBezier, motion } from 'framer-motion'

export function Cursor() {
    const { mousePos, target } = useSelector((storeState: RootState) => storeState.systemModule)
    const [lastHoveredTarget, setLastHoveredTarget] = useState<Element | null>(null)
    const [isHover, setIsHover] = useState<boolean>(false)
    const [isLinkHover, setIsLinkHover] = useState<boolean>(false)

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

    useEffect(() => {
        handleHoverEffects(target)
    }, [target])

    return (
        <motion.div
            className='cursor'
            animate={{
                x: window.innerWidth > mousePos.x + 20 ? mousePos.x : window.innerWidth - 20,
                y: window.innerHeight > mousePos.y + 20 ? mousePos.y : window.innerHeight - 20,
            }}
            transition={{ duration: 0.1, ease: cubicBezier(0, 1, 0, 1) }}
        >
            <div className={`cursor-shape ${isHover ? 'hover' : ''} ${isLinkHover ? 'link-hover' : ''}`}></div>
            <div className='cursor-cross'>{isLinkHover ? <BsPlus color='var(--c-bg)' /> : null}</div>
        </motion.div>
    )
}
