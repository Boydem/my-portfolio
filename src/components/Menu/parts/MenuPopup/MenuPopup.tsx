import { motion } from 'framer-motion'
import { MenuItems } from '../MenuItems/MenuItems'
import { IMenuItem } from '../../Menu'
import { Logo } from '../../../Logo/Logo'

interface Props {
    menuItems: IMenuItem[]
    onToggleMenu: () => void
}

export function MenuPopup({ menuItems, onToggleMenu }: Props) {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className='menu-popup layout-padding-inline layout-padding-block'
        >
            <Logo onToggleMenu={onToggleMenu} size='small' />
            <MenuItems menuItems={menuItems} onToggleMenu={onToggleMenu} />
        </motion.section>
    )
}
