import { Logo } from '../../components/Logo/Logo'
import { Text } from '../../components/Text/Text'
import { Gallery } from './parts/Gallery/Gallery'

export function Home() {
    return (
        <section className='home'>
            <Logo />
            <Gallery />
            <Text>Hello text</Text>
        </section>
    )
}
