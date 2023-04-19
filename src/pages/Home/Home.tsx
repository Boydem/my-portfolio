import { LightDarkButtons } from '../../components/LightDarkButtons/LightDarkButtons'
import { Logo } from '../../components/Logo/Logo'
import { Text } from '../../components/Text/Text'
import { Gallery } from './parts/Gallery/Gallery'

export function Home() {
    return (
        <section className='home'>
            <header className='flex space-between align-bottom'>
                <Logo size={'large'} />
                <LightDarkButtons />
            </header>
            <Gallery />
            <Text>
                Frontend developer <br /> based in Tel Aviv.
            </Text>
        </section>
    )
}
