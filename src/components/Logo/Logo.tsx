interface Props {
    size: 'small' | 'large'
}
export function Logo({ size = 'small' }: Props) {
    return (
        <div className={`logo ${size}`}>
            <span>Noam</span>
            <span>Dahan</span>
            <span>Portfolio</span>
        </div>
    )
}
