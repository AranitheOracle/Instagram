import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react"
import AuthForm from "../../components/AuthForm/AuthForm"
const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
        <Container maxW={"conatiner.md"} padding={0}>
            <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
                <Box display={{base:"none",md:"block"}}>
                    <Image src="/public/auth.png" h={650} alt="Phone IMG"/>
                </Box>

                
                <VStack spacing={4} align={"stretch"}>
                    <AuthForm />
                    <Box textAlign={"center"}>Get the App</Box>
                    <Flex gap={5} justifyContent={"center"}>
                        <Image src="/public/playstore.png" h={"10"} alt='Playstore' />
                        <Image src="/public/microsoft.png" h={"10"} alt='Microsoft' />
                    </Flex>
                </VStack>
            </Flex>

        
        </Container>
    </Flex>
  )
}

export default AuthPage
