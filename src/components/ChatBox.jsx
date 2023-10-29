import React, { useEffect, useState } from 'react'
import { ChatBarThree, MessageBar } from './miscallaneous'
import getData from '../utils/getData'
import Messages from './Messages'
import { useContextLoading } from '../context/LoadContext'

const ChatBox = ({ currentChat, user }) => {

  const [chatMessages, setChatMessages] = useState([])
  const {loading,setLoading} = useContextLoading()

  useEffect(() => {
    setLoading(true)
    getData('messages', {
      jwt: localStorage.getItem('jwt'),
      chatId: currentChat._id
    })
    .then(chatMessages => setChatMessages(chatMessages))
    .catch(err => console.log(err))
    setTimeout(()=>{setLoading(false)},350)
  }, [currentChat])

  return (
    <>
      <ChatBarThree currentChat={currentChat} user={user}/>
      <Messages chatMessages={chatMessages} currentChat={currentChat} user={user}/>
      <MessageBar currentChat={currentChat} user={user} setChatMessages={(mess)=>{setChatMessages(mess)}} chatMessages={chatMessages}/>
    </>
  )
}

export default ChatBox
