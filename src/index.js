import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./hover.css"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QRGenerator from "./pages/QRGenerator";

ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qrcode" element={<QRGenerator />} />
      </Routes>
    </BrowserRouter>,
  document.getElementById("root")
);
