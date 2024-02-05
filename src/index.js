import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.scss";
import { BrowserRouter } from "react-router-dom";
import Index from "./Paths/Paths.jsx";
import { CartProvider } from "react-use-cart";
import "./i18n";
import { ContextProvider } from "./Context.js";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <BrowserRouter>
      <CartProvider>
        <Index />
        <SpeedInsights />
        <Analytics />
      </CartProvider>
    </BrowserRouter>
  </ContextProvider>
);