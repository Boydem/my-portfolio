import { ReactNode } from 'react'

type TextTypes = 'regular' | 'title' | 'muted'
type TextSizes = 'small' | 'medium' | 'large'
interface Props {
    children: ReactNode
    type?: TextTypes
    size?: TextSizes
}
export function Text({ children, type = 'regular', size = 'medium' }: Props) {
    return <p className={`text type-${type} size-${size}`}>{children}</p>
}
