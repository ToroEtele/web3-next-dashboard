import { Button, Center, Flex, Text } from '@chakra-ui/react'
import React from 'react'

function Header({ user, logout, isLoggingOut }) {
    return (
        <header>
            <Flex
                justifyContent="space-between"
                bg="blue.400"
                color="white"
                px="10"
                py="6"
            >
                <Center>
                    <Text
                        fontSize="xl"
                        fontWeight="bold"
                    >Dashboard</Text>
                </Center>
                <Center>
                    <Text>{user.getUsername()}</Text>
                    <Button
                        ml="4"
                        onClick={logout}
                        colorScheme="blue"
                        disabled={isLoggingOut}
                    >Logout</Button>
                </Center>
            </Flex>
        </header>
    )
}

export default Header