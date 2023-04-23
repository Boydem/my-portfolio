import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { projectsService } from '../../services/project.service'
import { IProjectWithNext } from '../../models/project'
import { InnerContent } from './parts/InnerContent/InnerContent'
import { motion } from 'framer-motion'

export function ProjectDetails() {
    // Component data
    const [project, setProject] = useState<IProjectWithNext | undefined>()
    const { projectId } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        const getProject = (projId: string) => {
            try {
                const data = projectsService.getProjectById(projId)
                setProject(data)
            } catch (err) {
                console.log('err:', err)
                navigate('/')
            }
        }
        if (projectId !== '' && projectId !== undefined) getProject(projectId)
        else navigate('/')
    }, [projectId, navigate])

    // Component Scroll functionality
    const innerRef = useRef<HTMLElement | null>(null)
    const [scrollX, setScrollX] = useState(0)

    function handleWheel(ev: React.WheelEvent<HTMLDivElement>) {
        if (!innerRef.current) return
        const { deltaY } = ev
        let movementAmount = 75
        const end = (innerRef.current.scrollWidth - window.innerWidth) * -1
        if (deltaY > 0 && scrollX > end) {
            movementAmount = Math.min(movementAmount, scrollX - end)
            setScrollX(prevX => Math.max(prevX - movementAmount, end))
        } else if (deltaY < 0 && scrollX < 0) {
            movementAmount = Math.min(movementAmount, -scrollX)
            setScrollX(prevX => Math.min(prevX + movementAmount, 0))
        }
    }

    return (
        <section className='project-details disable-scrollbar' onWheel={handleWheel}>
            <motion.section animate={{ x: scrollX }} ref={innerRef} className='inner'>
                {project ? <InnerContent project={project} /> : null}
            </motion.section>
        </section>
    )
}
