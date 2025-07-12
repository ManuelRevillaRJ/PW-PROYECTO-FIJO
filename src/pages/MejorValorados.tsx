import GameCard from "../components/GameCard"
import NavBar from "../components/NavBar"
import "bootstrap/dist/css/bootstrap.min.css"
import { ListaGames } from "../utils/ListaJuegos"
import type { Game } from "../types/types"
import CarouselTopRated from "../components/CarouselTopRated"
import { useEffect, useState } from "react"
import {URL} from "../secret" // usar este en vez de los de prueba

const URLPrueba = "http://localhost:3000" 
const URLPrueba2 = "http://localhost:3000/games/top-rated"
export default function TopRated() {
  const topRated: Game[] = ListaGames.sort(
    (a, b) => (b.rating ?? 0) - (a.rating ?? 0)
  ).slice(0, 12)

  const [topRatedList, setTopRatedList] = useState<Game[]>([])

  const httpObtenerTopRateds = async () => {
    try {
      const resp = await fetch(URLPrueba2) // `${URLPrueba}/games/top-rated`
      if (!resp.ok) throw new Error("servidor")
      const data = await resp.json()
      console.log(data)
      setTopRatedList(data)      
    } catch (error) {
      console.error(error)
    } 
  }

  useEffect(()=>{
    httpObtenerTopRateds()
  },[]);

  

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
              {topRated.map((game) => ( // Cambiar a topRatedList.map
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
