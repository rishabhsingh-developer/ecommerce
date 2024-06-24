import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context/Productcontext";
import { FilterProvider } from "./context/Filtercontext";
import { ContextProvider } from "./context/AddToCartcontext";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AppProvider>
    <FilterProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </FilterProvider>
  </AppProvider>
);
