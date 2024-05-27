import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-6 py-4'>
        <h1 className='font-neon font-semibold tracking-widest text-2xl' >Light</h1>

        <div>
            <button className='font-inter font-semibold rounded-full bg-black text-white px-4 py-2'>Sign In</button>
        </div>
    </nav>
  )
}

export default Navbar
