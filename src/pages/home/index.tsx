import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
const Home = () => {
    return (
        <Flex w={'100%'} alignItems='center'>

        <Box p='2'>
      
          <Heading fontWeight={'600'} fontSize={'22px'}>PROGMAX</Heading>
      
        </Box>
      
        <Spacer w={'1100px'} />
        
      
        <ButtonGroup gap='2'>
      
          <Button p={5} fontWeight={'600'} fontSize={'16px'} bgColor={'rgb(52, 143, 235)'}>Registrar</Button>
      
          <Button p={5} fontWeight={'600'} fontSize={'16px'} bgColor={'rgb(52, 143, 235)'} >Criar conta</Button>
      
        </ButtonGroup>
      
      </Flex>
    )
}
export default Home;