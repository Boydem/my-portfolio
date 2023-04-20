import { ReactNode } from 'react'

type TextTypes = 'regular' | 'title' | 'muted'
type TextSizes = 'small' | 'medium' | 'large'
type TextDisplays = 'block' | 'inline'
interface Props {
    children: ReactNode
    type?: TextTypes
    size?: TextSizes
    display?: TextDisplays
}
export function Text({ children, type = 'regular', size = 'medium', display = 'block' }: Props) {
    return (
        <p
            style={display === 'block' ? { width: '100%' } : { width: 'max-content' }}
            className={`text type-${type} size-${size}`}
        >
            {children}
        </p>
    )
}
