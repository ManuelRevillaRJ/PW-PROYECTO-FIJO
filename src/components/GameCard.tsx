import { useState } from "react"
import ModalJuego from "./ModalJuego"
import type { Game } from "../types/types"
import "../styles/GameCard.css"

interface GameCardProps {
  game: Game
}

export default function GameCard({ game }: GameCardProps) {
  const [mostrarModal, setMostrarModal] = useState(false)

  return (
    <>
      <div className="col" key={game.id}>
        <div className="card h-100 shadow-sm d-flex flex-column">
          <img src={game.cover} className="card-img-top" alt={game.titulo} />

          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title">{game.titulo}</h5>

            <div className="mb-2">
              <span className="badge bg-primary">${game.precio}</span>
              {game.precio === 0 && <span className="badge bg-success ms-1">Free</span>}
              {game.esta_oferta && <span className="badge bg-danger ms-1">Offer!</span>}
            </div>

            <div className="mb-2">
              {game.categorias?.map((cat) => (
                <span key={cat} className="badge bg-secondary me-1 mb-1">
                  {cat}
                </span>
              ))}
            </div>

            <div className="mb-3">
              {game.plataformas?.map((plat) => (
                <span key={plat} className="badge bg-dark me-1 mb-1">
                  {plat}
                </span>
              ))}
            </div>

            <button className="btn btn-primary mt-auto" onClick={() => setMostrarModal(true)}>
              Detalle
            </button>
          </div>
        </div>
      </div>

      <ModalJuego show={mostrarModal} onHide={() => setMostrarModal(false)} juego={game} />
    </>
  )
}
