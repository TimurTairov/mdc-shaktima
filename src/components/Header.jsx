import React from 'react'
import Logo from './Logo'
import Nav from './Nav'

const Header = () => {
  return (
    <header className="max-w-screen-xl sticky top-0 z-[99] mx-auto flex flex-wrap w-full items-center justify-between shadow-md bg-white p-2">
      <Logo />
      <Nav />
    </header>
  )
}

export default Header
