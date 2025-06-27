import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";

import Home from "./pages/Home";
import client from "./services/graphql/client";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
