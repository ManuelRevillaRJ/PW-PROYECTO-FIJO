import Sidebar from "../components/Sidebar"
import { Table } from "../components/Table"
import "../styles/vistaAdmin.css"

import "../styles/Modal.css"

export default function VistaAdmin() {
    return (
        <div className="layout-container modal-container">
            <Sidebar />
            <Table />
            
        </div>
    )
}
