import React from 'react';

const Team = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex gap-x-2 p-2 border-t-2 self-center justify-between w-1/2 border-b-2'>
        <button className='h-14 w-36  bg-blue-200 shadow'> <span className='text-2xl '>+</span>  Add Data</button>
        <button className='h-14 w-44 rounded-md  bg-red-600 text-white shadow'>Data Training status</button>
        <button className='h-14 w-36  border border-blue-300 text-blue-600 font-bold shadow'>Ground truths</button>
      </div>
      <div className='flex   font-bold gap-5 p-2 self-center border-l-0 border-t-2 border-b-2  '>
        <input placeholder='Name' className='w-40 h-12 text-2xl border rounded-md text-center border-gray-400'/>
        
        <form className="max-w-sm mx-auto">
          <select className="bg-gray-50 border border-gray-300 text-lg text-gray-600 w-32 h-12 rounded-lg block w-full">
            <option value="">Choose </option>
            <option value="editor">Editor</option>
            <option value="viewer">Viewer</option>
            <option value="admin">Admin</option>
            <option value="sale">Sales </option>
          </select>
        </form>

        <button className='bg-blue-400 shadow-xl w-28 h-12 rounded-lg hover:bg-blue-700 text-white font-bold'>Search</button>
      </div>
      <div className="relative overflow-x-auto m-5">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">Data</th>
              <th scope="col" className="px-6 py-3">Source</th>
              <th scope="col" className="px-6 py-3">Type</th>
              <th scope="col" className="px-6 py-3">Created</th>
              <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Repeatable Table Row */}
            {[
              { 
                data: 'Do you work on whatsapp? Yes, we do offer our services on WhatsApp!', 
                created: '10/03/2024' 
              },
              { 
                data: 'I want to test your chatbot ... you can also book a demo call with my team: https://calendly.com/beyondchats/15min', 
                created: '10/03/2024' 
              },
              { 
                data: 'Vivek Raj Srivastava', 
                created: '10/03/2024' 
              },
              { 
                data: 'Will the Startup Plan address the concern I mentioned earlier? ... data security.', 
                created: '10/03/2024' 
              },
              { 
                data: 'who are you My name is Bech! ... BeyondChats or our services.', 
                created: '10/03/2024' 
              },
              { 
                data: 'Will the Startup Plan address the concern I mentioned earlier? ... data security.', 
                created: '10/03/2024' 
              },
              { 
                data: 'What is the cost of IVF? ... 24/7 support to your customers.', 
                created: '10/03/2024' 
              }
            ].map((item, index) => (
              <tr key={index} className="bg-white border-b  0 dark:border-gray-700">
                <th scope="row" className={`px-6 py-4 font-medium ${index%2 ? 'bg-gray-100':'bg-white'}  text-gray-900 dark:text-black`}>
                  {item.data}
                </th>
                <td className={`px-6 py-4 font-medium ${index%2 ? 'bg-gray-100':'bg-white'}  text-gray-900 dark:text-black`}>--</td>
                <td className={`px-6 py-4 font-medium ${index%2 ? 'bg-gray-100':'bg-white'}  text-gray-900 dark:text-black`}>
                  <button className='border-white border rounded-full p-2 w-14'>Text</button>
                </td>
                <td className={`px-6 py-4 font-medium ${index%2 ? 'bg-gray-100':'bg-white'}  text-gray-900 dark:text-black`}>{item.created}</td>
                <td className={`px-6 py-4 font-medium ${index%2 ? 'bg-gray-100':'bg-white'}  text-gray-900 dark:text-black gap-x-2 flex `} >
                  <button className='bg-white border-gray-400 text-lg p-2 rounded-lg'>E</button>
                  <button className='bg-white border-gray-400 text-lg p-2 rounded-lg'>D</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Team;
