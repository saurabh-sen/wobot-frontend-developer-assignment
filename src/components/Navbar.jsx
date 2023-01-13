import React from 'react'
import logo from "../assets/wobot-logo_blue.png"

const Navbar = () => {
  return (
    <div className='bg-[#f9f9f9] p-14'>
      <img className='w-40 h-9 ' src={logo} alt="logo" />
    </div>
  )
}

export default Navbar