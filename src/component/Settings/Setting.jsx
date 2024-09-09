import React from 'react'
import Accordion from './Accordion'
const SettingArr=[
    {
        title:"Basic",
        subtitle:"this is the main content",
        children:<Accordion title="Basic" subtitle="This is the main content" className=" border border-black h-16 shadow-md items-center  "/>
    },
    {
        title:"Business Actions",
        subtitle:"Set calls to action of your business",
        children:<Accordion title="Basic" subtitle="This is the main content" className=" border border-black h-16 shadow-md items-center  "/>
    },
    {
        title:"Welcome Message",
        subtitle:"the first message the user will see",
        children:<Accordion title="Basic" subtitle="This is the main content" className=" border border-black h-16 shadow-md items-center  "/>
    },
    {
        title:"Design",
        subtitle:"Customize the appearance",
        children:<Accordion title="Basic" subtitle="This is the main content" className=" border border-black h-16 shadow-md items-center  "/>
    },
    {
        title:"Position",
        subtitle:"where will it appear on website",
        children:<Accordion title="Basic" subtitle="This is the main content" className=" border border-black h-16 shadow-md items-center  "/>
    },
    {
        title:"Ground Truths",
        subtitle:"add some ground truths",
        children:<Accordion title="Basic" subtitle="This is the main content" className=" border border-black h-16 shadow-md items-center  "/>
    },
    {
        title:"Advanced",
        subtitle:"Setup on your website",
        children:<Accordion title="Basic" subtitle="This is the main content" className=" border border-black h-16 shadow-md items-center  "/>
    },
]
const Setting = () => {
  return (
  <div>
    <div></div>
    <div className='flex h-screen'>
        <div className='w-1/2 border border-black h-full p-4'>
            <div className='flex justify-between'>
                <button className='text-blue-600 border border-blue-400 p-2 rounded-lg '>Reset to Default</button>
                <button disabled className='bg-gray-200 p-2 rounded-lg '>Save Changes</button>
            </div>
            <div className='m-2 '>
            {
                SettingArr.map((event)=>{
                    return(
                        <Accordion title={event.title} subtitle={event.subtitle} chilclassName=" border border-black h-16 shadow-md items-center  ">
                            {event.children}
                            </Accordion>
                    )
                })
            }
              </div>
        </div>
        <div>ws</div>
    </div>
  </div>
  )
}

export default Setting