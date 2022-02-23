import { Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useMoralis } from 'react-moralis'
import CustomContainer from './CustomContainer'

function Profile({user}) {
    const [input, setInput] = useState('')

    const {setUserData, isUserUpdating} = useMoralis()

  return (
    <CustomContainer>
        <Text><b>Username:</b> {user.getUsername()}</Text>
        <Text><b>Wallet address:</b> {user.get('ethAddress')}</Text>
        <form onSubmit={e => {
            e.preventDefault()
            if(input.trim() !== '') {
                setUserData({
                    username: input
                }).then(() => setInput(''))
            }
        }}>
            <FormControl mt="6" mb="6">
                <FormLabel htmlFor="username">Set a new username</FormLabel>
                <Input id="esername" type="text" placeholder="ex. Etele" value={input} onChange={e => setInput(e.target.value)}/>
            </FormControl>
            <Button type="submit" colorScheme="blue" disabled={isUserUpdating}>Change Username</Button>
        </form>
    </CustomContainer>
  )
}

export default Profile