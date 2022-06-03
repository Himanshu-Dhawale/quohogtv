import React, { StrictMode } from "react";
import "./index.css";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import { makeServer } from "./server";
import { AuthProvider } from "./contexts/auth-context";
import {BrowserRouter} from "react-router-dom";

// Call make Server
makeServer();
const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
          <App />
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);

