import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CustomerProvider from "./contexts/customers";
import ProductProvider from "./contexts/products";
import ProcedureContext from "./contexts/procedure";
import OrderProvider from "./contexts/orders";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <OrderProvider>
      <ProcedureContext>
        <CustomerProvider>
          <ProductProvider>
            <App />
          </ProductProvider>
        </CustomerProvider>
      </ProcedureContext>
    </OrderProvider>
  </React.StrictMode>
);
