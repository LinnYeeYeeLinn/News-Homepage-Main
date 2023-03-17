import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = ({toggle, setToggle}) => {
  return (
    <header className='flex items-center md:px-0 justify-between py-8'>
        <img src="../../public/logo.svg" className='h-7' alt="" />
        <nav className={toggle ? 'flex md:gap-8 gap-4 menu-toggle transition' : 'flex md:gap-8 gap-4 transition'}>
            <NavLink className='font-semibold text-dark_grayish_blue hover:text-soft_red transition'>Home</NavLink>
            <NavLink className='md:ml-5 font-semibold text-dark_grayish_blue hover:text-soft_red transition'>New</NavLink>
            <NavLink className='md:ml-5 font-semibold text-dark_grayish_blue hover:text-soft_red transition'>Popular</NavLink>
            <NavLink className='md:ml-5 font-semibold text-dark_grayish_blue hover:text-soft_red transition'>Trending</NavLink>
            <NavLink className='md:ml-5 font-semibold text-dark_grayish_blue hover:text-soft_red transition'>Categories</NavLink>
        </nav>
        <img onClick={() => setToggle(!toggle)} src={toggle ? '../../public/icon-menu-close.svg' : '../../public/icon-menu.svg'} className='cursor-pointer menu z-30 h-4' alt="" />
    </header>
  )
}

export default Navbar