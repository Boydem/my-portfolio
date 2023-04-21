import { LightDarkButtons } from '../../components/LightDarkButtons/LightDarkButtons'
import { Logo } from '../../components/Logo/Logo'
import { Text } from '../../components/Text/Text'
import { Gallery } from './parts/Gallery/Gallery'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

const containerVatiants = {
    hidden: {
        opacity: 0,
        transition: { delay: 0.25, duration: 0.5, ease: 'easeInOut' },
    },
    visible: {
        opacity: 1,
        transition: { delay: 0.25, duration: 0.5, ease: 'easeInOut' },
    },
}

export function Home() {
    const { projects } = useSelector((storeState: RootState) => storeState.projectModule)

    return (
        <motion.section
            variants={containerVatiants}
            initial={'hidden'}
            animate={'visible'}
            exit={'hidden'}
            className='home'
        >
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
        </motion.section>
    )
}
const items = [
    {
        _id: `1`,
        imgURL: 'https://res.cloudinary.com/dsperrtyj/image/upload/v1681950443/editorquix-min_uvmrwh.png',
    },
    { _id: `3`, imgURL: 'https://res.cloudinary.com/dsperrtyj/image/upload/v1681950443/airbnb-min_oyagte.png' },
    {
        _id: `4`,
        imgURL: 'https://res.cloudinary.com/dsperrtyj/image/upload/v1681951217/minesweeper-min_ty9qyk.png',
    },
    {
        _id: `5`,
        imgURL: 'https://res.cloudinary.com/dsperrtyj/image/upload/v1681951219/meme-generator-min_pnlnxo.png',
    },
    {
        _id: `6`,
        imgURL: 'https://res.cloudinary.com/dsperrtyj/image/upload/v1681950441/simon-says-min_bt33gb.png',
    },
    {
        _id: `2`,
        imgURL: 'https://camo.githubusercontent.com/53caac657115d07d361c7ee75db2b94890d5cb4f5b7f1c731b4ad1cfd30c189a/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f64737065727274796a2f696d6167652f75706c6f61642f76313637373134353837302f626974636f696e2d686f6d655f61737566666a2e706e67',
    },
]
