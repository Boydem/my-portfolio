import { NavLink } from 'react-router-dom'
import { IMenuItem } from '../../Menu'
import { Text } from '../../../Text/Text'
import { motion } from 'framer-motion'
interface Props {
    menuItems: IMenuItem[]
    onToggleMenu: () => void
}

export function MenuItems({ menuItems, onToggleMenu }: Props) {
    return (
        <section className='menu-items layout-padding-block layout-padding-inline-xl'>
            {menuItems.map((item, index) => (
                <motion.div
                    onClick={onToggleMenu}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, ease: 'easeInOut', delay: index === 0 ? 0.2 : index * 0.2 + 0.2 }}
                    key={index}
                >
                    <NavLink data-hover={true} to={`${item.url}`} className='menu-link' key={item._id}>
                        <Text display='inline' size='medium'>
                            {item.title}
                        </Text>
                    </NavLink>
                </motion.div>
            ))}
        </section>
    )
}
