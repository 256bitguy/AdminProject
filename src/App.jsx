import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Root from "./Root"
import Chat from "./component/Chat/List"
import ChatBox from "./component/Chat/ChatBox"
import LeadData from "./component/Leads/LeadData"
import MemberPage from "./component/Members/MemberPage"

const router=createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    children:[
        {
          path:'chat',
          element:<Chat/>,
          children: [
            {
              path: ':chatId',
              element:<ChatBox/>
            }
          ]
        },
        {
          path:'lead',
          element:<LeadData/>
        },
        {
          path:'map',
          element:<div className="flex justify-center items-center border border-black  h-screen  w-full font-bold text-3xl">team data</div>
        },
        {
          path:'team',
          element:<MemberPage/>
        },
        {
          path:'setting',
          element:<div className="flex justify-center items-center border border-black  h-screen  w-full  font-bold text-3xl">settings</div>
        },

      ]

  },
 
])

function App() {


  return (
<>

<RouterProvider router={router}/>
</>
  )
}

export default App
