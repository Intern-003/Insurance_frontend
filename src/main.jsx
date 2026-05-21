import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import ProductDetails from "./pages/ProductDetails";
import PaymentPage from "./pages/PaymentPage";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />

      <Route path="/product/:id" element={<ProductDetails />} />

      <Route path="/payment" element={<PaymentPage />} />
    </Routes>
  </BrowserRouter>,
);
