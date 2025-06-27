import React from "react";

import { ThemeProvider } from "styled-components";
import light from "../styles/theme/light";

import GlobalStyles from "../styles/Global";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={light}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
