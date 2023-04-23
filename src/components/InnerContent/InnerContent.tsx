import { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

export function InnerContent({ children }: Props) {
    return <div className='inner-content'>{children}</div>
}
