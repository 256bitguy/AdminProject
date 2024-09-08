 
import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const Chat = () => {
  const { chatId } = useParams(); // Access dynamic route parameter

  return (
    <div className='flex'>
      <div className='border h-screen w-64 border-gray-400 m-1  '>
        <div className='flex'>
          <div className=' w-32 h-24 border-b-4  border-blue-400  flex items-end justify-center'>
           <h1 className='text-xl mb-2'> Explore Chats</h1>
            </div>
            <div className='  w-32 h-24   flex items-end justify-center'>
            <h1 >
            Remarks
            </h1>
          </div>
        </div>

        <div className='p-2'>
          <div>
           <Link to="1">
            <div className='flex items-center border border-black shadow-lg rounded-md h-16 mt-3 hover:bg-blue-200 click:bg-blue-400'>
            <div>
             <button disabled className='border border-black rounded-full p-1 mr-5'>PS</button>
              </div>
            <div> <h1 className='text-2xl '>One</h1></div>
           </div></Link>
           <Link to="2">
             <div className='flex items-center border border-black shadow-lg rounded-md h-16 mt-3  hover:bg-blue-200'>
            <div>
             <button disabled className='border border-black rounded-full p-1 mr-5'>PS</button>
              </div>
            <div> <h1 className='text-2xl '>Two</h1></div>
           </div></Link>
           <Link to="3">
             <div className='flex items-center border border-black shadow-lg rounded-md h-16 mt-3  hover:bg-blue-200'>
            <div>
             <button disabled className='border border-black rounded-full p-1 mr-5'>PS</button>
              </div>
            <div> <h1 className='text-2xl '>Three</h1></div>
           </div></Link>
           <Link to="4">
             <div className='flex items-center border border-black shadow-lg rounded-md h-16 mt-3  hover:bg-blue-200'>
            <div>
             <button disabled className='border border-black rounded-full p-1 mr-5'>PS</button>
              </div>
            <div> <h1 className='text-2xl '>Four</h1></div>
           </div></Link>
           <Link to="5">
             <div className='flex items-center border border-black shadow-lg rounded-md h-16 mt-3  hover:bg-blue-200'>
            <div>
             <button disabled className='border border-black rounded-full p-1 mr-5'>PS</button>
              </div>
            <div> <h1 className='text-2xl '>Fifth</h1></div>
           </div></Link>


          </div>
         
        </div>
      </div>
      <div className='flex-1 border flex items-center justify-center border-gray-400 m-2 p-2'>
        {/* Display dynamic content */}
        <div>
          <h2>Current Chat ID: {chatId}</h2>
          <Outlet /> {/* Render nested route content */}
        </div>
      </div>
    </div>
  );
}

export default Chat;
