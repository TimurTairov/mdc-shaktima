import React from 'react'
import logo from '../images/ShaktiMa-logo.jpg'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/">
      <div className="w-full flex flex-shrink-0 item-center justify-center cursor-pointer gap-1 ">
        <img src={logo} alt="logo" className="mr-2 rounded h-7 w-7 " />
        <span className="text-red-700 text-sm lg:text-xl font-bold flex items-center">МДЦ ШактиМа</span>
      </div>
    </Link>
  )
}

export default Logo
