import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./hover.css"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QRGenerator from "./pages/QRGenerator";
import VirusSearcher from "./pages/VirusSearcher";

ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qrcode" element={<QRGenerator />} />
        <Route path="/virussearcher" element={<VirusSearcher />} />
      </Routes>
    </BrowserRouter>,
  document.getElementById("root")
);
