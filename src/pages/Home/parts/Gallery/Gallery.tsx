import { IGalleryImage } from '../../Home'
import { useState, useRef, useEffect } from 'react'
import { useMouseMove } from '../../../../hooks/useMouseMove'
import { motion } from 'framer-motion'
interface Props {
    items: IGalleryImage[]
}

export function Gallery({ items }: Props) {
    const [translateX, setTranslateX] = useState<number>(0)
    const contentRef = useRef<HTMLDivElement>(null)
    const innerRef = useRef<HTMLDivElement>(null)
    function handleGalleryMove(clientX: number) {
        const shouldHandleGalleryMove = contentRef.current && innerRef.current
        if (!shouldHandleGalleryMove) return
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
            setTranslateX(-percent * totalDistance)
        }
    }
    const mousePos = useMouseMove()
    useEffect(() => {
        handleGalleryMove(mousePos.x)
    }, [mousePos.x])

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}
            className='gallery layout-padding-inline disable-scrollbar'
        >
            <div ref={innerRef} className='inner'>
                <div
                    ref={contentRef}
                    className='contnet'
                    style={{ transform: `translate3d(${translateX}px, 0px, 0px)` }}
                >
                    {items && items.length
                        ? items.map(item => (
                              <div data-link-hover={true} className='item-container' key={item._id}>
                                  <img src={item.imgURL} alt='project' />
                              </div>
                          ))
                        : Array(5)
                              .fill(undefined)
                              .map((_, index) => (
                                  <div key={index} className='item-container'>
                                      <div className='loader flex flex-center'>Loading...</div>
                                  </div>
                              ))}
                </div>
            </div>
        </motion.section>
    )
}
