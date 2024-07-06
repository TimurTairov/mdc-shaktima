import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const NavLinks = () => {
  return (
    <>
      <NavLink className="header-link text-sm lg:text-lg" to="." end>
        Новости
      </NavLink>
      <NavLink className="header-link text-sm lg:text-lg" to="blog">
        Блог
      </NavLink>
      <NavLink className="header-link text-sm lg:text-lg" to="gallary">
        Галлерея
      </NavLink>
      <NavLink className="header-link text-sm lg:text-lg" to="aboutus">
        О нас
      </NavLink>
      <NavLink className="header-link text-sm lg:text-lg" to="contacts">
        Контакты
      </NavLink>
      <NavLink className="header-link text-sm lg:text-lg" to="donate">
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
        <div className="hidden w-full justify-end md:flex text-xl font-semibold">
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
