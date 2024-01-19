import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import { AiOutlineUser, AiOutlineRight } from "react-icons/ai";
const Header = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/login');
  };
  return (
    <Flex
      backgroundColor={"#1B1C1D"}
      padding={"20px"}
      m={"auto"}
      width={"100%"}
      h={100}
      alignItems="center"
    >
      <Box p="2">
        <Heading fontWeight={"700"} color={"#A9A9B3"} fontSize={"24px"}>
          PROGMAX - Programação para tod@s
        </Heading>
      </Box>

      <Spacer w={"1100px"} />

      <ButtonGroup gap="10">
      
      <Button
        leftIcon={<AiOutlineUser color="rgb(52, 143, 235)" fontSize={"22px"} />}
        p={8}
        fontWeight={"600"}
        fontSize={"22px"}
        color={"#ffffff"}
        _hover={{ backgroundColor: "hsl(225, 11%, 25%)" }}
        borderRadius={'12px'}
        onClick={handleLoginClick}
      >
        Fazer login
      </Button>
    
        <Button
          p={8}
          width={"auto"}
          borderRadius={"8px"}
          color={"#ffffff"}
          fontWeight={"600"}
          fontSize={"22px"}
          alignItems="center"
          border={"1px solid rgb(52, 143, 235)"}
          rightIcon={ <AiOutlineRight fontSize={'26px'} style={{ marginLeft: '18x', marginTop: '3px' }} />}
          _hover={{ backgroundColor: "rgb(52, 143, 235)" }}
        >
          Registrar
        </Button>
      </ButtonGroup>
    </Flex>
  );
};
export default Header;
