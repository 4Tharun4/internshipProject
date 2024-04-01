import React from 'react'
import './Main.css'
import logo from '../assets/bg.jpg'
const Main = () => {
  return (
    <>
    <div className='main '>
        <div className="main-text ml-12 flex   ">
          <div className="logo">
            <img src={logo} alt="" className='w-[200px] mt-2' />
            <h1 className='text-3xl'>INCYCLOPEDIA</h1>
          </div>
            
            <ul>
                <li>Privicy/Policy</li>
                <li>About-us</li>
            </ul>

        </div>
    </div>
   
    </>
  )
}

export default Main
