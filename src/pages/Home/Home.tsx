import { useState } from 'react'
import { LightDarkButtons } from '../../components/LightDarkButtons/LightDarkButtons'
import { Logo } from '../../components/Logo/Logo'
import { Text } from '../../components/Text/Text'
import { Gallery } from './parts/Gallery/Gallery'

export interface IGalleryImage {
    _id: string
    imgURL: string
}

export function Home() {
    const [galleryImages, setGalleryImages] = useState<IGalleryImage[] | []>([])
    return (
        <section className='home'>
            <header className='header flex justify-between align-end'>
                <Logo size={'large'} />
                <LightDarkButtons />
            </header>
            <Gallery items={galleryImages} />
            <div className='outro'>
                <Text>
                    Frontend developer <br /> based in Tel Aviv.
                </Text>
            </div>
        </section>
    )
}
