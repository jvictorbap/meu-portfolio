import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QRGenerator from "./pages/QRGenerator";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qrcode" element={<QRGenerator />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
