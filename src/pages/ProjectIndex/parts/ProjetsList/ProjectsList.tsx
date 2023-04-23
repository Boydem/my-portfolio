import { IProject } from '../../../../models/project'
import { Text } from '../../../../components/Text/Text'
import { Link } from 'react-router-dom'

interface Props {
    projects: IProject[]
    handleMouseHover: (type: 'enter' | 'leave', proj: IProject) => void
}

export function ProjectsList({ projects, handleMouseHover }: Props) {
    return (
        <ul className='projects-list clean-list'>
            {projects.map(proj => (
                <li
                    data-hover
                    key={`pl-${proj._id}`}
                    onMouseEnter={() => handleMouseHover('enter', proj)}
                    onMouseLeave={() => handleMouseHover('leave', proj)}
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
    )
}
