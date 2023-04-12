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
    <div className="w-full bg-white bg-cover rounded-lg flex justify-between gap-4 py-4 px-16 text-2xl 
    relative -top-20 z-10 ">
      <h1 className='my-auto'>{Links}</h1>
      <div className='flex'>
        <a className='text-primCyan mx-4 my-auto' href={ShortLinks}>{ShortLinks}</a>
        <button onClick={copyLink} className={`hover:bg-opacity-50 bg-${bg} rounded-xl text-white px-12 py-4`}>
          {copy?"copied":"copy"}
          </button>
      </div>
    </div>
  )
}
