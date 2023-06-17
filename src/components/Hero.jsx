import React from 'react'
import '../App.css'

function Header() {
  return (
    <div className='header h-screen w-screen '>
      <div className='flex items-center justify-center flex-col w-full h-full gap-4'>
        <h1 className='dao-name text-white text-2xl font-light'>
          DAO COMMUNITY VITC
        </h1>
        <h2 className='leaderboard text-white text-9xl'>
          LEADERBOARD
        </h2>
      </div>
      

    </div>
  )
}

export default Header