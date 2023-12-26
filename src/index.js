import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.scss";
import { BrowserRouter } from "react-router-dom";
import Index from "./Paths/Paths";
import { CartProvider } from "react-use-cart";
import "./i18n";
import { ContextProvider } from "./Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <BrowserRouter>
      <CartProvider>
        <Index />
      </CartProvider>
    </BrowserRouter>
  </ContextProvider>
);