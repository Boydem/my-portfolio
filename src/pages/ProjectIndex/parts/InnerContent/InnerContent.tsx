import { MouseEvent, useState } from 'react'
import { Text } from '../../../../components/Text/Text'
import { IProject } from '../../../../models/project'
import { Link } from 'react-router-dom'

interface Props {
    projects: IProject[]
    isTouchDevice: boolean
}

export function InnerContent({ projects, isTouchDevice }: Props) {
    const [hoveredProject, setHoveredProject] = useState<IProject | null>(null)
    const [hoverState, setHoverState] = useState<'enter' | 'leave' | null>(null)

    function handleMouseHover(ev: MouseEvent<HTMLLIElement>, type: 'enter' | 'leave', proj: IProject) {
        if (isTouchDevice) return
        setHoveredProject(proj)
        setHoverState(type)
        if (type === 'leave') {
            setHoveredProject(null)
            setHoverState(null)
        }
    }
    return (
        <div className='inner-content'>
            {!isTouchDevice ? (
                <div className='projects-image'>
                    {projects.map(proj => (
                        <div
                            style={
                                {
                                    '--tl': hoveredProject === proj && hoverState === 'leave' ? 1 : 0,
                                    '--tr': hoveredProject === proj && hoverState === 'leave' ? 1 : 0,
                                    '--bl': hoveredProject === proj && hoverState === 'enter' ? 1 : 0,
                                    '--br': hoveredProject === proj && hoverState === 'enter' ? 1 : 0,
                                } as React.CSSProperties
                            }
                            className={`img-container ${hoveredProject === proj ? 'hovered' : ''}`}
                            key={`pi-${proj._id}`}
                        >
                            <img src={proj.imgsURL[0]} alt={proj.title} />
                        </div>
                    ))}
                </div>
            ) : null}
            <ul className='projects-list clean-list'>
                {projects.map(proj => (
                    <li
                        data-hover
                        key={`pl-${proj._id}`}
                        onMouseEnter={ev => handleMouseHover(ev, 'enter', proj)}
                        onMouseLeave={ev => handleMouseHover(ev, 'leave', proj)}
                    >
                        <Link to={`/project/${proj._id}`}>
                            <Text type='title' size='medium'>
                                {proj.title}
                            </Text>
                            <Text size='xsmall'>{proj.stack[0]}</Text>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
