import React from "react";
import ReactDOM from "react-dom";
import AppWrapper from "./AppWrapper";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./components/GlobalStyle/GlobalStyle";
import * as theme from "./utils/theme/index";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppWrapper />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
