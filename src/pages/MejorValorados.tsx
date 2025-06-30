import GameCard from "../components/GameCard"
import NavBar from "../components/NavBar"
import "bootstrap/dist/css/bootstrap.min.css"
import { ListaGames } from "../utils/ListaJuegos"
import type { Game } from "../types/types"
import CarouselTopRated from "../components/CarouselTopRated"

export default function TopRated() {
  const topRated: Game[] = ListaGames.sort(
    (a, b) => (b.ventas?.length ?? 0) - (a.ventas?.length ?? 0)
  ).slice(0, 12)

  return (
    <>
      <NavBar />
      <div className="bg-white text-dark">
        <div className="container mt-5">
          <br></br>
          <h2 className="mb-4">Top Rated</h2>

          <CarouselTopRated />

          <div className="row row-cols-2 row-cols-md-5 g-4" id="games-list"></div>

          <div className="container text-center">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
              {topRated.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
