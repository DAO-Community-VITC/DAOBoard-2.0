import React from 'react'
import '../App.css'

function Header() {
  return (
    <div className='header h-screen w-screen '>
      <div className='flex items-center justify-center flex-col w-full h-full gap-4'>
        <h1 className='monda text-white text-2xl font-light'>
          DAO COMMUNITY VITC
        </h1>
        <h2 className='jackhill text-white text-9xl'>
          LEADERBOARD
        </h2>
        <div className='flex items-center justify-center gap-10 text-white monda'>
          <a href='/' className='animated-button6 uppercase text-sm'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            View Leaderboard
          </a>
          <div className='group flex items-center justify-center transition-all duration-300 text-sm'>
                <a href="/" className="text-white monda uppercase group-hover:underline group-hover:underline-offset-8 group-hover:decoration-[#09BC8A]">
                    Register for Leaderboard
                </a>
                <svg className=' text-[#09BC8A] w-4 hidden group-hover:block ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M18 12L6 5v14l12-7z" />
                </svg>


            </div>
        </div>
      </div>

    </div>
  )
}

export default Header