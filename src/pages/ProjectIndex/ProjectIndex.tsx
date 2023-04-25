import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { PageBg } from '../../components/PageBg/PageBg'
import { PageHeader } from '../../components/PageHeader/PageHeader'
import { useState } from 'react'
import { IProject } from '../../models/project'
import { ProjectsImage } from './parts/ProjectsImage/ProjectsImage'
import { InnerContent } from '../../components/InnerContent/InnerContent'
import { ProjectsList } from './parts/ProjetsList/ProjectsList'

export function ProjectIndex() {
    const { projects } = useSelector((storeState: RootState) => storeState.projectModule)
    const { isTouchDevice } = useSelector((storeState: RootState) => storeState.systemModule)
    const [hoveredProject, setHoveredProject] = useState<IProject | null>(null)
    const [hoverState, setHoverState] = useState<'enter' | 'leave' | null>(null)

    function handleMouseHover(type: 'enter' | 'leave', proj: IProject) {
        if (isTouchDevice) return
        if (type === 'leave') {
            setHoveredProject(null)
        } else {
            setHoveredProject(proj)
        }
        setHoverState(type)
    }
    return (
        <section className='project-index'>
            <PageBg />
            <PageHeader title='projects' />
            <InnerContent>
                {!isTouchDevice ? (
                    <ProjectsImage projects={projects} hoveredProject={hoveredProject} hoverState={hoverState} />
                ) : null}
                <ProjectsList projects={projects} handleMouseHover={handleMouseHover} />
            </InnerContent>
        </section>
    )
}
