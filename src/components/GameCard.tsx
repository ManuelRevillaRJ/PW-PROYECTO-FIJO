import { useState } from "react";
import { Button } from "react-bootstrap";
import ModalJuego from "./ModalJuego";
import type { Game } from "../types/types"

interface GameCardProps {
  game: Game
}

export default function GameCard({ game }: GameCardProps) {
  const [mostrarModal, setMostrarModal] = useState(false)

  return (
    <>
      <div className="col">
        <div className="card h-100">
          <img src={game.image} className="card-img-top" alt={game.titulo} />
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title">{game.titulo}</h5>
            <span className="badge rounded-pill p-2 bg-primary text-white w-50 mx-auto">
              ${game.precio}
            </span>
            <div>
              {game.categorias?.map((cat, idx) => {
                return (
                  <span key={idx} className="badge rounded-pill text-bg-secondary me-1">
                    {cat}
                  </span>
                )
              })}
            </div>
            <div className="mt-1">
              {game.plataformas?.map((plat, idx) => {
                return (
                  <span key={idx} className="badge rounded-pill text-bg-dark me-1">
                    {plat}
                  </span>
                )
              })}
            </div>
            <div className="mt-auto">
              <Button className="w-100 mt-2" onClick={() => setMostrarModal(true)}>
                Detalle
              </Button>
            </div>
          </div>
        </div>
      </div>

      <ModalJuego show={mostrarModal} onHide={() => setMostrarModal(false)} juego={game} />
    </>
  )
}
