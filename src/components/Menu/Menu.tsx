import { useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { Text } from '../Text/Text'
import { motion, AnimatePresence } from 'framer-motion'
import { MenuPopup } from './parts/MenuPopup/MenuPopup'

export interface IMenuItem {
    _id: string
    title: string
    url: string
}

const menuItems: IMenuItem[] = [
    { _id: '1', title: 'Home', url: '/' },
    { _id: '2', title: 'Project Index', url: '/project' },
    { _id: '3', title: 'Info', url: '/info' },
]

export function Menu() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    function toggleMenu() {
        setIsOpen(prev => !prev)
    }

    return (
        <>
            <button onClick={toggleMenu} data-hover={true} className='menu'>
                <AnimatePresence mode='wait'>
                    <motion.span
                        key={`${isOpen ? 'close' : 'menu'}`}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className='menu-btn'
                    >
                        {isOpen ? 'Close' : 'Menu'}
                        {isOpen ? null : <BiMenuAltRight />}
                    </motion.span>
                </AnimatePresence>
            </button>
            <AnimatePresence>
                {isOpen ? <MenuPopup menuItems={menuItems} onToggleMenu={toggleMenu} /> : null}
            </AnimatePresence>
        </>
    )
}
