import { Modal } from "react-bootstrap";
import { useState, type FormEvent } from "react";
import FormInput from "./FormInput";
import SubmitButton from "./Button";
import { API_URL } from "../secret"
import "../styles/Modal.css"
import type { Game } from "../types/types"
import { toast } from "sonner";
interface ModalEditarJuego {
  show: boolean
  onHide: () => void
  juego: Game
  onUpdated: (juegoActualizado: Game) => void
}

export default function ModalEditar({ show, onHide, juego, onUpdated }: ModalEditarJuego) {
  const [titulo1, setTitulo1] = useState(juego.titulo)
  const [description, setDescription] = useState(juego.description ?? "") // descripcion o sino vacio
  const [precio, setPrecio] = useState(juego.precio ?? 0)
  const [imagen, setImagen] = useState(juego.image ?? "")

  const handleSubmit = async (evt: FormEvent) => {
    evt.preventDefault()

    if (titulo1 !== "" && description !== "" && imagen !== "") {
      const juegoActualizado: Game = {
        ...juego,
        titulo: titulo1,
        description: description,
        precio: precio,
        image: imagen,
      }

      try {
        const res = await fetch(`${API_URL}/games/${juego.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(juegoActualizado),
        })

        if (!res.ok) throw new Error("Error al actualizar el juego")

        const data = await res.json()
        onUpdated(data) // Enviar el juego actualizado al padre
      } catch (error: unknown) {
        if (error instanceof Error) toast.error(error.message)
        else toast.error("Error desconocido")
      }
    } else {
      toast.error("Faltan datos obligatorios")
    }
  }

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
            value={"" + precio}
            onChange={(e) => setPrecio(Number(e.currentTarget.value))}
          />
          <FormInput
            label="Imagen (API_URL)"
            type="text"
            id="imagen"
            value={imagen}
            onChange={(e) => setImagen(e.currentTarget.value)}
          />

          <SubmitButton label="Guardar" />
        </form>
      </Modal.Body>
      <Modal.Footer className="bg-dark text-white">
        {(() => {
          if (titulo1 == "" || description == "") {
            return (
              <button type="button" className="btn btn-danger">
                {" "}
                Faltan datos{" "}
              </button>
            )
          }
        })()}
      </Modal.Footer>
    </Modal>
  )
}
