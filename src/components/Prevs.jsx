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
    <div className="w-full bg-white bg-cover rounded-lg flex justify-between lg:gap-4 xl:py-4 xl:px-16 xl:text-2xl 
    relative xl:-top-20 z-10 
    lg:px-8 py-2 lg:text-xl lg:-top-14
    max-w-[100vw] overflow-scroll
    flex-col lg:flex-row text-sm -top-16 gap-2">
      <h1 className='my-auto
      mx-4 lg:mx-0 overflow-x-scroll overflow-y-hidden'>{Links}</h1>
      <hr className='lg:hidden'/>
      <div className='flex 

      flex-col lg:flex-row gap-2 lg:gap-0'>
        <a className='text-primCyan mx-4 my-auto' href={ShortLinks}>{ShortLinks}</a>
        <button onClick={copyLink} className={`hover:bg-opacity-50 bg-${bg} lg:rounded-xl text-white xl:px-12 xl:py-4
        
        px-8 py-2
        
        mx-4 lg:mx-0 rounded-md`}>
          {copy?"Copied":"Copy"}
          </button>
      </div>
    </div>
  )
}
