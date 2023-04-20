import { IGalleryImage } from '../../Home'
import { useLayoutEffect, useState, useRef } from 'react'
import { utilService } from '../../../../services/util.service'
interface Props {
    items: IGalleryImage[]
}

export function Gallery({ items }: Props) {
    const [translateX, setTranslateX] = useState<number>(0)
    const contentRef = useRef<HTMLDivElement>(null)
    const innerRef = useRef<HTMLDivElement>(null)
    useLayoutEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    function handleMouseMove(ev: MouseEvent) {
        if (!contentRef.current || !innerRef.current) return
        const { clientX } = ev
        const innerWidth = innerRef.current.offsetWidth
        const contentWidth = contentRef.current.offsetWidth
        const margin = 0.2 * innerWidth
        const trackWidth = 0.8 * innerWidth
        const totalDistance = contentWidth - innerWidth

        const end = innerWidth - (innerWidth - trackWidth) / 2
        const start = innerRef.current.offsetLeft + margin
        if (clientX < start) setTranslateX(0)
        else if (clientX > end) setTranslateX(-totalDistance)
        else if (clientX > start && clientX < end) {
            const percent = (clientX - start) / (end - start)
            const distance = percent * totalDistance
            setTranslateX(-distance)
        }
    }
    return (
        <section className='gallery disable-scrollbar'>
            <div ref={innerRef} className='inner'>
                <div
                    ref={contentRef}
                    className='contnet'
                    style={{ transform: `translate3d(${translateX}px, 0px, 0px)` }}
                >
                    {items && items.length
                        ? items.map(item => (
                              <div className='item-container' key={item._id}>
                                  <img src={item.imgURL} alt='project' />
                              </div>
                          ))
                        : Array(10)
                              .fill(undefined)
                              .map((_, index) => (
                                  <div key={index} className='item-container'>
                                      <div className='loader flex flex-center'>Loading...</div>
                                  </div>
                              ))}
                </div>
            </div>
        </section>
    )
}
