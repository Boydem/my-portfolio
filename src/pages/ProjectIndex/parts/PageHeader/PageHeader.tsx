import { Logo } from '../../../../components/Logo/Logo'
import { Text } from '../../../../components/Text/Text'

export function PageHeader() {
    return (
        <header className='page-header layout-padding-inline-xl'>
            <Logo size='small' />
            <Text type='title' size='large' display='inline' classNames='page-title'>
                Projects
            </Text>
        </header>
    )
}
