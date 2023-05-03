import { Link } from 'react-router-dom'
import { InnerContent } from '../../components/InnerContent/InnerContent'
import { PageBg } from '../../components/PageBg/PageBg'
import { PageHeader } from '../../components/PageHeader/PageHeader'
import { Text } from '../../components/Text/Text'

export function Info() {
    return (
        <section className='info'>
            <PageBg />
            <PageHeader title='information' />
            <InnerContent>
                <div className='text-container'>
                    <div className='text-block'>
                        <Text size='xsmall' display='inline'>
                            About Me
                        </Text>
                        <Text size='xsmall'>
                            With a keen eye for details, a passion for problem solving, and a deep understanding of good
                            UX/UI, I bring a unique combination of skills to my role as a full-stack developer.
                        </Text>
                    </div>
                    <div className='text-block'>
                        <Text size='xsmall' display='inline'>
                            Tech Skills
                        </Text>
                        <Text size='xsmall'>
                            HTML, SCSS, JS , TS, PHP, React, Next, Vue, Angular, RESTful API’s, Socket.io, Docker,
                            Nginx, Node.js, Express, MongoDB, mySQL, GraphQL, Headless WP & WP Themes / Plugin
                            Development, UX/UI Principles, Adobe XD / PS / AI / Figma / Sketch
                        </Text>
                    </div>
                    <div className='text-block'>
                        <Text size='xsmall' display='inline'>
                            Social Links
                        </Text>
                        <Text size='xsmall'>
                            <Link target='_blank' data-hover to={'https://github.com/Boydem'}>
                                Github
                            </Link>
                            <Link target='_blank' data-hover to={'https://www.linkedin.com/in/noam-dahan-90a797227/'}>
                                Linkedin
                            </Link>
                        </Text>
                    </div>
                    <div className='text-block'>
                        <Text size='xsmall' display='inline'>
                            Mail me
                        </Text>
                        <Text data-hover size='xsmall' display='block'>
                            <Link
                                target='_blank'
                                to={'https://mail.google.com/mail/?view=cm&fs=1&to=NoamDahanDev@gmail.com'}
                            >
                                NoamDahanDev@gmail.com
                            </Link>
                        </Text>
                    </div>
                    <div className='text-block'>
                        <Text size='xsmall' display='inline'>
                            Lets talk
                        </Text>
                        <Text data-hover size='xsmall' display='block'>
                            <Link to={'tel:972523130909'}>+972523130909</Link>
                        </Text>
                    </div>
                </div>
            </InnerContent>
        </section>
    )
}
