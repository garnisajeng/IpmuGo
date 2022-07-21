import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Aboutus from "./Pages/Aboutus/Index";
import Contactus from "./Pages/Contactus/Index";
import DashboardUser from "./Pages/DashboardUser/Index";
import Home from "./Pages/Home/Index";
import LoginBx from "./Pages/LoginBx/Index";
import Pagearticles from "./Pages/Pagearticles/Index";
import Pagejournals from "./Pages/Pagejournals/Index";
import Register from "./Pages/Register/Index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about-us" element={<Aboutus />} exact />
        <Route path="/contact-us" element={<Contactus />} exact />
        <Route path="/login" element={<LoginBx />} exact />
        <Route path="/regis" element={<Register />} exact />
        <Route path="/dashboarduser" element={<DashboardUser />} exact />
        <Route path="/pagearticle" element={<Pagearticles />} exact />
        <Route path="/pagejournal" element={<Pagejournals />} exact />
      </Routes>
    </>
  );
}

export default App;
