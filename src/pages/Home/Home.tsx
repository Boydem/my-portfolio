import { LightDarkButtons } from '../../components/LightDarkButtons/LightDarkButtons'
import { Logo } from '../../components/Logo/Logo'
import { Text } from '../../components/Text/Text'
import { Gallery } from './parts/Gallery/Gallery'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

export function Home() {
    const { projects } = useSelector((storeState: RootState) => storeState.projectModule)

    return (
        <section className='home flex flex-center'>
            <div className='container'>
                <motion.header
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.55, ease: 'easeInOut' }}
                    className='header layout-padding-inline-xl flex justify-between align-end'
                >
                    <Logo size={'large'} />
                    <LightDarkButtons />
                </motion.header>
                <Gallery items={projects} />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}
                    className='outro layout-padding-inline-xl'
                >
                    <Text type='title' size='small'>
                        Frontend developer <br /> based in Tel Aviv.
                    </Text>
                </motion.div>
            </div>
        </section>
    )
}
