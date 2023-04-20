import { motion } from 'framer-motion'
import { Text } from '../../components/Text/Text'
import { Link } from 'react-router-dom'
import { BsDash } from 'react-icons/bs'
import { useRef, useState } from 'react'
const containerVatiants = {
    hidden: {
        opacity: 0,
        transition: { delay: 0.25, duration: 0.5, ease: 'easeInOut' },
    },
    visible: {
        opacity: 1,
        transition: { delay: 0.25, duration: 0.5, ease: 'easeInOut' },
    },
}

export function ProjectDetails() {
    const innerRef = useRef<HTMLElement | null>(null)
    const [scrollX, setScrollX] = useState(0)

    function handleWheel(ev: React.WheelEvent<HTMLDivElement>) {
        if (!innerRef.current) return
        const { deltaY } = ev
        const movementAmount = 75
        const end = (innerRef.current.scrollWidth - window.innerWidth) * -1
        if (deltaY > 0 && scrollX >= end) {
            setScrollX(prevX => prevX - movementAmount)
        } else if (deltaY < 0 && scrollX < 0) {
            setScrollX(prevX => prevX + movementAmount)
        }
    }

    return (
        <motion.section
            variants={containerVatiants}
            initial={'hidden'}
            animate={'visible'}
            exit={'hidden'}
            className='project-details disable-scrollbar'
            onWheel={handleWheel}
        >
            <section
                ref={innerRef}
                style={{ transform: `translate3d(${scrollX}px,0px,0px)` }}
                className='inner layout-padding-inline'
            >
                <div className='header'>
                    <Link data-hover={true} to={'/project'} className='back-btn'>
                        <BsDash />
                        Back To Index
                    </Link>
                    <Text size='medium'>Lorem Ipsum</Text>
                    <Text>Lorem Ipsum dolor sit amet</Text>
                </div>
                <section className='images'>
                    <div className='img-container'>
                        <img
                            src='https://res.cloudinary.com/dsperrtyj/image/upload/v1681950443/editorquix-min_uvmrwh.png'
                            alt='lorem ipsum'
                        />
                    </div>
                </section>
                <section className='footer'></section>
            </section>
        </motion.section>
    )
}
