import React from 'react'
import {ReactComponent as Illustration} from '../assets/illustration-working.svg'
import {ReactComponent as IllustrationMobile} from '../assets/Untitled.svg'

export default function Heros() {
  return (
    <main className='flex xl:pt-28 xl:pb-48
    pt-10 pb-28 lg:flex-row
    
    flex-col-reverse'>
      <div className='self-center lg:w-min w-full'>
        <h1 className='font-bold xl:text-7xl
        
        text-5xl hidden lg:block'>
            More&nbsp;than&nbsp;just
            shorter&nbsp;links
        </h1>

        <h1 className='lg:hidden font-bold text-4xl text-center'>
            More than just
            shorter links
        </h1>

        <p className='xl:text-2xl text-neuGrayishViolet my-2
        
        lg:text-lg
        
        text-center lg:text-left text-sm'>
            Build your brand's recognition and get detailed insights on how your links are performing.
        </p>

        <button className='bg-primCyan py-3 px-8 rounded-3xl text-white my-8 hover:bg-opacity-50
        
        relative left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0
        '>Get Started</button>
      </div>
        <Illustration className='relative xl:left-24
        
        lg:left-16
        lg:block hidden
        '/>
        <IllustrationMobile className='lg:hidden relative left-1/2 -translate-x-1/3 mb-8'/>
      
    </main>
  )
}
