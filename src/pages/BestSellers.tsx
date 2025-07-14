import GameCard from "../components/GameCard";
import NavBar from "../components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css"
import CarouselBestSellers from "../components/CarouselBestSellers";
import type { Game } from "../types/types";
import { useState, useEffect } from "react"
import { bestSellersRequest } from "../utils/api/gameApi"
import CartBar from "../pages/CartBar"

export default function BestSellers() {
  const [bestSellersList, setbestSellersList] = useState<Game[]>([])

  const httpObtenerBestSellers = async () => {
    try {
      const resp = await bestSellersRequest()
      if (!resp.ok) throw new Error("servidor")
      const data = await resp.json()
      console.log(data)
      setbestSellersList(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    httpObtenerBestSellers()
  }, [])

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
              {bestSellersList.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <CartBar/>
    </>
  )
}
