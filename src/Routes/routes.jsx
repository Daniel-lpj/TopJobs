import React from "react";
import Termometro from "../Pages/Termometro";
import { Route, Routes as CustomRoutes } from "react-router-dom";

const Routes = () => (
  <CustomRoutes>
    <Route path="/" element={<Termometro />}>
      {/* <Route path="/" element={<Footer />} /> */}
    </Route>
  </CustomRoutes>
);

export default Routes;
