import React, { useState } from 'react'
import logo from "./Images/Dananz.png"
import { Link } from 'react-router-dom'

const Header = () => {
    const [show,setShow] = useState(false)
    const handleMenu = ()=>{
        setShow(!show)
    }
  return (
    <>
    <div className='flex justify-between items-center w-5/6 container mx-auto mt-5'>
        <div>
            <img src={logo} alt = "logo"/>
        </div>
        <div className='space-x-6 md:flex hidden'>
        <Link to = "/"> <span>Home</span></Link>
        <Link to = "/about"><span>About</span></Link>
        <Link to = "/service"><span>Services</span></Link>
        <Link to = "/team"><span>Our Teams</span></Link>
             <span>Contact Us</span>
        </div>
        <div className='md:hidden'>
            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII=' alt='menu'
            className='w-[30px]'
            onClick={()=>handleMenu()}/>
        </div>
    </div>
    <div className='md:hidden container w-5/6 mx-auto mt-5'>
        {show && <div><li className='list-none'>Home</li>
             <li className='list-none'>About</li>
             <li className='list-none'>Services</li>
             <li className='list-none'>Our Teams</li>
             <li className='list-none'>Contact Us</li></div>}
    </div>
    </>

  )
}

export default Header