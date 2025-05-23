import Carousel from "../components/Carousel"
import GameCard from "../components/GameCard"
import NavBar from "../components/NavBar"
import "bootstrap/dist/css/bootstrap.min.css"
import { ListaGames } from "../utils/ListaJuegos"

export default function BestSellers() {
  return (
    <>
      <NavBar />
      <div className="bg-dark text-white">
        <div className="container mt-5">
          <h2 className="mb-4">Best Sellers</h2>

          <Carousel />

          <div className="row row-cols-2 row-cols-md-5 g-4" id="games-list"></div>

          <div className="container text-center">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
              {ListaGames.map((game) => (
                <GameCard game={game} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
