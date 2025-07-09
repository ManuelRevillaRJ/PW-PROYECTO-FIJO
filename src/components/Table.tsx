import { useState } from "react";

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

import "../styles/Table.css";

import { ListaGames } from "../utils/ListaJuegos";
import ModalAgregar from "./ModalAgregar";
import ModalEliminar from "./ModalEliminar";
import ModalEditar from "./ModalEditar";
import type { Game } from "../types/types";

export const Table = () => {
  // de agregar
  const [modalAbierto, setModalAbierto] = useState(false);

  const abrirModal = () => setModalAbierto(true);
  const cerrarModal = () => setModalAbierto(false);

  // de eliminar
  const [modalAbierto2, setModalAbierto2] = useState(false);

  const abrirModal2 = () => setModalAbierto2(true);
  const cerrarModal2 = () => setModalAbierto2(false);

  // de editar
  const [modalAbierto3, setModalAbierto3] = useState(false);

  const abrirModal3 = () => setModalAbierto3(true);
  const cerrarModal3 = () => setModalAbierto3(false);

  return (
    <div className="row container mt-auto">
      <div className="col-md-2">
        <button
          className="btn btn-primary btn-de-tabla justify-content-start mt-5"
          type="button"
          onClick={() => {
            abrirModal();
          }}
        >
          Agregar
        </button>

        {modalAbierto && (
          <ModalAgregar show={modalAbierto} onHide={cerrarModal} />
        )}
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
                            abrirModal2();
                          }}
                        />

                        {modalAbierto2 && (
                          <ModalEliminar
                            show={modalAbierto2}
                            onHide={cerrarModal2}
                            id={juego.id}
                          />
                        )}

                        <BsFillPencilFill
                          className="edit-btn"
                          onClick={() => {
                            abrirModal3();
                          }}
                        />

                        {modalAbierto3 && (
                          <ModalEditar
                            show={modalAbierto3}
                            onHide={cerrarModal3}
                            juego={juego}
                          />
                        )}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
