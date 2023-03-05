import React from 'react'
import ChooseUs from './ChooseUs'
import AboutP from "./Images/About.png"
import Interior from './Interior'

const About = () => {
  return (
    <div className='container mx-auto w-5/6 md:mt-16 mt-8'>
      <h1 className='text-[56px] leading-[78px] text-center'>About</h1>
      <div className='mt-8 my-5'>
        <img src={AboutP} alt="about"/>
      </div>
      <Interior/>
      <ChooseUs/>
    </div>
  )
}

export default About