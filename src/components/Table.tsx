import { useEffect, useState } from "react";

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { API_URL } from "../secret"
import "../styles/Table.css"

import { ListaGames } from "../utils/ListaJuegos"
import ModalAgregar from "./ModalAgregar"
import ModalEliminar from "./ModalEliminar"
import ModalEditar from "./ModalEditar"
import type { Game_DB, Game} from "../types/types"
import { toast } from "sonner";

const juegoDefault = {
  rating: 0,
  id: 0,
  cover: "",
  titulo: "",
  descripcion: "",
  precio: 0,
  oferta: false,
  estado: false,
  videoURL: "",
  imagenes: [],
  categoria_id: 1,
  plataformas: [],
  ventas: []
};

export const Table = () => {
  const [inputId, setInputId] = useState("")
  const [juegoSeleccionado, setJuegoSeleccionado] = useState<Game_DB | null>(null)
  // de agregar
  const [modalAbierto, setModalAbierto] = useState(false)
  const abrirModal = () => setModalAbierto(true)
  const cerrarModal = () => setModalAbierto(false)

  // de eliminar
  const [modalAbierto2, setModalAbierto2] = useState(false)
  const abrirModal2 = (juego: Game_DB) => {
    setJuegoSeleccionado(juego)
    setModalAbierto2(true)
  }
  const cerrarModal2 = () => setModalAbierto2(false)

  // de editar
  const [modalAbierto3, setModalAbierto3] = useState(false)
  const abrirModal3 = (juego: Game_DB) => {
    setJuegoSeleccionado(juego)
    setModalAbierto3(true)
  }
  const cerrarModal3 = () => setModalAbierto3(false)

  const buscarJuego = async () => {
    if (!inputId) toast.error("Ingresa un ID valido")  
    try {
      const res = await fetch(`${API_URL}/games/${inputId}`)
      if (!res.ok) throw new Error("Juego no encontrado")
      if (res.ok) toast.success("Encontrado, selecciona que hacer")
      const data = await res.json()
      setJuegoSeleccionado(data)
    } catch (error) {
      setJuegoSeleccionado(null)
      toast.error((error as Error).message) 
    }
  }

  const httpAcualizarJuegos = async () => {
    try {
      const resp = await fetch(`${API_URL}/games/top-rated`) // `${API_URL}/games/top-rated`
      if (!resp.ok) throw new Error("servidor")
      //const data = await resp.json();
      // ver que hacer aqui para que se actualice la  tabla
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    httpAcualizarJuegos()
  }, [])

  return (
    <div className="row container mt-auto">
      <div className="col-md-2">
        <button
          className="btn btn-primary btn-de-tabla justify-content-start mt-5"
          type="button"
          onClick={() => {
            abrirModal()
          }}>
          Agregar
        </button>

        <div>
          <div className="input-group input-group-sm mb-3 justify-content-start mt-3">
            <p className="input-group-text" id="inputGroup-sizing-sm">
              Id Juego:
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault() // Evita que la página se recargue
                buscarJuego()
              }}>
              <input
                type="text"
                className="form-control"
                id="idJue"
                value={inputId}
                onChange={(e) => setInputId(e.target.value)}
                placeholder="Ingresa ID del juego"
              />
              <>
                <button type="submit" className="btn btn-primary mt-2">
                  Buscar
                </button>
              </>
            </form>
          </div>

          <span className="actions">
            <BsFillTrashFill
              className="delete-btn"
              onClick={() => {
                if (juegoSeleccionado) abrirModal2(juegoSeleccionado)
                else alert("Busca un juego primero") // borrar cambiar
                return
              }}
            />

            {modalAbierto2 && juegoSeleccionado && (
              <ModalEliminar
                show={modalAbierto2}
                onHide={cerrarModal2}
                id={juegoSeleccionado.id ?? 0}
                onDeleted={() => {
                  cerrarModal2()
                  setJuegoSeleccionado(null)
                  setInputId("")
                }}
              />
            )}

            <BsFillPencilFill
              className="edit-btn"
              onClick={() => {
                if (juegoSeleccionado) abrirModal3(juegoSeleccionado)
                else toast.error("Busca un juego primero") 
                return
              }}
            />

            {modalAbierto3 && juegoSeleccionado && (
              <ModalEditar
                show={modalAbierto3}
                onHide={cerrarModal3}
                juego={juegoSeleccionado}
                onUpdated={(juegoActualizado) => {
                  setJuegoSeleccionado(juegoActualizado)
                  cerrarModal3()
                }}
              />
            )}
          </span>
        </div>

        {modalAbierto && <ModalAgregar show={modalAbierto} onHide={cerrarModal} />}
      </div>
      <div className="col-md-10">
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th className="expandesque">Titulo</th>
                <th className="expand wrapper">Descripcion</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {ListaGames.map((juego: Game) => {
                return (
                  <tr key={juego.id}>
                    <td>{juego.id}</td>
                    <td className="expandesque">{juego.titulo}</td>
                    <td className="expand">{juego.description}</td>
                    <td>{juego.precio}</td>

                    <td className="fit">
                      <span className="actions">
                        <BsFillTrashFill
                          className="delete-btn"
                          onClick={() => {
                           
                          }}
                        />

                        {modalAbierto2 && (
                          <ModalEliminar
                            show={modalAbierto2}
                            onHide={cerrarModal2}
                            id={juegoSeleccionado?.id?? juegoDefault.id}
                            onDeleted={() => {
                              cerrarModal2()
                              setJuegoSeleccionado(null)
                              setInputId("")
                            }}
                          />
                        )}

                        <BsFillPencilFill
                          className="edit-btn"
                          onClick={() => {
                            
                          }}
                        />

                        {modalAbierto3 && (
                          <ModalEditar
                            show={modalAbierto3}
                            onHide={cerrarModal3}
                            juego={juegoSeleccionado?? juegoDefault}
                            onUpdated={(juegoActualizado) => {
                              setJuegoSeleccionado(juegoActualizado)
                              cerrarModal3()
                            }}
                          />
                        )}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
