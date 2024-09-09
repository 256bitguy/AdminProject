import React, { useState } from 'react'

const Accordion = ({className,children,title,subtitle}) => {
    const [isOpen,setIsopen]=useState(false);
  return (
    <div  >
        <div className='flex justify-between border border-gray-400 rounded-lg p-4 text-center'>
        <h1 className='  text-xl text-black'>{title}</h1>
         <h1 className='font-semibold text-xl text-gray-400 '>{subtitle}</h1>
            <button onClick={()=>setIsopen(!isOpen)}>V</button>
        </div>
        {
        isOpen && <div className='border border-black h-48'>
           {children}
           </div>
        }
    </div>
  )
}

export default Accordion