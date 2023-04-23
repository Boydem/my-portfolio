import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IProject } from '../../../../models/project'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store/store'
interface Props {
    items: IProject[]
}

export function Gallery({ items }: Props) {
    const [translateX, setTranslateX] = useState<number>(0)
    const contentRef = useRef<HTMLDivElement>(null)
    const innerRef = useRef<HTMLDivElement>(null)

    const { isTouchDevice } = useSelector((storeState: RootState) => storeState.systemModule)
    const { mousePos } = useSelector((storeState: RootState) => storeState.systemModule)

    useEffect(() => {
        function handleGalleryMove(clientX: number) {
            if (isTouchDevice) return
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

        if (!isTouchDevice) {
            handleGalleryMove(mousePos.x)
        }
    }, [mousePos.x, isTouchDevice])

    return (
        <section className='gallery layout-padding-inline disable-scrollbar'>
            <div ref={innerRef} className='inner disable-scrollbar'>
                <div
                    ref={contentRef}
                    className='contnet disable-scrollbar'
                    style={{ transform: `translate3d(${translateX}px, 0px, 0px)` }}
                >
                    {items && items.length
                        ? items.map(item => (
                              <div
                                  data-link-hover={isTouchDevice ? false : true}
                                  className='item-container'
                                  key={item._id}
                              >
                                  <Link to={`/project/${item._id}`}>
                                      <img className='image-filter' src={item.imgsURL[0]} alt={item.title} />
                                  </Link>
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
        </section>
    )
}
