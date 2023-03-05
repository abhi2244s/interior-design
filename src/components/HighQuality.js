import React from 'react'
import high from "./Images/HighQuality.png"

const HighQuality = () => {
  return (
    <div className='w-5/6 container mx-auto mt-16'>
        <div className='md:flex'>
            <div className='md:w-1/2'>
              <h1 className='md:text-[72px] md:leading-[100px] text-[32px] leading-[60px]'>Design your interor with high quality.</h1>
            </div>
            <div className='md:w-1/2 hidden'></div>
        </div>
        <div className='mt-8'>
            <img src={high}
            alt="high"/>
        </div>
        
    </div>
  )
}

export default HighQuality