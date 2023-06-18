import React from 'react'
import '../App.css'

function Button() {
    return (
        <div className='flex items-center justify-center gap-6'>
            <div className='group flex items-center justify-center gap-2 transition-all duration-300'>
                <a href="/" className="text-white monda uppercase text-xs group-hover:underline group-hover:underline-offset-8 group-hover:decoration-[#09BC8A]">
                    Mumbai Faucet
                </a>
                <svg className='absolute right-64 text-[#09BC8A] w-4 hidden group-hover:block ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M18 12L6 5v14l12-7z" />
                </svg>


            </div>
            <div>
                <a href="/" className="animated-button6 monda uppercase text-xs">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Connect Wallet
                </a>
            </div>

        </div>
    )
}

export default Button