import { Route, Routes, BrowserRouter } from "react-router-dom";
import { App } from "../components/App/App";
import { Home } from "../components/Home/Home";
import React from "react";
import Reservation from "../components/Reservation/Reservation";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

const Navigation = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/reservation" element={<Reservation />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default Navigation;
