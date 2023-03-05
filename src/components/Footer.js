import React from 'react'
import Footer2 from './Footer2'
import Footer1 from './Footer1'
import logo from "./Images/Dananz.png"

const Footer = () => {
  return (
    <>
    <div className='border border-[#2C3878] bg-[#2C3878]'>
        <Footer1 title ="let's discuss making your interior like a dream place!"
         title1 = "Contact us below to work together to build your  amazing interior"
         btn = "Contact Us"
        />
    </div>
    <div className='bg-[#D9D9D9]'>
            <Footer2 logo = {logo}
            // title = {"One of the best furniture agency."}
            email = "Enter  your email to get the laterst news"
            social = "Follow us on"
            />
    </div>
 
    </>
  )
}

export default Footer