import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className=''>
         <div className="main ">
       <div className="disclimar">
        <p className='text-2xl fixed bottom-5 bg-[#f5f5f5]'><span className='font-bold'>OSINT (Open Source Intelligence)</span>tools are powerful resources that gather and analyze publicly available information from various sources such as social media, websites, forums, public records, and more. While these tools provide valuable insights and data, there are several considerations and potential risks associated with their use</p>
       </div>
<div className="buttons flex justify-center items-center mt-60  ">
<Link to={"/domaininformation"}><button className='bg-red-600 mr-5  w-60 h-12 text-white'>Domain Information</button></Link>
          <Link to={"/Vuranableinfomation"}><button className='bg-red-600 mr-5  w-60 h-12 text-white'>Vurnabllity Information</button></Link>
          <Link to={"/cardinformation"}> <button className='bg-red-600 mr-5  w-60 h-12 text-white'>Card information</button></Link>
        </div>
        </div>
    </div>
  )
}

export default Hero
