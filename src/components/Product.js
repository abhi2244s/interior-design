import React from 'react'

const Product = () => {
  return (
    <div className='container mx-auto w-5/6 md:mt-16 mt-8'>
        <div className='flex justify-between md:items-center'>
            <div className='md:w-2/6'>
                <h1 className='text-[36px] leading-[61px]'>Choose your product themes.</h1>
            </div>
            <div className='md:w-3/6'>
                <h1 className='text-[#9C9C9C] text-[18px] leading-[29px]'>Find the theme you want. If our choice of theme is not what you want, you can customize it as you want.</h1>
            </div>
        </div>
    </div>
  )
}

export default Product