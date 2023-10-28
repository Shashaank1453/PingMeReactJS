import React, { useEffect } from 'react'
import { ChatBarThree, MessageBar } from './miscallaneous'

const ChatBox = ({props}) => {
  
  useEffect(()=>{
    console.log(props)
  },[props])

  return (
    <>
        <ChatBarThree/>
        {JSON.stringify(props)}
        <MessageBar/>
    </>
  )
}

export default ChatBox
