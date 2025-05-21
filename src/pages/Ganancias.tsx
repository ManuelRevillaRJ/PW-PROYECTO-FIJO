import IngresosMensuales from "../components/IngresosMensuales";
import NavBar from "../components/NavBar";
import UserCard from "../components/UserCard";

export default function Ganancias() {
  return (
    <div className="d-flex">
      <NavBar />

      <main className="p-4 w-100">
        <h2>Statistics</h2>

        <div className="my-4">
          <UserCard totalUsers={120} />
        </div>

        <div>
          <h5>Earnings by month</h5>
          <IngresosMensuales />
        </div>
      </main>
    </div>
  );
}
