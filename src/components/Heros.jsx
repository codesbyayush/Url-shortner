import React from 'react'
import {ReactComponent as Illustration} from '../assets/illustration-working.svg'

export default function Heros() {
  return (
    <main className='flex pt-28 pb-48'>
      <div className='self-center w-min'>
        <h1 className='font-bold text-7xl'>
            More&nbsp;than&nbsp;just
            shorter&nbsp;links
        </h1>
        <p className='text-2xl text-neuGrayishViolet my-2'>
            Build your brand's recognition and get detailed insights on how your links are performing.
        </p>
        <button className='bg-primCyan py-3 px-8 rounded-3xl text-white my-8 hover:bg-opacity-50'>Get Started</button>
      </div>
        <Illustration className='relative left-24'/>
      
    </main>
  )
}
