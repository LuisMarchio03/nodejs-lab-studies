import { ChakraProvider } from "@chakra-ui/react";
import dark from "../styles/theme/dark";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={dark}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
