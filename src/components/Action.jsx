import React from 'react'


export default function Action({inputValue , setInputValue, shorten}) {
  
    const handleChange = (event) => {
      setInputValue(event.target.value);
    }

    return (
    <>
      <input 
      type="text" 
      name="Link" 
      id="links" 
      value={inputValue}
      onChange={handleChange} 
      placeholder='Shorten a link here...' className='rounded-xl grow px-8 xl:text-[1.8rem] 
      text-[1.4rem]'/>

      <button 
      className='bg-primCyan rounded-xl text-white xl:px-12 hover:bg-opacity-50
      
      px-8'
       onClick={shorten}
      >
         Shorten It!
         </button>
    </>
  )
}
