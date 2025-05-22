import { Modal } from "react-bootstrap";
import { useState, type FormEvent } from "react";
import FormInput from "./FormInput";
import SubmitButton from "./Button";

import "../styles/Modal.css";
import type { Game } from "../types/Game";

interface ModalEditarJuego {
  show: boolean;
  onHide: () => void;
  juego: Game;
}

export default function ModalEditar({ show, onHide, juego }: ModalEditarJuego) {
  const [titulo1, setTitulo1] = useState(juego.titulo);
  const [description, setDescription] = useState(juego.description ?? ""); // descripcion o sino vacio
  const [precio, setPrecio] = useState(juego.precio ?? 0);

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    // prueba
    console.log({ titulo1, description, precio });

    // aca poner que agregue a la lista de juegos
    if (titulo1 != "" && description != "") {
      juego.titulo = titulo1;
      juego.description = description;
      juego.precio = precio;
      onHide();
    } 
  };

  return (
    <Modal show={show} onHide={onHide} centered size="lg" backdrop="static">
      <Modal.Header closeButton className="bg-dark text-white">
        <Modal.Title>Editar Juego</Modal.Title>
      </Modal.Header>

      <Modal.Body className="bg-dark text-white">
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Titulo"
            type="text"
            id="titulo1"
            value={titulo1}
            onChange={(e) => setTitulo1(e.currentTarget.value)}
          />
          <FormInput
            label="Descripcion"
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.currentTarget.value)}
          />
          <FormInput
            label="Precio"
            type="number"
            id="precio"
            value={""+precio}
            onChange={(e) => setPrecio(Number(e.currentTarget.value))}
          />
          <SubmitButton label="Guardar"/>
        </form>
      </Modal.Body>
      <Modal.Footer className="bg-dark text-white">
            {(()=> {
              if (titulo1 == "" || description == "") {
              return <button type="button" className="btn btn-danger"> Faltan datos </button>;
            }})()}
      </Modal.Footer>
    </Modal>
  );
}
