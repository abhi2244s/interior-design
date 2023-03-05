import React from 'react'
import AboutCard from './AboutCard'

const ChooseUs = () => {
  return (
    <div className='mt-5'>
        <div>
            <h1 className='text-[36px] leading-[61px]'>Why Choose Us</h1>
            <h1 className='text-[#9C9C9C] text-[18px] leading-[29px] md:w-2/5'>Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</h1>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-2 gap-5'>
            <AboutCard
            info = "High Quality"
            title = "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations."/>
            <AboutCard
            info = "Professional Designer"
            title = "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations."/>
            <AboutCard 
            info = "The Best Services"
            title ="Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations."/>
        </div>
       

    </div>
  )
}

export default ChooseUs