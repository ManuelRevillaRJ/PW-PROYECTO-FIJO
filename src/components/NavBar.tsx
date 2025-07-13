import { Link } from "react-router";
import { useUser } from "../hooks/useUser";
import SearchBar from "./SearchBar";

// Implementado para el buscador de juegos
//import { useState } from "react";
//import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const { logout, isLoggedIn, user } = useUser();

  // Implementado para el buscador de juegos
  /*const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    navigate(`/buscar?nombre=${encodeURIComponent(searchTerm)}`);
  }*/

  return (
    <nav className="navbar justify-content-center navbar-expand-lg fixed-top bg-body-tertiary">
      <div className="container">
        <Link to={"/"} className="navbar-brand">
          GameStore
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse text-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                Explore
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to={"/best-sellers"}>
                    Best Sellers
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/top-rated"}>
                    Top Rated
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/free-to-play"}>
                    Free to Play
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/multiplayer"}>
                    Multiplayer
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/early-access"}>
                    Early Access
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Platform
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to={"/ps4"}>
                    PS4
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/ps5"}>
                    PS5
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/switch"}>
                    Switch
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/windows"}>
                    Windows
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/macos"}>
                    MacOS
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/special-offers"}>
                Special Offers
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Perfil
              </a>
              <ul className="dropdown-menu">
                {(() => {
                  if (
                    // sessionStorage.getItem("mail") == "" ||
                    // sessionStorage.getItem("mail") == null
                    !isLoggedIn
                  ) {
                    return (
                      <>
                        <li>
                          <Link
                            className="dropdown-item"
                            to={"/iniciar_sesion"}
                          >
                            Iniciar Sesión
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to={"/crear_cuenta"}>
                            Crear Cuenta
                          </Link>
                        </li>
                      </>
                    );
                  } else {
                    return (
                      <>
                        <li>
                          <Link className="dropdown-item" to={"/profile"}>
                            {`Perfil: ${user?.nombre}`}
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to={"/cambio-contra"}>
                            Cambiar Contraseña
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            onClick={logout}
                            to={"/"}
                          >
                            Cerrar sesión
                          </Link>
                        </li>
                      </>
                    );
                  }
                })()}
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={"/carrito"}>
                <i className="bi bi-bar-chart me-2"></i>
                Carrito de Compras
              </Link>
            </li>

            <li className="nav-item ms-auto d-flex align-items-center">
              <SearchBar />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
