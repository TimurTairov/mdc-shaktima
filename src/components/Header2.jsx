import React, { useState } from 'react'
import logo from '../images/ShaktiMa-logo.jpg'
import { NavLink } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
  const Links = [
    { name: 'Home', link: '/' },
    { name: 'Serveses', link: '/' },
    { name: 'About Us', link: '/' },
    { name: 'Contacts', link: '/' },
  ]
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="max-w-screen-xl mx-auto shadow-md w-full mt-2">
      <div className="md:px-10 py-7 px-7 md:flex justify-between items-center">
        {/* LOGO */}
        <div className="flex lg:text-2xl cursor-pointer items-center gap-2 ">
          <img src={logo} className="h-7 w-7 rounded" alt="logo" />
          <span className="font-bold text-red-700">Московский Дхарма центр ШактиМа</span>
        </div>

        {/* MENU ICON */}
        <div onClick={() => setIsOpen(!isOpen)} className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden">
          {isOpen ? <XMarkIcon /> : <Bars3Icon />}
        </div>

        {/* NAV LINKS */}
        <ul className={`md:flex pl-9 md:pl-0 mt-1 md:items-center md:pb-0 pb-12 ${isOpen ? 'top-12' : 'top-[-490px]'}`}>
          {Links.map((link) => (
            <li className="md:ml-8 font-semibold">
              {' '}
              <NavLink to={link.link}>{link.name}</NavLink>{' '}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Header
