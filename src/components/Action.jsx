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
      placeholder='Shorten a link here...' className='rounded-xl grow px-8 text-[1.8rem]'/>

      <button 
      className='bg-primCyan rounded-xl text-white px-12 hover:bg-opacity-50' onClick={shorten}
      >
         Shorten It!
         </button>
    </>
  )
}
