import { MouseEvent, useState } from 'react'
import { Text } from '../../../../components/Text/Text'
import { IProject } from '../../../../models/project'

interface Props {
    projects: IProject[]
}

export function InnerContent({ projects }: Props) {
    const [hoveredProject, setHoveredProject] = useState<IProject | null>(null)
    const [hoverPosition, setHoverPosition] = useState<'top' | 'bottom' | null>(null)

    function handleMouseHover(ev: MouseEvent<HTMLLIElement>, type: 'enter' | 'leave', proj: IProject) {
        if (type === 'enter') {
            const rect = ev.currentTarget.getBoundingClientRect()
            const mouseY = ev.clientY - rect.top
            setHoveredProject(proj)
            setHoverPosition(mouseY > rect.height / 2 ? 'bottom' : 'top')
        } else {
            setHoveredProject(null)
            setHoverPosition(null)
        }
    }

    return (
        <div className='inner-content'>
            <div className='projects-image'>
                {projects.map(proj => (
                    <div
                        style={
                            {
                                '--tl': hoveredProject === proj && hoverPosition === 'top' ? 1 : 0,
                                '--tr': hoveredProject === proj && hoverPosition === 'top' ? 1 : 0,
                                '--bl': hoveredProject === proj && hoverPosition === 'bottom' ? 1 : 0,
                                '--br': hoveredProject === proj && hoverPosition === 'bottom' ? 1 : 0,
                            } as React.CSSProperties
                        }
                        className='img-container'
                        key={`pi-${proj._id}`}
                    >
                        <img src={proj.imgsURL[0]} alt={proj.title} />
                    </div>
                ))}
            </div>
            <ul className='projects-list clean-list'>
                {projects.map(proj => (
                    <li
                        key={`pl-${proj._id}`}
                        onMouseEnter={ev => handleMouseHover(ev, 'enter', proj)}
                        onMouseLeave={ev => handleMouseHover(ev, 'leave', proj)}
                    >
                        <Text type='title' size='medium'>
                            {proj.title}
                        </Text>
                        <Text type='title' size='small'>
                            {proj.stack[0]}
                        </Text>
                    </li>
                ))}
            </ul>
        </div>
    )
}
