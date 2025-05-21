import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div
      className="bg-secondary text-white p-3"
      style={{ width: "200px", height: "100vh" }}
    >
      <div className="text-center mb-4">
        <div
          className="bg-light rounded-circle mx-auto"
          style={{ width: 80, height: 80 }}
        ></div>
        <p className="mt-2">Jon Shmoe</p>
      </div>
      <nav className="nav flex-column">
        <Link to="/users" className="nav-link text-white">
          Users
        </Link>
        <Link to="/games" className="nav-link text-white">
          Games
        </Link>
        <Link to="/news" className="nav-link text-white">
          News
        </Link>
        <Link to="/ganancias" className="nav-link bg-light text-dark rounded">
          Statistics
        </Link>
        <Link to="/logout" className="nav-link text-white mt-4">
          Log out
        </Link>
      </nav>
    </div>
  );
}
