import React from 'react'

const Footer1 = ({title,title1,btn}) => {
  return (
    <div className='flex container mx-auto w-5/6 md:h-[203px] h-auto items-center  md:flex-row flex-col'>
        <div className='md:w-1/2'>
           <h1 className='text-[36px] leading-[61px] text-white'>{title}</h1>
        </div>
        <div className='md:w-1/2'>
            <h1 className='text-[18px] leading-[29px] text-[#D9D9D9]'>{title1}</h1>
            <button className='bg-[#FFFFFF] text-black p-3 rounded mt-4 my-5'>{btn}</button>
        </div>
       
    </div>
  )
}

export default Footer1