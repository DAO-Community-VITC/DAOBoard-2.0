import React from 'react'
import '../App.css'

function Button() {
    return (
        <div className='flex items-center justify-center gap-4'>
            <div>
                <a href="/" className="text-white monda uppercase text-xs">
                    Mumbai Faucet
                </a>
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