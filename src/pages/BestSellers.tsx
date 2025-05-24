import GameCard from "../components/GameCard"
import NavBar from "../components/NavBar"
import "bootstrap/dist/css/bootstrap.min.css"
import { ListaGames } from "../utils/ListaJuegos"
import CarouselBestSellers from "../components/CarouselBestSellers"

export default function BestSellers() {
  return (
    <>
      <NavBar />
      <div className="bg-white text-dark">
        <div className="container mt-5">
          <br></br>
          <h2 className="mb-4">Best Sellers</h2>

          <CarouselBestSellers />

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
