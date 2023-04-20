import { motion } from 'framer-motion'
import { MenuItems } from '../MenuItems/MenuItems'
import { IMenuItem } from '../../Menu'
import { Logo } from '../../../Logo/Logo'
import { Text } from '../../../Text/Text'

interface Props {
    menuItems: IMenuItem[]
    onToggleMenu: () => void
}
const motionEffect = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.25, ease: 'easeInOut' },
}
export function MenuPopup({ menuItems, onToggleMenu }: Props) {
    return (
        <motion.section {...motionEffect} className='menu-popup layout-padding-inline layout-padding-block'>
            <Logo onToggleMenu={onToggleMenu} size='small' />
            <MenuItems menuItems={menuItems} onToggleMenu={onToggleMenu} />
            <Text type='muted' classNames='layout-padding-inline-xl'>
                Hello world!
            </Text>
        </motion.section>
    )
}
