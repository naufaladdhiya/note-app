import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserProvider } from "./context/user.context";
import { LocaleProvider } from "./context/localization.context";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LocaleProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </LocaleProvider>
    </BrowserRouter>
  </React.StrictMode>
);
