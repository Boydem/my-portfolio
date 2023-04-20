import { useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { Text } from '../Text/Text'
import { motion } from 'framer-motion'
import { MenuPopup } from './parts/MenuPopup/MenuPopup'

export interface IMenuItem {
    _id: string
    title: string
    url: string
}

const items: IMenuItem[] = [
    { _id: '1', title: 'Home', url: '/' },
    { _id: '2', title: 'Project Index', url: '/project' },
    { _id: '3', title: 'Info', url: '/info' },
]

export function Menu() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    function onToggleMenu() {
        setIsOpen(prev => !prev)
    }

    return (
        <>
            <button onClick={onToggleMenu} data-hover={true} className='menu'>
                <BiMenuAltRight />
                <Text size='small' display='inline'>
                    Menu
                </Text>
            </button>
            {isOpen ? <MenuPopup menuItems={items} onToggleMenu={onToggleMenu} /> : null}
        </>
    )
}
