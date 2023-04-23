import { CSSProperties, ReactNode } from 'react'

interface Props {
    children: ReactNode
    windowSize: { vw: number; vh: number }
}

export function PageWrapper({ children, windowSize }: Props) {
    return (
        <section style={{ '--vh': `${windowSize.vh}px` } as CSSProperties} className='page-wrapper'>
            {children}
        </section>
    )
}
