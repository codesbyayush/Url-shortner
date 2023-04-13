import React from 'react'

export default function Card({keyword , expand , src , top}) {
  return (
    <div className='bg-white xl:p-8 rounded-lg relative flex-1
    p-6'
    style={{ top: `${top}` }}>
      <div className='absolute -top-8 bg-neuVeryDarkBlue rounded-[50%] p-4
      left-1/2 -translate-x-2/4 lg:left-0 lg:translate-x-4 '> 
      <img src={src} alt="" /></div>
      <h3 className='xl:text-2xl font-bold pb-4 pt-8
      text-xl'>{keyword}</h3>
      <p className='xl:text-[1.02rem] text-neuGrayishViolet
      text-sm'>{expand}</p>
    </div>
  )
}
