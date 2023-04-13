import React from 'react'

export default function Helper({btn}) {
  return (
    <div className='flex flex-col items-start gap-2'>
      {btn.map((txt,i) =>{
        return <button key={i} className='text-neuGrayishViolet hover:text-primCyan self-center lg:self-auto
        
        text-xs lg:text-base'>{txt}</button>
      })}
    </div>
  )
}
