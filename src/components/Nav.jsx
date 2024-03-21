import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const NavLinks = () => {
  return (
    <>
      <NavLink className="header-link" to="/">
        На главную
      </NavLink>
      <NavLink className="header-link" to="/blog">
        Блог
      </NavLink>
      <NavLink className="header-link" to="/aboutus">
        О нас
      </NavLink>
      <NavLink className="header-link" to="/contacts">
        Контакты
      </NavLink>
      <NavLink className="header-link" to="/donate">
        Пожертвовать
      </NavLink>
    </>
  )
}

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavBar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="flex md:w-3/4">
        <div className="hidden w-full justify-between md:flex text-xl font-semibold">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavBar}>{isOpen ? <XMarkIcon className="block h-10 w-10" /> : <Bars3Icon className="block h-10 w-10" />}</button>
        </div>
      </div>
      {isOpen && (
        <div className="flex basis-full flex-col items-start">
          <NavLinks />
        </div>
      )}
    </>
  )
}

export default Nav
