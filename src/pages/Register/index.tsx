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
  Img,
  useToast,
  InputRightElement,
  InputGroup,
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
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import logo from "../../assets/Component 1.png";
import apiService from "../../services/api";
import { useState } from "react";

const Register = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  type IUserData = yup.InferType<typeof schema>;
  //   const [input, setInput] = useState("");

  //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  //     setInput(e.target.value);

  //   const isError = input === "";

  const schema = yup.object({
    name: yup
      .string()
      .min(8, "O nome deve ter mais de 3 caracteres")
      .max(64)
      .required("O nome é obrigatório"),
    education: yup.string().required("Esse campo é obrigatório"),

    cpf: yup.string().length(11).required("CPF é obrigatório"),

    email: yup
      .string()
      .email("Email inválido")
      .required("Preencha o campo com um email válido."),

    birthDate: yup.date().required("Data de nascimento é obrigatório."),

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
  const toast = useToast();
  const loginSubmit = async (data: IUserData) => {
    console.log("oi", data);
    const { password, email } = data;

    // Create a promise to handle the API call
    const loginPromise = new Promise((resolve, reject) => {
      apiService
        .post("/auth/login", { email, password })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(new Error("Login failed" + error));
        });
    });

    // Use the toast.promise to display loading, success, and error messages
    toast.promise(loginPromise, {
      success: { title: "Login successful", description: "Welcome!" },
      error: { title: "Login failed", description: "Invalid credentials" },
      loading: { title: "Logging in", description: "Please wait" },
    });
  };

  return (
    <Container backgroundColor={"#232425"} width={"100vw"}  minH={'100vh'} height={"auto"}>
      <AbsoluteCenter height={'550px'} w={"auto"} display={"flex"} color="white">
        <Box w={"550px"}>
          <FormControl
            h={"auto"}
            p={25}
      
          
            backgroundColor={"#1B1C1D"}
            borderRadius={"8px"}
            w={"400px"}
          >
            <Heading h={"auto"} mb={20}>
              <Text fontSize={28} fontWeight={600}>
                Crie sua conta
              </Text>
            </Heading>
            <Input
              backgroundColor={"#232425"}
              borderRadius={6}
              w={"100%"}
              h={50}
              p={10}
              placeholder="Nome"
              {...register("name")}
            />
            {errors.name && (
              <p
                style={{
                  color: "red",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                {errors.name.message}
              </p>
            )}
            <Input
              backgroundColor={"#232425"}
              borderRadius={6}
              w={"100%"}
              h={50}
              p={10}
              mt={10}
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
              mt={10}
              p={10}
              placeholder="CPF"
              {...register("cpf")}
            />
            {errors.cpf && (
              <p
                style={{
                  color: "red",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                {errors.cpf.message}
              </p>
            )}

            <Input
              backgroundColor={"#232425"}
              borderRadius={6}
              w={"100%"}
              h={50}
              p={10}
              mt={10}
              placeholder="Educação"
              {...register("education")}
            />
            {errors.education && (
              <p
                style={{
                  color: "red",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                {errors.education.message}
              </p>
            )}

            <Input
              type="date"
              backgroundColor={"#232425"}
              borderRadius={6}
              color={"#A9A9B3"}
              w={"100%"}
              h={50}
              p={10}
              mt={10}
              placeholder="Data de nascimento"
              {...register("birthDate")}
            />
            {errors.birthDate && (
              <p
                style={{
                  color: "red",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                {errors.birthDate.message}
              </p>
            )}
            <InputGroup>
              <Input
                backgroundColor={"#232425"}
                borderRadius={6}
                w={"100%"}
                h={50}
                mt={10}
                p={10}
                placeholder="Senha"
                type={show ? "text" : "password"}
                {...register("password")}
              />
              <InputRightElement height={70} mr={15}>
                <Button color={"#A9A9B3"} fontSize={20} onClick={handleClick}>
                  {show ? <FaEye /> : <FaEyeSlash />}
                </Button>
              </InputRightElement>
            </InputGroup>
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
            {/* <Stack mt={6} mb={6} alignItems={"start"}>
                  <Text fontWeight={550} color={"rgb(52, 143, 235)"}>
                    Esqueci minha senha
                  </Text>
                </Stack> */}
            <Button
              p={8}
              mt={15}
              height={50}
              width={"100%"}
              borderRadius={"8px"}
              color={"#ffffff"}
              fontWeight={"600"}
              fontSize={"16px"}
              onClick={handleSubmit(loginSubmit)}
              backgroundColor={"rgb(52, 143, 235)"}
              _hover={{ backgroundColor: "rgb(52, 160, 400)" }}
            >
              Criar conta
            </Button>
            {/* <Stack mt={20} mb={20} alignItems={"center"}>
                  <Text fontSize="15px">
                    Não tem uma conta ?{" "}
                    <strong style={{ color: "rgb(52, 143, 235)" }}>
                      Registre-se
                    </strong>
                  </Text>
                </Stack> */}
            <Flex
              mt={"20px"}
              alignItems={"center"}
              borderTop={"1px solid #232425"}
              h={100}
              textAlign={"center"}
            >
              <Text mr={"auto"}>Ou entre com</Text>
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
                textTransform={"uppercase"}
                _hover={{ backgroundColor: "hsl(0, 0%, 18%)" }}
              >
                Github
              </Button>
            </Flex>
          </FormControl>
        </Box>
        <Box w={"400px"} m={"auto"}>
          <Stack>
            <Heading
              alignItems={"center"}
              mb={10}
              fontWeight={600}
              fontSize={"50px"}
            >
              <Img src={logo}></Img>
            </Heading>
            <Text fontWeight={600} fontSize={"50px"}>
              Faça seu registro na plataforma
            </Text>
          </Stack>
        </Box>
      </AbsoluteCenter>
    </Container>
  );
};
export default Register;

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
