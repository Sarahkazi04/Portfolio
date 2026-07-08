import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/poppins";
import "./index.css";
import App from "./App";
import Loader from "./components/Loader";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Loader>
        <App />
      </Loader>
    </BrowserRouter>
  </React.StrictMode>
);