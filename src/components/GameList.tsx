import type { Game } from "../types/types"
import { ListaGames } from "../utils/ListaJuegos"
import GameCard from "./GameCard"

/*
const games = [
    {
        image: "assetscarruselinfinityblade.jpg",
        title: "Infinity Blade",
        description: "Epic action RPG with stunning visuals.",
    },
    {
        image: "assetscarruselironsight.jpg",
        title: "Ironsight",
        description: "Futuristic FPS with tactical combat.",
    },
    {
        image: "assetscarrusel\titanfall.jpg",
        title: "Titanfall",
        description: "Multiplayer shooter with mechs and parkour.",
    },
]
    */

const GameList = () => {
  return (
    <div className="container mt-4 mb-4">
      <h1 className="mb-4">Top Rated Games</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {ListaGames.map((e: Game) => (
          <GameCard key={e.id} game={e} />
        ))}
      </div>
    </div>
  )
}

export default GameList
