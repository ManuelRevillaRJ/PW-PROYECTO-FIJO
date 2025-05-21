import { useState } from "react"
import type { Game } from "../types/Game"

const [ListaGames, setListaGames  ] = useState<Game[]>([])

const agregarJuego = (juego : Game) => {
        ListaGames.push({
            id : JSON.stringify(ListaGames.length + 1),
            titulo : juego.titulo,
            description: juego.description,
            image: juego.image 
        })
        setListaGames([...ListaGames])
    }


