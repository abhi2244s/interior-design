import React from 'react'

const AboutCard = ({info,title}) => {
  return (
    <div className='text-center border mt-5 my-5'>
        <div className='w-[40px] h-[40px] rounded-full bg-[#D9D9D9] mx-auto mt-5'></div>
        <h1 className='mt-3 text-[24px] leading-[36px]'>{info}</h1>
        <h1 className='p-4 text-[18px] leading-[29px] text-[#9C9C9C]'>{title}</h1>
    </div>
  )
}

export default AboutCard