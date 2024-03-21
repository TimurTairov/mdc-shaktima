import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Bars3Icon } from '@heroicons/react/24/outline'
import logo from '../images/ShaktiMa-logo.jpg'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <header className="px-2 border-b flex lg:items-center lg:justify-between max-w-screen-xl mx-auto h-14 sticky top-0 z-50 bg-white flex-col items-start">

      <div className='flex'>
        <Link to='/' className="dark:text-red-400 uppercase font-bold text-red-800 flex md:text-md  ">
          <img src={logo} className='h-5 w-5 rounded mr-2' alt='logo' />
          МДЦ ШактиМА
        </Link>
      </div>

      <div className='menu absolute top-3 right-2'>
        <Bars3Icon className='text-red-400' />
      </div>

      <nav className="flex items-center">
        <ul className='flex items-center  sm:flex-col'>
          <li> <NavLink className='header-link' to='/'>Home</NavLink> </li>
          <li> <NavLink className='header-link' to='/aboutus'>About Us</NavLink> </li>
          <li> <NavLink className='header-link' to='/contacts'>Contscts</NavLink> </li>
        </ul>
      </nav>

    </header>
  )
}

export default NavBar

