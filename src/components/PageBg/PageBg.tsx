const PAGE_BG = 'url(https://res.cloudinary.com/dsperrtyj/image/upload/v1682082930/bg50-min_znhlyh.png)'

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
