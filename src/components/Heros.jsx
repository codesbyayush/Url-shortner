import React from 'react'
import {ReactComponent as Illustration} from '../assets/illustration-working.svg'

export default function Heros() {
  return (
    <main className='flex xl:pt-28 xl:pb-48
    pt-10 pb-28'>
      <div className='self-center w-min'>
        <h1 className='font-bold xl:text-7xl
        
        text-5xl'>
            More&nbsp;than&nbsp;just
            shorter&nbsp;links
        </h1>
        <p className='xl:text-2xl text-neuGrayishViolet my-2
        
        text-lg'>
            Build your brand's recognition and get detailed insights on how your links are performing.
        </p>
        <button className='bg-primCyan py-3 px-8 rounded-3xl text-white my-8 hover:bg-opacity-50'>Get Started</button>
      </div>
        <Illustration className='relative xl:left-24
        
        left-16'/>
      
    </main>
  )
}
