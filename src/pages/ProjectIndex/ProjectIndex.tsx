import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { PageHeader } from './parts/PageHeader/PageHeader'
import { InnerContent } from './parts/InnerContent/InnerContent'
import { PageBg } from '../../components/PageBg/PageBg'
import { motion } from 'framer-motion'

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

export function ProjectIndex() {
    const { projects } = useSelector((storeState: RootState) => storeState.projectModule)
    const { isTouchDevice } = useSelector((storeState: RootState) => storeState.systemModule)

    return (
        <motion.section
            variants={containerVatiants}
            initial={'hidden'}
            animate={'visible'}
            exit={'hidden'}
            className='project-index'
        >
            <PageBg />
            <PageHeader />
            <InnerContent isTouchDevice={isTouchDevice} projects={projects} />
        </motion.section>
    )
}
