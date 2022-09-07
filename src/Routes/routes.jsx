import React from "react";
import { Route, Routes as CustomRoutes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Sobre from "../Pages/Sobre";
import Termometro from "../Pages/Termometro";
import Vagas from "../Pages/Vagas";

const Routes = () => (
  <CustomRoutes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/sobre" element={<Sobre />} />
    <Route path="/vagas" element={<Vagas />} />
    <Route path="/termometro" element={<Termometro />} />
  </CustomRoutes>
);

export default Routes;
