import React from "react";

import AppContextProvider from "./AppState";
import App from "./App";

const AppWrapper = () => (
  <AppContextProvider>
    <App />
  </AppContextProvider>
);

export default AppWrapper;
