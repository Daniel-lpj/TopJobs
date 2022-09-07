import React from "react";
import { Route, Routes as CustomRoutes } from "react-router-dom";
import Home from "../Pages/Home";
import Sobre from "../Pages/Sobre";

const Routes = () => (
  <CustomRoutes>
    <Route path="/" element={<Home />} />
    <Route path="/sobre" element={<Sobre />} />
  </CustomRoutes>
);

export default Routes;
