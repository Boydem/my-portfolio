interface Props {
    size: 'small' | 'large'
}
export function Logo({ size = 'small' }: Props) {
    return (
        <div className={`logo ${size}`}>
            Noam <br />
            Dahan <br />
            Portfolio
        </div>
    )
}
