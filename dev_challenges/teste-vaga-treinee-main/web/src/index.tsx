import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

import Global from "./styles/Global";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Global />
      <Routes />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
