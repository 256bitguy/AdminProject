import React from 'react'
import SideBar from './component/SideBar'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
   <div className='flex  '>
    <div className='border h-screen w-48 border-black'>
    <SideBar/>
    </div>
    <div className='flex-1'>
        <Outlet/>
    </div>
   </div>
  )
}

export default Root