import { Box, Image, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useNFTBalances } from 'react-moralis'
import CustomContainer from './CustomContainer'

function Nft({user}) {

    const {getNFTBalances, data} = useNFTBalances()

    useEffect(() => {
        getNFTBalances({
            params:{
                chain:"rinkeby",
                address: user.get('ethAddress'),
                limit:2
            }
        })
    }, []);



  return (
    <CustomContainer>
        <Text fontSize="xl" fontWeight="bold">My NFTs</Text>
        {data && data.result.map(nft => (
            <Box mt="4" px="2" py="2" borderWidth="1px" borderRadius="md" key={nft.token_uri}>
                {nft.image && <Image src={nft.image} width="100px" height="100px"/>}
                <p>{nft.token_uri}</p>
            </Box>
        ))}
    </CustomContainer>
  )
}

export default Nft