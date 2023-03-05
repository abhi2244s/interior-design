import React from 'react'
import interior from "./Images/interior.png"

const Interior = () => {
  return (
    <div className='mt-8'>
        <h1 className='mt-5 text-[36px] leading-[61px] md:w-4/6'>interior customization with Danaanz, best quality with professional workers</h1>
        <div className='mt-5 my-5'>
            <img src={interior} alt ="interior"/>
        </div>
    </div>
  )
}

export default Interior