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
                <div className='image-container'>
                    <img
                        src='https://res.cloudinary.com/dsperrtyj/image/upload/v1682248960/me-min_uzscpe.png'
                        alt='Noam dahan'
                    />
                </div>
                <div className='text-container'>
                    <Text type='title'>Hello world</Text>
                </div>
            </InnerContent>
        </section>
    )
}
