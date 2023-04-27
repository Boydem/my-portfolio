const PAGE_BG = 'url(https://res.cloudinary.com/dsperrtyj/image/upload/v1682590776/bg50_tf2evt.webp)'

export function PageBg() {
    return (
        <div
            className='page-bg'
            style={{
                backgroundImage: PAGE_BG,
            }}
        ></div>
    )
}
