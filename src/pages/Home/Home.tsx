import { LightDarkButtons } from '../../components/LightDarkButtons/LightDarkButtons'
import { Logo } from '../../components/Logo/Logo'
import { Text } from '../../components/Text/Text'
import { Gallery } from './parts/Gallery/Gallery'

export function Home() {
    return (
        <section className='home'>
            <div className='flex space-between align-bottom'>
                <Logo size={'large'} />
                <LightDarkButtons />
            </div>
            <Gallery />
            <Text>
                Frontend developer <br /> based in Tel Aviv.
            </Text>
        </section>
    )
}
