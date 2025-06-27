import { AppProps } from "next/dist/shared/lib/router/router";
import { Provider } from "urql";

import { client, ssrCache } from "../lib/urql";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState);
  }

  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
