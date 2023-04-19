interface Props {
    size: 'small' | 'large'
}
export function Logo({ size = 'small' }: Props) {
    return <section className='logo'>Noam Dahan Portfolio</section>
}
