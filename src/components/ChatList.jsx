import { Box, Avatar, List, ListItemText, ListItem, ListItemAvatar, Button } from '@mui/material'
import React, { useEffect } from 'react'
import '../css/chats.css'
import { AddNavBar } from './miscallaneous'
import { useContextState } from '../context/AuthContext'

const ChatList = ({ chats, currentChat }) => {

    const { user: { username } } = useContextState()

    useEffect(() => {

    }, [])

    return (
        <>
            <AddNavBar />
            <List component="nav" className='list' aria-label="mailbox folders" sx={{ overflowY: 'scroll', height: '85%' }}>
                {
                    chats.map((chat) => {
                        const { usernames, _id, lastMessage: { message } } = chat
                        const otherUsername = (usernames[0] == username) ? usernames[1] : usernames[0]
                        return <Box key={_id}>
                            <ListItem button onClick={() => { currentChat.setCurrentChat(chat) }}>
                                <ListItemAvatar>
                                    <Avatar alt="Profile Picture" src={`http://localhost:5000/profilePicture/${otherUsername}`} />
                                </ListItemAvatar>
                                <ListItemText primary={otherUsername} secondary={message} />
                            </ListItem>
                        </Box>
                    })
                }
            </List>
        </>
    )
}

export default ChatList
