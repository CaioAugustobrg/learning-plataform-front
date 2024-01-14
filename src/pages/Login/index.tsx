import {
  Container,
  Box,
  AbsoluteCenter,
  Button,
  //FormLabel,
  Input,
  FormControl,
  Stack,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  CheckboxIcon,
  //   FormLabel,
  //   Input,
  //   FormHelperText,
  //   FormErrorMessage,
} from "@chakra-ui/react";
// import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { BiPhoneIncoming } from "react-icons/bi";
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
    <Container backgroundColor={"#232425"} width={"100vw"} height={"100vh"}>
      <AbsoluteCenter
        w={"500px"}
        h={"500px"}
        border={"1px solid red"}
        p="4"
        color="white"
        axis="both"
      >
        <AbsoluteCenter>
          <FormControl onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
  <InputGroup>
    <InputLeftElement pointerEvents='none'>
      <BiPhoneIncoming color='red' />
    </InputLeftElement>
    <Input
              backgroundColor={"#1B1C1D"}
              borderRadius={6}
              w={320}
              h={40}
            //  m={10}
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
  </InputGroup>

  <InputGroup>
    {/* <InputLeftElement
      pointerEvents='none'
      color='gray.300'
      fontSize='1.2em'
    >
      $
    </InputLeftElement> */}
    <Input
            
            backgroundColor={"#1B1C1D"}
            borderRadius={6}
            w={320}
            p={10}
            //m={10}
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
   <InputLeftElement pointerEvents='none'>
      <BiPhoneIncoming  color='red' />
    </InputLeftElement>
  </InputGroup>
</Stack>
            {/* <Input
              backgroundColor={"#1B1C1D"}
              borderRadius={6}
              w={320}
              h={40}
              m={10}
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
            
              backgroundColor={"#1B1C1D"}
              borderRadius={6}
              w={320}
              h={40}
              p={10}
              m={10}
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
            )} */}
            <Button
       
        p={8}
        fontWeight={"600"}
        fontSize={"22px"}
        color={"#ffffff"}
        _hover={{ backgroundColor: "hsl(225, 11%, 25%)" }}
        borderRadius={'12px'}
      >
        Fazer login
      </Button>
          </FormControl>
        </AbsoluteCenter>
      </AbsoluteCenter>
    </Container>
  );
};
export default Login;


{/* <Stack spacing={4}>
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
</Stack> */}