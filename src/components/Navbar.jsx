import React from 'react'
import Button from './Button'
import Logo from './Logo'

function Navbar() {
  return (
    <div className='absolute w-screen'>
      <nav className='flex items-center justify-between flex-wrap px-10 pt-4 '>
        <Logo />
        <Button />
      </nav>
    </div>
  )
}

export default Navbar