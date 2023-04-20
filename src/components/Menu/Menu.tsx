import { BiMenuAltRight } from 'react-icons/bi'
import { Text } from '../Text/Text'

export function Menu() {
    return (
        <button data-hover={true} className='menu'>
            <BiMenuAltRight />
            Menu
        </button>
    )
}
