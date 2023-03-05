import React from 'react'
import Furniturre from "./Images/Furniture.png"
const AttractiveFurniture = () => {
  return (
    <div className='container mx-auto w-5/6 md:mt-16 mt-8'>
        <div>
            <h1 className='text-[36px] leading-[61px]'>attractive furniture with the best quality.</h1>
        </div>
        <div className='mt-5 md:w-3/12'>
            <h1 className='text-[#9C9C9C] text-[18px] leading-[29px]'>Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</h1>
        </div>
        <div className='mt-5 my-5'>
            <img src={Furniturre} alt="furniture"/>
        </div>
    </div>
  )
}

export default AttractiveFurniture