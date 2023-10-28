import React, { useEffect, useRef, useState } from 'react'
import { useContextState } from '../context/AuthContext'
import NavBar from '../components/NavBar'
import { useNavigate } from 'react-router'
import ChatList from '../components/ChatList'
import { Box, Stack } from '@mui/material'
import '../css/chats.css'
import ChatBox from '../components/ChatBox'
import getData from '../utils/getData'

const Chats = () => {

    const navigate = useNavigate()
    const { user } = useContextState()
    const [chats, setChats] = useState([])
    const [currentChat,setCurrentChat] = useState({})
    
    useEffect(() => {
        if (!user.username)
            navigate('/')
        const jwt = localStorage.getItem('jwt')
        getData('chats',{jwt}).then((data)=>{
            setChats(data)
        })
    }, [user, navigate])

    return (
        <Box>
            <NavBar />
            <Stack className='mainContainer' direction='row' justifyContent='center' alignItems='center'>
                <Box className='chatList container'><ChatList chats={chats} currentChat={{currentChat,setCurrentChat}} /></Box>
                <Box className='chatBox container'><ChatBox props={currentChat}/></Box>
            </Stack>
        </Box>
    )
}

export default Chats
