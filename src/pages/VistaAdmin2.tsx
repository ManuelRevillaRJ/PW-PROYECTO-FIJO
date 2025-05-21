import Sidebar from "../components/Sidebar";
import { Table } from "../components/Table";
import "../styles/vistaAdmin.css"

export default function VistaAdmin() {
  return (
    <div className="layout-container">
      <Sidebar/>
      <Table/>
    </div>
  )
}