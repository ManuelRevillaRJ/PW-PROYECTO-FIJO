import { useState, useEffect } from "react";
import type { Game } from "../types/types";
import GameCard from "./GameCard";
import { API_URL } from "../secret"

const URL = import.meta.env.VITE_BACKEND_URL

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("")
  const [resultados, setResultados] = useState<Game[]>([])
  const [juegoSeleccionado, setJuegoSeleccionado] = useState<Game | null>(null)

  // Buscar juegos por nombre
  useEffect(() => {
    const fetchJuegos = async () => {
      if (searchTerm.trim().length === 0) {
        setResultados([])
        return
      }

      try {
        const res = await fetch(`${API_URL}/games/buscar?nombre=${encodeURIComponent(searchTerm)}`)
        const data = await res.json()
        setResultados(data)
      } catch (error) {
        console.error("Error al buscar juegos:", error)
        setResultados([])
      }
    }

    const timeout = setTimeout(fetchJuegos, 300)
    return () => clearTimeout(timeout)
  }, [searchTerm])

  // Al hacer clic en un juego
  const handleJuegoClick = async (id: number) => {
    try {
      const res = await fetch(`${URL}/games/${id}`)
      const juego = await res.json()
      setJuegoSeleccionado(juego)
    } catch (error) {
      console.error("Error al obtener juego:", error)
    }
  }

  return (
    <div className="position-relative" style={{ minWidth: "250px" }}>
      <div className="input-group">
        <span className="input-group-text">
          <i className="bi bi-search"></i>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Buscar juegos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {resultados.length > 0 && (
        <ul
          className="list-group position-absolute z-3"
          style={{
            top: "100%",
            left: 0,
            right: 0,
            maxHeight: "200px",
            overflowY: "auto",
            border: "1px solid #ced4da",
          }}>
          {resultados.map((juego) => (
            <li
              key={juego.id}
              className="list-group-item list-group-item-action"
              onClick={(e) => {
                e.preventDefault()
                handleJuegoClick(Number(juego.id))
              }}
              style={{ cursor: "pointer" }}>
              {juego.titulo}
            </li>
          ))}
        </ul>
      )}

      {/* Renderizar GameCard como lo hace el catálogo */}
      {juegoSeleccionado && (
        <div className="mt-3">
          <GameCard game={juegoSeleccionado} />
        </div>
      )}
    </div>
  )
}
