import React, { useEffect, useState } from 'react'
import './App.css'
import Loading from './Components/Loading'
import Main from './Components/Main'
import Hero from './Components/Hero'
import Domain from './Pages/Domain'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Footer } from 'antd/es/layout/layout'
import Vurnablewithcve from './Pages/Vurnablewithcve'
import Cardinfo from './Pages/Cardinfo'

const All = ()=>{
  return(
    <>
    <Main/>
    <Outlet/>
   <Footer/>
   </>

  )
}
function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<All/>,
      children:[{
        path:'/',
        element:<Hero/>
      }]
    },
    {
      path:"/Vuranableinfomation",
      element:<Vurnablewithcve/>
    },
    {
      path:"/domaininformation",
      element:<Domain/>
    
  },
  {
    path:"/cardinformation",
    element:<Cardinfo/>
  }


  ])
  
  const [isloading,setloading]=useState(true)
  useEffect(()=>{
    const load=()=>{
      setTimeout(()=>{
        setloading(false)
      },3000)
    }
    load();
  },[])

  return isloading? (
    <Loading/>
  ):(
    <div className='main-root'>
<RouterProvider router={router} />
 </div>
  );
}

export default App
