import { motion } from 'framer-motion'
import { MenuItems } from '../MenuItems/MenuItems'
import { IMenuItem } from '../../Menu'

interface Props {
    menuItems: IMenuItem[]
}

export function MenuPopup({ menuItems }: Props) {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className='menu-popup'
        >
            <MenuItems />
        </motion.section>
    )
}
