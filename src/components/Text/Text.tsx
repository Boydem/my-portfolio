import { ReactNode } from 'react'

interface Props {
    children: ReactNode
}
export function Text({ children }: Props) {
    return <section className='text'>{children}</section>
}
