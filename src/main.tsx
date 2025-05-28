import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CrearCuenta from "./pages/CrearCuenta"
import IniciarSesion from "./pages/IniciarSesion"
import ProfilePage from "./pages/ProfilePage"
import HomePage from "./pages/HomePage"
import Ganancias from "./pages/Ganancias"

import MejoresValorados from "./pages/MejorValorados"
import BestSellers from "./pages/BestSellers"
import CartTestPage from "./pages/CartTestPage"
import Usuarios from "./pages/Usuarios"
import VistaAdmin from "./pages/VistaAdmin"
import CambioContra from "./pages/CambioContra"

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
                <Route path="/users" element={<Usuarios />} />
                <Route path="/games" element={<VistaAdmin />} />
                <Route path="/cambio-contra" element={<CambioContra />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
)
