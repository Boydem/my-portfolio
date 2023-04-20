import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

interface Props {
    size: 'small' | 'large'
    onToggleMenu?: () => void
}
export function Logo({ size = 'small', onToggleMenu }: Props) {
    return (
        <motion.div
            data-hover={size === 'small' ? true : false}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className={`logo ${size}`}
        >
            {size === 'small' ? (
                <NavLink onClick={onToggleMenu} to='/'>
                    <span>Noam</span>
                    <span>Dahan</span>
                    <span>Portfolio</span>
                </NavLink>
            ) : (
                <>
                    <span>Noam</span>
                    <span>Dahan</span>
                    <span>Portfolio</span>
                </>
            )}
        </motion.div>
    )
}
