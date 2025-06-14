import { NavLink } from "react-router-dom"
import { useUser } from "../hooks/useUser"

export default function Sidebar() {
  const { logout } = useUser()

  return (
    <div className="bg-secondary text-white p-3" style={{ width: "200px", height: "100vh" }}>
      <div className="text-center mb-4">
        <img
          src="/public/assets/pfp/Asa.png"
          alt="Usuario"
          className="bg-light rounded-circle mx-auto"
          style={{ width: 80, height: 80 }}
        />
        <p className="mt-2">Jon Shmoe</p>
      </div>
      <nav className="nav flex-column">
        <NavLink
          to="/users"
          className={({ isActive }) =>
            "nav-link" + (isActive ? " bg-light text-dark rounded" : " text-white")
          }>
          Users
        </NavLink>
        <NavLink
          to="/games"
          className={({ isActive }) =>
            "nav-link" + (isActive ? " bg-light text-dark rounded" : " text-white")
          }>
          Games
        </NavLink>
        <NavLink
          to="/news"
          className={({ isActive }) =>
            "nav-link" + (isActive ? " bg-light text-dark rounded" : " text-white")
          }>
          News
        </NavLink>
        <NavLink
          to="/ganancias"
          className={({ isActive }) =>
            "nav-link" + (isActive ? " bg-light text-dark rounded" : " text-white")
          }>
          Statistics
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            "nav-link mt-4" + (isActive ? " bg-light text-dark rounded" : " text-white")
          }
          onClick={logout}>
          Log out
        </NavLink>
      </nav>
    </div>
  )
}
