import React, {useState} from 'react'

export default function Prevs({Links, ShortLinks}) {

  const [bg, chngBg] = useState("primCyan");
  const [copy, setCopy] = useState(false);
  const copyLink = () => {
    navigator.clipboard.writeText(ShortLinks);
    setCopy(true);
    chngBg("neuVeryDarkBlue");
  }

  return (
    <div className="w-full bg-white bg-cover rounded-lg flex justify-between gap-4 xl:py-4 xl:px-16 xl:text-2xl 
    relative xl:-top-20 z-10 
    px-8 py-2 text-xl -top-14">
      <h1 className='my-auto'>{Links}</h1>
      <div className='flex'>
        <a className='text-primCyan mx-4 my-auto' href={ShortLinks}>{ShortLinks}</a>
        <button onClick={copyLink} className={`hover:bg-opacity-50 bg-${bg} rounded-xl text-white xl:px-12 xl:py-4
        
        px-8 py-2`}>
          {copy?"copied":"copy"}
          </button>
      </div>
    </div>
  )
}
