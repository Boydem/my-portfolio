import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { PageHeader } from './parts/PageHeader/PageHeader'
import { InnerContent } from './parts/InnerContent/InnerContent'
import { PageBg } from '../../components/PageBg/PageBg'

export function ProjectIndex() {
    const { projects } = useSelector((storeState: RootState) => storeState.projectModule)
    const { isTouchDevice } = useSelector((storeState: RootState) => storeState.systemModule)

    return (
        <section className='project-index'>
            <PageBg />
            <PageHeader />
            <InnerContent isTouchDevice={isTouchDevice} projects={projects} />
        </section>
    )
}
