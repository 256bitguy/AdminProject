import React from 'react'
import { useParams } from 'react-router-dom'

const ChatBox = () => {
    const params=useParams();
    console.log(params)
  return (
    <div>
        {
           <h2> {`this is chat page for ${params.chatId}th list`}</h2>
        }
    </div>
  )
}

export default ChatBox