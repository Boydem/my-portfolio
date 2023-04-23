import { Link } from 'react-router-dom'
import { Text } from '../../../../components/Text/Text'
import { IProjectWithNext } from '../../../../models/project'
import { VscGithubAlt, VscArrowLeft, VscLinkExternal } from 'react-icons/vsc'

interface Props {
    project: IProjectWithNext
}
export function InnerContent({ project }: Props) {
    return (
        <>
            <div className='header layout-padding-inline'>
                <div className='links layout-padding-inline'>
                    <div className='column'>
                        <Link
                            className='back-btn'
                            data-hover={true}
                            to={'/project'}
                            data-tooltip='Back to index'
                            data-tooltip-dir='right'
                        >
                            <VscArrowLeft />
                        </Link>
                    </div>
                    <div className='column'>
                        <Link
                            data-tooltip='Open Repository'
                            data-tooltip-dir='bottom'
                            target='_blank'
                            data-hover={true}
                            to={project.repoURL}
                        >
                            <VscGithubAlt />
                        </Link>
                        <Link
                            data-tooltip='Open App'
                            data-tooltip-dir='bottom'
                            target='_blank'
                            data-hover={true}
                            to={project.url}
                        >
                            <VscLinkExternal />
                        </Link>
                    </div>
                </div>
                <div className='title-wrapper flex column'>
                    <Text type='title' size='medium'>
                        {project.title}
                    </Text>
                    <Text size='xsmall'>{project.desc}</Text>
                </div>
                <div className='scroll-indicator'>
                    <Text display={'inline'} type='title' size='xsmall'>
                        Scroll
                    </Text>
                    <span className='scroll-animated'></span>
                </div>
            </div>
            <section className='images'>
                {project.imgsURL.map((imgURL, index) => (
                    <img key={index} src={imgURL} alt='lorem ipsum' />
                ))}
            </section>
            <section className='next-project layout-padding-inline'>
                <div className='container'>
                    <Link to={`/project/${project.nextProject._id}`}>
                        <img
                            className='next-img image-filter'
                            src={project.nextProject.img}
                            alt={project.nextProject.title}
                            data-link-hover={true}
                        />
                        <Text type='title' data-hover={true}>
                            Next
                        </Text>
                    </Link>
                </div>
            </section>
        </>
    )
}
