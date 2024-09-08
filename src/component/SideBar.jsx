import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
   <div>
    <div className='m-5'>
        <h1>menu</h1>
    </div>
    <div className='flex flex-col justify-between'>
        <div  className=" m-4" >
            <div>

            </div>
            <div className='text-xl font-bold'>
               <Link to="/chat"> <h2>Chat</h2></Link>
            </div>
        </div>

        <div className=" m-4"  >
            <div>

            </div>
            <div className='text-xl font-bold'>
                <Link to="/lead"><h2>Business Leads</h2></Link>
                
            </div>
        </div>

        <div className=" m-4"  >
            <div>

            </div>
            <div className='text-xl font-bold'>
                <Link to="/map"><h2>Map</h2></Link>

            </div>
        </div>

        <div  className=" m-4" >
            <div>

            </div>
            <div className='text-xl font-bold'>
                <Link to="/team"><h2>Manage Teams</h2></Link>
                
            </div>
        </div>

        <div  className=" m-4" >
            <div>

            </div>
            <div className='text-xl font-bold'>
                <Link to="/setting"><h2>Settings</h2></Link>

            </div>
        </div>

    </div>
   </div>
  )
}

export default SideBar