import React from 'react'
import { replace, useNavigate } from 'react-router-dom'

const LeadData = () => {
    const navigate=useNavigate()
    const chatbox=(id)=>{
        navigate(`/chat/${id}`,{replace:true})
    }
  return (
    <div>
        <div className='border border-black'>
            <h2 className='text-2xl p-5'>This is headin for here</h2>
        </div>
        <div>
        <div className="relative overflow-x-auto m-5">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                   E-mail
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone
                </th>
                <th scope="col" className="px-6 py-3">
                    Location
                </th>
                <th scope="col" className="px-6 py-3">
                    Confidence
                </th>
                <th scope="col" className="px-6 py-3">
                    Chat
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   Vivek Raj Srivastava
                </th>
                <td className="px-6 py-4">
                    67vivekraj@gmail.com
                </td>
                <td className="px-6 py-4">
                    9335322592
                </td>
                <td className="px-6 py-4">
                    Pune
                </td>
                <td className="px-6 py-4">
                    <button>X</button>
                </td>
                <td className="px-6 py-4">
                    <button onClick={()=>chatbox(1)}className='bg-white border-gray-400 text-lg p-2 rounded-lg'>View</button>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   Vivek Raj Srivastava
                </th>
                <td className="px-6 py-4">
                    67vivekraj@gmail.com
                </td>
                <td className="px-6 py-4">
                    9335322592
                </td>
                <td className="px-6 py-4">
                    Pune
                </td>
                <td className="px-6 py-4">
                    <button>X</button>
                </td>
                <td className="px-6 py-4">
                    <button onClick={chatbox()}className='bg-white border-gray-400 text-lg p-2 rounded-lg'>View</button>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   Vivek Raj Srivastava
                </th>
                <td className="px-6 py-4">
                    67vivekraj@gmail.com
                </td>
                <td className="px-6 py-4">
                    9335322592
                </td>
                <td className="px-6 py-4">
                    Pune
                </td>
                <td className="px-6 py-4">
                    <button>X</button>
                </td>
                <td className="px-6 py-4">
                    <button className='bg-white border-gray-400 text-lg p-2 rounded-lg'>View</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
        </div>
        <div>
        <nav aria-label="Page navigation example">
  <ul className="inline-flex -space-x-px text-base h-10">
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400  dark:hover:text-white">Previous</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400  dark:hover:text-white">1</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400  dark:hover:text-white">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" className="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700  dark:text-white">3</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
    </li>
  </ul>
        </nav>
        </div>
        <div>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Export CSV</button>

        </div>
    </div>
  )
}

export default LeadData