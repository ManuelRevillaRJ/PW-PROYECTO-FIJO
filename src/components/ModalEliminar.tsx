import { Modal } from "react-bootstrap";
import { type FormEvent } from "react"
import SubmitButton from "./Button"
import {URL} from "../secret"

import "../styles/Modal.css"
interface ModalEliminarJuego {
  show: boolean;
  onHide: () => void;
  id: string;
  onDeleted: () => void;
}

export default function ModalEliminar({ show, onHide, id, onDeleted }: ModalEliminarJuego) {
  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    handleDelete()
  };
  const handleDelete = async () => {
    try {
      const res = await fetch(`${URL}/games/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Error al eliminar");
      onDeleted(); 
    } catch (error) {
      alert((error as Error).message); // cambiar a modal de error
    }
  };

  return (
    <Modal className="modal" show={show} onHide={onHide} centered size="lg" backdrop="static">
      <Modal.Header closeButton className="bg-dark text-white">
        <Modal.Title>¿Seguro que quiere eliminar este juego?</Modal.Title>
      </Modal.Header>

      <Modal.Body className="bg-dark text-white">
        <form onSubmit={handleSubmit}>
          <div>
            <div className="row align-items-start">
              <button
                type="button"
                onClick={onHide}
                className="col btn btn-secondary mt-2 mb-2 w-100 ms-4 me-4">
                Cancelar
              </button>
              <SubmitButton label="Eliminar" className="col ms-4 me-4" />
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  )
}
