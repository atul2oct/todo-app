import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Toaster } from "react-hot-toast";
import FetchedContextProvider from "./context/FetchedContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <FetchedContextProvider>
      <App />
      <Toaster/>
    </FetchedContextProvider>
  </BrowserRouter>
);
