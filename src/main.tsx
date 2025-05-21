import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CrearCuenta from "./pages/CrearCuenta";
import IniciarSesion from "./pages/IniciarSesion";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import Ganancias from "./pages/Ganancias";

import MejoresValorados from "./pages/MejorValorados";
import BestSellers from "./pages/BestSellers";
import CartUI from "./pages/CartTestPage";
import CartTestPage from "./pages/CartTestPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/crear_cuenta" element={<CrearCuenta />} />
        <Route path="/iniciar_sesion" element={<IniciarSesion />} />
        <Route path="/top-rated" element={<MejoresValorados />} />
        <Route path="/best-sellers" element={<BestSellers />} />
        <Route path="/ganancias" element={<Ganancias />} />
        <Route path="/carrito" element={<CartTestPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
