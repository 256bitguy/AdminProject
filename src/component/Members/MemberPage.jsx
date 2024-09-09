import React, { useState } from 'react'
import Modal from '../../shared/Modal';
const MemberPage = () => {
    const [isFollowersOpen, setIsFollowersOpen] = useState(false);
const toggleFollowersModal = () => setIsFollowersOpen(!isFollowersOpen);
  return (
   <>
   <div className='border border-black'>
            <h2 className='text-2xl p-5'>Manage My Team</h2>
        </div>
    <div className='flex flex-col gap-y-5 items-center justify-center'>
        <div>
            <button onClick={toggleFollowersModal}className='text-xl bg-blue-500 p-3 rounded-xl m-2 text-white'>Add New Members</button>
        </div>
        <div>
            <h2 className='text-3xl'>Members</h2>
        </div>
        <div className='flex flex-col gap-y-5'>
            
            <div className='flex gap-4 w-96 h-24 border   rounded-md shadow-xl border-black justify-around items-center'>
                <div>logo</div>
                <div className='flex flex-col'>
                    <div className='inline-flex items-end gap-5'>
                        <h1 className='text-2xl'>Vivek Raj</h1>
                        <span className='border border-blue-600 text-blue-400 rounded-full p-1 text-xs outline-slate-50'>Admin</span>
                    </div>
                    <div>67vivekraj@gmail.com</div>
                </div>
                <div> <button>delete</button></div>
            </div>

            <div className='flex gap-4 w-96 h-24 border   rounded-md shadow-xl border-black justify-around items-center'>
                <div>logo</div>
                <div className='flex flex-col'>
                    <div className='inline-flex items-end gap-5'>
                        <h1 className='text-2xl'>Vivek Raj</h1>
                        <span className='border border-blue-600 text-blue-400 rounded-full p-1 text-xs outline-slate-50'>Admin</span>
                    </div>
                    <div>67vivekraj@gmail.com</div>
                </div>
                <div> <button>delete</button></div>
            </div>

            <div className='flex gap-4 w-96 h-24 border   rounded-md shadow-xl border-black justify-around items-center'>
                <div>logo</div>
                <div className='flex flex-col'>
                    <div className='inline-flex items-end gap-5'>
                        <h1 className='text-2xl'>Vivek Raj</h1>
                        <span className='border border-blue-600 text-blue-400 rounded-full p-1 text-xs outline-slate-50'>Admin</span>
                    </div>
                    <div>67vivekraj@gmail.com</div>
                </div>
                <div> <button>delete</button></div>
            </div>

            <div className='flex gap-4 w-96 h-24 border   rounded-md shadow-xl border-black justify-around items-center'>
                <div>logo</div>
                <div className='flex flex-col'>
                    <div className='inline-flex items-end gap-5'>
                        <h1 className='text-2xl'>Vivek Raj</h1>
                        <span className='border border-blue-600 text-blue-400 rounded-full p-1 text-xs outline-slate-50'>Admin</span>
                    </div>
                    <div>67vivekraj@gmail.com</div>
                </div>
                <div> <button>delete</button></div>
            </div>

            <div className='flex gap-4 w-96 h-24 border   rounded-md shadow-xl border-black justify-around items-center'>
                <div>logo</div>
                <div className='flex flex-col'>
                    <div className='inline-flex items-end gap-5'>
                        <h1 className='text-2xl'>Vivek Raj</h1>
                        <span className='border border-blue-600 text-blue-400 rounded-full p-1 text-xs outline-slate-50'>Admin</span>
                    </div>
                    <div>67vivekraj@gmail.com</div>
                </div>
                <div> <button>delete</button></div>
            </div>
        </div>
        {isFollowersOpen && (
        <Modal onClose={toggleFollowersModal}>
         <div className='gap-4 flex flex-col'>
            <div className='flex justify-between'>
                <div>Add New Member</div>
                <div>X</div>
            </div>
            <div className='flex gap-x-2 w-11/12 p-2 border-l-0 border-t-2 border-b-2'>
                <input placeholder='Name' className='w-28 text-2xl border rounded-md text-center border-gray-400'/>
                <input placeholder='Email' className='w-32 h-16 text-2xl border rounded-md text-center border-gray-400'/>
                <div className=' '>
                <form class="max-w-sm mx-auto">
 
  <select   className="bg-gray-50 border border-gray-300  text-lg text-gray-600 h-16 w-36 text-sm rounded-lg block w-full ">
    <option selected>Choose a Role</option>
    <option value="editor" >Editor</option>
    <option value="viewer">Viewer</option>
    <option value="admin">Admin</option>
    <option value="sale">Sales</option>
  </select>
</form>
                </div>
            </div>
            <div className='flex justify-end gap-4'>
                <button className='border border-red-400 text-red-400 p-2 rounded-md'>Cancel</button>
                <button className='border border-blue-500 text-white bg-blue-500 p-2 rounded-md'>Submit</button>
            </div>
         </div>
        </Modal>
      )}
    </div>
    </>
  )
}

export default MemberPage