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
      placeholder='Shorten a link here...' className='lg:rounded-xl grow lg:px-8 xl:text-[1.8rem] 
      lg:text-[1.4rem]
      
      text-sm rounded-md px-4'/>

      <button 
      className='bg-primCyan lg:rounded-xl text-white xl:px-12 hover:bg-opacity-50
      
      px-8
      
      flex-grow-[.8] lg:flex-grow-0 rounded-md'
       onClick={shorten}
      >
         Shorten It!
         </button>
    </>
  )
}
