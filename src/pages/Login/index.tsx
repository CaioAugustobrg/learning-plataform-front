import {
  Container,
  AbsoluteCenter,
  Button,
  //FormLabel,
  Input,
  FormControl,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  //   FormLabel,
  //   Input,
  //   FormHelperText,
  //   FormErrorMessage,
} from "@chakra-ui/react";
// import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  type IUserData = yup.InferType<typeof schema>;
  //   const [input, setInput] = useState("");

  //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  //     setInput(e.target.value);

  //   const isError = input === "";

  const schema = yup.object({
    email: yup
      .string()
      .email("Email inválido")
      .required("Preencha o campo com um email válido."),
    password: yup
      .string()
      .min(8, "Sua senha deve possuir, no mínimo, 8 caracteres.")
      .max(64)
      .required("Preencha o campo com sua senha."),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: IUserData) => {
    console.log("oi", data);
  };
  return (
    <Container backgroundColor={"#232425"} width={"100vw"} height={'89.6vh'}>
      <AbsoluteCenter
        w={"auto"}
        h={"auto"}
      display={'flex'}
        color="white"

      >
          <Box
            w={"400px"}   
            m={'auto'}
          >
            <Stack textAlign={"center"}>
             <Heading mb={10}  fontWeight={600} fontSize={"50px"}>
              PROGMAX
            </Heading>
            <Text  fontWeight={600} fontSize={"50px"}>
              Faça seu login na plataforma
            </Text>
            </Stack>
          </Box>
          <Box w={"550px"}>
            <FormControl
            h={'auto'}
              p={25}
              m={"auto"}
              backgroundColor={'#1B1C1D'}
              borderRadius={'8px'}
              w={"400px"}
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                backgroundColor={"#232425"}
                borderRadius={6}
                w={"100%"}
                h={50}
                mb={10}
                p={10}
                placeholder="Email"
                {...register("email")}
              />
              {errors.email && (
                <p
                  style={{
                    color: "red",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  {errors.email.message}
                </p>
              )}
              <Input
                backgroundColor={"#232425"}
                borderRadius={6}
                w={"100%"}
                h={50}
                //m={10}
                p={10}
                placeholder="Senha"
                type="password"
                {...register("password")}
              />
              {errors.password && (
                <p
                  style={{
                    color: "red",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  {errors.password.message}
                </p>
              )}

              <Stack mt={6} mb={6} alignItems={"start"}>
                <Text fontWeight={550} color={"rgb(52, 143, 235)"}>
                  Esqueci minha senha
                </Text>
              </Stack>
              <Button
                p={8}
                mt={15}
                height={50}
                width={"100%"}
                borderRadius={"8px"}
                color={"#ffffff"}
                fontWeight={"600"}
                fontSize={"16px"}
                backgroundColor={"rgb(52, 143, 235)"}
                _hover={{ backgroundColor: "rgb(52, 160, 400)" }}
              >
                Entrar
              </Button>
              <Stack mt={20} mb={20} alignItems={"center"}>
                <Text fontSize="15px">
                  Não tem uma conta ?{" "}
                  <strong style={{ color: "rgb(52, 143, 235)" }}>
                    Registre-se
                  </strong>
                </Text>
              </Stack>
              <Flex mt={'20px'} alignItems={'center'} borderTop={'1px solid #232425'} h={100} textAlign={"center"}>
             <Text
             
             mr={'auto'}
             >Ou entre com</Text>
             <Button
                p={5}
                height={45}
                width={220}
                borderRadius={"8px"}
                color={"#ffffff"}
                fontWeight={"600"}
                fontSize={"18px"}
                leftIcon={<FaGithub fontSize={"22px"} />}
                backgroundColor={"#232425"}
                textTransform={'uppercase'}
                _hover={{ backgroundColor: "hsl(0, 0%, 18%)" }}
              >
                Github
              </Button>
              
            </Flex>
            </FormControl>
          </Box>
      </AbsoluteCenter>
    </Container>
  );
};
export default Login;

{
  /* <Stack spacing={4}>
  <InputGroup>
  <InputLeftElement pointerEvents='none'>
  <PhoneIcon color='gray.300' />
  </InputLeftElement>
  <Input type='tel' placeholder='Phone number' />
  </InputGroup>
  
  <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      color='gray.300'
      fontSize='1.2em'
    >
      $
    </InputLeftElement>
    <Input placeholder='Enter amount' />
    <InputRightElement>
      <CheckIcon color='green.500' />
    </InputRightElement>
  </InputGroup>
</Stack> */
}
