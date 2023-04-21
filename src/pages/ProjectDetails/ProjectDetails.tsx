import { motion } from 'framer-motion'
import { Text } from '../../components/Text/Text'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { BsDash } from 'react-icons/bs'
import { useEffect, useRef, useState } from 'react'
import { IProject } from '../Home/Home'
import { projectsService } from '../../services/project.service'
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

export function ProjectDetails() {
    // Component data
    const [project, setProject] = useState<IProject | undefined>()
    const { projectId } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        console.log('projectId:', projectId)
        if (projectId !== '' && projectId !== undefined) getProject(projectId)
        else navigate('/')
    }, [projectId, navigate])

    const getProject = async (projId: string) => {
        try {
            const data = await projectsService.getProjectById(projId)
            setProject(data)
        } catch (err) {
            console.log('err:', err)
        }
    }
    console.log('project:', project)
    // Component Scroll functionality
    const innerRef = useRef<HTMLElement | null>(null)
    const [scrollX, setScrollX] = useState(0)

    function handleWheel(ev: React.WheelEvent<HTMLDivElement>) {
        if (!innerRef.current) return
        const { deltaY } = ev
        const movementAmount = 75
        const end = (innerRef.current.scrollWidth - window.innerWidth - movementAmount) * -1
        if (deltaY > 0 && scrollX >= end) {
            setScrollX(prevX => prevX - movementAmount)
        } else if (deltaY < 0 && scrollX < 0) {
            setScrollX(prevX => prevX + movementAmount)
        }
    }

    return (
        <motion.section
            variants={containerVatiants}
            initial={'hidden'}
            animate={'visible'}
            exit={'hidden'}
            className='project-details disable-scrollbar'
            onWheel={handleWheel}
        >
            <section
                ref={innerRef}
                style={{ transform: `translate3d(${scrollX}px,0px,0px)` }}
                className='inner layout-padding-inline'
            >
                {project ? (
                    <>
                        <div className='header'>
                            <Link data-hover={true} to={'/project'} className='back-btn'>
                                <BsDash />
                                Back To Index
                            </Link>
                            <Text size='medium'>Lorem Ipsum</Text>
                            <Text>Lorem Ipsum dolor sit amet</Text>
                        </div>
                        <section className='images'>
                            <div className='img-container'>
                                <img src={project.imgsURL[0]} alt='lorem ipsum' />
                            </div>
                        </section>
                        <section className='footer'></section>
                    </>
                ) : null}
            </section>
        </motion.section>
    )
}
