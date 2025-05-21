import { Modal } from "react-bootstrap";
import { useState, type FormEvent } from "react";
import SubmitButton from "./Button";
import { ListaGames } from "../utils/ListaJuegos";

import "../styles/Modal.css";
import type { Game } from "../types/Game";

interface ModalAgregarJuego {
  show: boolean;
  onHide: () => void;
  id: string;
}



export default function ModalAgregar({ show, onHide , id}: ModalAgregarJuego) {
  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    // aca poner que elimine
    //eliminarJuego(id);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered size="lg" backdrop="static">
      <Modal.Header closeButton className="bg-dark text-white">
        <Modal.Title>¿Seguro que quiere eliminar este juego?</Modal.Title>
      </Modal.Header>

      <Modal.Body className="bg-dark text-white">
        <form onSubmit={handleSubmit}>
          <button type="button" onClick={onHide}>
            Cancelar
          </button>
          <SubmitButton label="Eliminar" />
        </form>
      </Modal.Body>
    </Modal>
  );
}
