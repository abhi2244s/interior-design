import React from 'react'

const Footer2 = ({title,logo,email,social}) => {
  return (
    <div className='container mx-auto w-5/6 flex md:items-center md:h-[395px] h-auto md:flex-row flex-col'>
        <div className='md:w-1/2 md:mt-0 mt-5'>
            <img src={logo} alt = "logo"/>
            <h1 className='text-[36px] leading-[61px]'>One of the best furniture  agency.</h1>
        </div>
        <div className='md:w-1/2'>
            <h1 className='text-[18px] leading-[29px]'>{email}</h1>
            <h1 className='text-[16px] leading-[26px]'>{social}</h1>
        </div>
    </div>
  )
}

export default Footer2