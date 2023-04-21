import { Link } from 'react-router-dom'
import { Text } from '../../../../components/Text/Text'
import { BsDash } from 'react-icons/bs'
import { IProjectWithNext } from '../../../../models/project'

interface Props {
    project: IProjectWithNext
}

export function InnerContent({ project }: Props) {
    return (
        <>
            <div className='header'>
                <Link data-hover={true} to={'/project'} className='back-btn'>
                    <BsDash />
                    Back To Index
                </Link>
                <Text size='medium'>{project.title}</Text>
                <Text>{project.desc}</Text>
            </div>
            <section className='images'>
                <div className='img-container'>
                    {project.imgsURL.map(imgURL => (
                        <img src={imgURL} alt='lorem ipsum' />
                    ))}
                </div>
            </section>
            <section className='next-project'>
                <div className='container'>
                    <Link to={`/project/${project.nextProject._id}`}>
                        <img
                            className='next-img image-filter'
                            src={project.nextProject.img}
                            alt={project.nextProject.title}
                            data-link-hover={true}
                        />
                        <Text data-hover={true}>Next</Text>
                    </Link>
                </div>
            </section>
        </>
    )
}
