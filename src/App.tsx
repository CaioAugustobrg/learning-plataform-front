import { ChakraProvider, DarkMode } from "@chakra-ui/react";

import "./App.css";
import AppRouter from "./routes/router";
import GlobalStyles from './styles/globalStyles.ts'

function App() {
  return (
    <ChakraProvider   theme={DarkMode} >
      <AppRouter />
      <GlobalStyles />
    </ChakraProvider>
  );
}

export default App;
