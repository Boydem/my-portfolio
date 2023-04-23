import { Logo } from '../Logo/Logo'
import { Text } from '../Text/Text'

interface Props {
    title: string
}

export function PageHeader({ title }: Props) {
    return (
        <header className='page-header'>
            <Logo size='small' />
            <Text type='title' size='large' display={50} classNames='page-title'>
                {title}
            </Text>
        </header>
    )
}
