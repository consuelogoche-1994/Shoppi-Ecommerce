import { ShoppingBagIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'
import { NavLink} from 'react-router-dom'
import { useContext,  useState} from 'react'
import { ShoppingCartContext } from '../../Context'


const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'font-bold underline underline-offset-4'

    return (
        <nav className="w-full fixed top-0 z-10 bg-gradient-to-r from-blue-400 via-violet-300 to-rose-300 shadow-md">
          <div className="flex justify-start items-center gap-3 py-4 px-6 lg:px-8">
            {/* button in mobile */}
            <button 
              className="lg:hidden text-black focus:outline-none"
              onClick={() => context.setIsMobileNavbarOpen(!context.isMobileNavbarOpen)}
            >
              {context.isMobileNavbarOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
            {/* Logo */}
            <div className="text-xl font-semibold">
              <NavLink to="/">Shopi</NavLink>
            </div>
    
            {/* desktop */}
            <div className="lg:flex lg:items-center lg:gap-6 w-full justify-between">
              <ul className="hidden lg:flex items-center gap-3">
                <li>
                  <NavLink to="/" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
                    All
                  </NavLink>
                </li>
                {context.categories?.map((category, index) => (
                  <li key={index}>
                    <NavLink to={`/category/${category}`} className={({ isActive }) => (isActive ? activeStyle : undefined)}>
                      {category}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <ul className="flex items-center justify-end gap-3">
                <li className="hidden lg:block text-black/60">consuelo.goche@gmail.com</li>
                <li className='hidden lg:block'>
                  <NavLink to="/my-orders" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
                    My Orders
                  </NavLink>
                </li>
                <li className='hidden lg:block'>
                  <NavLink to="/my-account" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
                    My Account
                  </NavLink>
                </li>
                <li className='hidden lg:block'>
                  <NavLink to="/sign-in" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
                    Sign In
                  </NavLink>
                </li>
                <li className='hidden lg:block'>
                  <NavLink to="/toys" className={({ isActive }) => (isActive ? activeStyle : undefined)}>
                    Toys
                  </NavLink>
                </li>
                <li className="flex gap-1">
                  <ShoppingBagIcon className="h-6 w-6 text-black" />
                  <span>{context.cartProducts.length}</span>
                </li>
              </ul>

            </div>
          </div>
    
          {/* Mobile details */}
          {context.isMobileNavbarOpen && (
            <div className="lg:hidden bg-white shadow-md py-4 px-6">
              <ul className="flex flex-col gap-3">
                <li>
                  <NavLink to="/" className={({ isActive }) => (isActive ? activeStyle : undefined)} onClick={() => context.setIsMobileNavbarOpen(false)}>
                    All
                  </NavLink>
                </li>
                {context.categories?.map((category, index) => (
                  <li key={index}>
                    <NavLink to={`/category/${category}`} className={({ isActive }) => (isActive ? activeStyle : undefined)} onClick={() => context.setIsMobileNavbarOpen(false)}>
                      {category}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <hr className="my-2 border-gray-300" />
              <ul className="flex flex-col gap-3">
                <li className="text-black/60">consuelo.goche@gmail.com</li>
                <li>
                  <NavLink to="/my-orders" className={({ isActive }) => (isActive ? activeStyle : undefined)} onClick={() => context.setIsMobileNavbarOpen(false)}>
                    My Orders
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/my-account" className={({ isActive }) => (isActive ? activeStyle : undefined)} onClick={() => context.setIsMobileNavbarOpen(false)}>
                    My Account
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/sign-in" className={({ isActive }) => (isActive ? activeStyle : undefined)} onClick={() => context.setIsMobileNavbarOpen(false)}>
                    Sign In
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/toys" className={({ isActive }) => (isActive ? activeStyle : undefined)} onClick={() => context.setIsMobileNavbarOpen(false)}>
                    Toys
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </nav>
      );
    }



export default Navbar;