import { Box, Flex, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
        <SuggestedHeader />

        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
            <Text fontSize={12} fontWeight={"bold"} color={"gray.400"}>
                Suggest for You
            </Text>
            <Text fontSize={12} fontWeight={"bold"} _hover={{color:"gray.400"}} cursor={"pointer"}>
                See All
            </Text>
        </Flex>
        <SuggestedUser name="Dan" followers={1345} avatar={''} />
        <SuggestedUser name="San" followers={1395} avatar={''} />
        <SuggestedUser name="Pan" followers={1995} avatar={''} />

        <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
            2024 Built by{" "}
            <Link href='https://github.com/AranitheOracle' target='_blank' color={"blue.500"} fontSize={14}>AranitheOracle</Link>
        </Box>
    </VStack>
  )
}

export default SuggestedUsers
