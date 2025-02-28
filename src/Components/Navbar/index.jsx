import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { NavLink} from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'


const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'

    
    return (
        <nav className='w-full flex justify-between items-center fixed z-10 top-0 py-5 px-8 text-base font-light bg-gradient-to-r from-blue-400 via-violet-300 to-rose-300'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold'>
                    <NavLink 
                        to='/'
                    >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/' 
                        className={({isActive}) => isActive? activeStyle : undefined}
                    >
                        All
                    </NavLink>
                </li>
                {
                    context.categories?.map((category, index) => (
                        <li>
                            <NavLink 
                                key={index}
                                to={`/category/${category}`}
                                className={({ isActive }) => (isActive ? activeStyle : undefined)}
                            >
                                {category}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    consuelo.goche@gmail.com
                </li>
                <li>
                    <NavLink 
                        to='/my-orders'
                        className={({isActive}) => isActive? activeStyle : undefined}
                    >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/my-account'
                        className={({isActive}) => isActive? activeStyle : undefined}
                    >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/sign-in'
                        className={({isActive}) => isActive? activeStyle : undefined}
                    >
                        Sign In
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/toys'
                        className={({isActive}) => isActive? activeStyle : undefined}
                    >
                        Toys
                    </NavLink>
                </li>
                <li className="flex gap-1">
                    <ShoppingBagIcon className='h-6 w-6 text-black'/>
                    <span>{context.cartProducts.length}</span>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;