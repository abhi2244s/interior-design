import React from 'react'
import Agency from "./Images/Agency.png"

const FurnitureAgencey = () => {
  return (
    <div className='container mx-auto w-5/6 md:mt-20 mt-8'>
        <div>
            <h1 className='text-[36px] leading-[62px]'>“We're one of the best furniture agency. Prioritizing customers and making purchases easy are the hallmarks of our agency.”</h1>
        </div>
        <div className='flex justify-between md:items-center md:mt-16 mt-8 md:flex-row flex-col'>
            <div className='md:w-5/6'>
            <img src={Agency} alt="agency"/>
            </div>
            <div className='md:w-1/6'>
                <h1 className='text-[#9C9C9C] text-[18px] leading-[29px] md:mt-0 mt-5'>Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.</h1>
                <button className='bg-[#2C3878] p-3 text-white mt-3 my-5'>Learn More</button>
            </div>
          
        </div>
    </div>
  )
}

export default FurnitureAgencey