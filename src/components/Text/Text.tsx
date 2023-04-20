import { ReactNode } from 'react'
import { motion } from 'framer-motion'

type TextTypes = 'regular' | 'title' | 'muted'
type TextSizes = 'small' | 'medium' | 'large'
type TextDisplays = 'block' | 'inline'

interface Props {
    children: ReactNode
    type?: TextTypes
    size?: TextSizes
    display?: TextDisplays
    classNames?: string
    [key: string]: unknown // Rest parameter
}

export function Text({ children, type = 'regular', size = 'small', display = 'block', classNames, ...rest }: Props) {
    return (
        <p
            style={display === 'block' ? { width: '100%' } : { width: 'max-content' }}
            className={`text type-${type} size-${size} ${classNames}`}
            {...rest}
        >
            {children}
        </p>
    )
}
export const MotionText = motion(Text)
