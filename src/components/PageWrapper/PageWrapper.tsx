import { CSSProperties, ReactNode } from 'react'
import { motion } from 'framer-motion'
interface Props {
    children: ReactNode
    windowSize: { vw: number; vh: number }
}

const containerVatiants = {
    hidden: {
        opacity: 0,
        transition: { delay: 0.25, duration: 0.5, ease: 'easeInOut' },
    },
    visible: {
        opacity: 1,
        transition: { delay: 0.25, duration: 0.5, ease: 'easeInOut' },
    },
}

export function PageWrapper({ children, windowSize }: Props) {
    return (
        <motion.section
            variants={containerVatiants}
            initial={'hidden'}
            animate={'visible'}
            exit={'hidden'}
            style={{ '--vh': windowSize.vh } as CSSProperties}
            className='page-wrapper'
        >
            {children}
        </motion.section>
    )
}
