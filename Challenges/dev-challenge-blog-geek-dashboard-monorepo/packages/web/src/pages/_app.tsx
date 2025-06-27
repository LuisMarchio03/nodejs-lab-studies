import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import dark from "../styles/theme/dark";

import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={dark}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
