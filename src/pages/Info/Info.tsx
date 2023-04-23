import { InnerContent } from '../../components/InnerContent/InnerContent'
import { PageBg } from '../../components/PageBg/PageBg'
import { PageHeader } from '../../components/PageHeader/PageHeader'
import { Text } from '../../components/Text/Text'

export function Info() {
    return (
        <section className='info'>
            <PageBg />
            <PageHeader title={'information'} />
            <InnerContent>
                <div className='text-container'>
                    <div className='text-block'>
                        <Text display={'inline'} type='title'>
                            About Me
                        </Text>
                        <Text size='xsmall'>
                            With a keen eye for details, a passion for problem solving, and a deep understanding of good
                            UX/UI, I bring a unique combination of skills to my role as a full-stack developer.
                        </Text>
                    </div>
                    <div className='text-block'>
                        <Text display={'inline'} type='title'>
                            Tech Skills
                        </Text>
                        <Text size='xsmall'>
                            With a keen eye for details, a passion for problem solving, and a deep understanding of good
                            UX/UI, I bring a unique combination of skills to my role as a full-stack developer.
                        </Text>
                    </div>
                </div>
            </InnerContent>
        </section>
    )
}
