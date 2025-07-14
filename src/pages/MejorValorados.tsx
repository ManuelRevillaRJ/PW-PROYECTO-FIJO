import GameCard from "../components/GameCard";
import NavBar from "../components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import type { Game } from "../types/types";
import CarouselTopRated from "../components/CarouselTopRated";
import { useEffect, useState } from "react";
import { topRatedRequest } from "../utils/api/gameApi"

export default function TopRated() {
  const [topRatedList, setTopRatedList] = useState<Game[]>([])

  const httpObtenerTopRateds = async () => {
    try {
      const resp = await topRatedRequest()
      if (!resp.ok) throw new Error("servidor")
      const data = await resp.json()
      console.log(data)
      setTopRatedList(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    httpObtenerTopRateds()
  }, [])

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
              {topRatedList.map(
                (
                  game // Cambiar a topRatedList.map
                ) => (
                  <GameCard key={game.id} game={game} />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
