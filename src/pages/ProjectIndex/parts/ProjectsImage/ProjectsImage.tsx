import { ReactNode } from 'react'
import { IProject } from '../../../../models/project'

interface Props {
    projects: IProject[]
    hoverState: 'enter' | 'leave' | null
    hoveredProject: IProject | null
}

export function ProjectsImage({ projects, hoveredProject, hoverState }: Props) {
    return (
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
    )
}
