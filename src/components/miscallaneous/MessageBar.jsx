import { Box, Button, FormControl, OutlinedInput, Stack } from '@mui/material'
import React, { useState } from 'react'

const MessageInput = () => {
    const [message, setMessage] = useState('')

    return (
        <>
            <Box sx={{position:'relative',top:'80%'}}>
                <form noValidate onSubmit={(e)=>{e.preventDefault()}} autoComplete="off">
                    <FormControl sx={{ width: '100%'}}>
                        <Stack direction='row'>
                        <OutlinedInput sx={{width:'85%',display:'inline'}} onChange={(e) => {setMessage(e.target.value)}} placeholder="Type a message... 🤌" />
                        <Button sx={{ display:'inline',width:'10%',ml:'5%' }} variant="contained" size="large">Send</Button>
                        </Stack>
                    </FormControl>
                </form>
            </Box>
        </>
    )
}

export default MessageInput
