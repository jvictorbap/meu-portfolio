import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QRGenerator from "./pages/QRGenerator";
import VirusSearcher from "./pages/VirusSearcher";
import HelmetTitle from "./components/Helmet";
import "./index.css";
import "./hover.css";

ReactDOM.render(
  <BrowserRouter basename="/">
    <HelmetTitle />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/qrcode" element={<QRGenerator />} />
      <Route exact path="/virussearcher" element={<VirusSearcher />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
