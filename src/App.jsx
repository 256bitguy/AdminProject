import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Root from "./Root"
import Chat from "./component/Chat/List"
import ChatBox from "./component/Chat/ChatBox"
import LeadData from "./component/Leads/LeadData"
import MemberPage from "./component/Members/MemberPage"
import Setting from "./component/Settings/Setting"
import Team from "./component/Team/Team"

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
          element:<Team/>
        },
        {
          path:'team',
          element:<MemberPage/>
        },
        {
          path:'setting',
          element:<Setting/>
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
