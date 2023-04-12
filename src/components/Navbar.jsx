import React from 'react'
import { ReactComponent as Logo } from '../assets/logo.svg'

export default function Navbar() {
  return (
    <div className='flex justify-between gap-8'>
      <Logo className="self-center"/>
            <div className='flex lg:grow justify-between text-neuGrayishViolet'>
        <div className='flex gap-6'>
            <button className='hover:text-black'>Features</button>
            <button className='hover:text-black'>Pricing</button>
            <button className='hover:text-black'>Resources</button>
        </div>
        <div className='flex gap-6 ml-8'>
            <button className='hover:text-black'>LogIn</button>
            <button className='hover:bg-opacity-50 bg-primCyan py-3 px-8 rounded-3xl text-white'>Sign Up</button>
        </div>
      </div>
      </div>
  )
}