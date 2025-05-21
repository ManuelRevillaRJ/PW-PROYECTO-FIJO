import React, { useState } from "react";

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

import "../styles/Table.css";

import { ListaGames } from "../utils/ListaJuegos";
import type { Game } from "../types/Game";
import ModalAgregar from "./ModalAgregar";



  

export const Table = () => {
  const [modalAbierto, setModalAbierto] = useState(false);

  const abrirModal = () => setModalAbierto(true);
  const cerrarModal = () => setModalAbierto(false);

  
  return (
    <div className="table-wrapper">
      <div className="col-md-2">
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => {abrirModal()}}
        >
          Agregar
        </button>

        {modalAbierto && (
        <ModalAgregar show={modalAbierto} onHide={cerrarModal}/>
      )}

      </div>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th className="expandesque">Titulo</th>
            <th className="expand">Descripcion</th>
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
                      onClick={() => console.log(juego.id)}
                    />
                    <BsFillPencilFill
                      className="edit-btn"
                      onClick={() => console.log(juego.id)}
                    />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
