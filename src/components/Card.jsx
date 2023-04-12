import React from 'react'

export default function Card({keyword , expand , src , top}) {
  return (
    <div className='bg-white p-8 rounded-lg relative flex-1'
    style={{ top: `${top}` }}>
      <div className='absolute -top-8 bg-neuVeryDarkBlue rounded-[50%] p-4'> 
      <img src={src} alt="" /></div>
      <h3 className='text-2xl font-bold pb-4 pt-8'>{keyword}</h3>
      <p className='text-[1.02rem] text-neuGrayishViolet'>{expand}</p>
    </div>
  )
}
