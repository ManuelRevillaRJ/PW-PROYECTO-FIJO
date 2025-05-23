import { useEffect, useState } from "react"
import type { Game } from "../types/types"
import GameCard from "./GameCard"
import RangeSlider from "react-range-slider-input"
import "react-range-slider-input/dist/style.css"

interface GameCatalogProps {
  gameList: Game[]
}

export default function GameCatalog({ gameList }: GameCatalogProps) {
  const [games, setGames] = useState<Game[]>([])
  const [filterGames, setFilterGames] = useState<Game[]>([])

  const [minPrice, setMinPrice] = useState<number>(0)
  const [maxPrice, setMaxPrice] = useState<number>(100)
  const [enOferta, setEnOferta] = useState<boolean>(false)

  useEffect(() => {
    setGames(gameList)
    setFilterGames(gameList)
    setMaxPrice(Math.max(...gameList.map((g) => g.precio)) + 1)
  }, [gameList])

  return (
    <div className="container text-center" style={{ minHeight: "900px" }}>
      <div className="row">
        <h1>Game Catalog</h1>
        <h3>Games: {filterGames.length}</h3>
        <div className="row row-cols-4 g-4 col-8">
          {filterGames.map((game) => {
            return <GameCard game={game}></GameCard>
          })}
        </div>
        <div className="col-4 text-start">
          <form>
            <div className="mb-3">
              <label>Price Range</label>
              <div className="d-flex justify-content-between mb-2">
                <span>${minPrice}</span>
                <span>${maxPrice}</span>
              </div>
              <RangeSlider
                min={0}
                max={Math.max(...games.map((g) => g.precio)) + 1}
                defaultValue={[0, 100]}
                value={[minPrice, maxPrice]}
                onInput={([min, max]) => {
                  setMinPrice(min)
                  setMaxPrice(max)
                  setFilterGames(games.filter((game) => game.precio >= min && game.precio <= max))
                }}
                ariaLabel={[minPrice.toString(), maxPrice.toString()]}
                ariaLabelledBy={[minPrice.toString(), maxPrice.toString()]}
              />
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                checked={enOferta}
                onChange={() => setEnOferta(!enOferta)}
              />
              <label>En Oferta</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
