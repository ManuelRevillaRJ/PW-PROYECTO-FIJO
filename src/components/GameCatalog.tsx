import { useEffect, useMemo, useState } from "react"
import type { Game } from "../types/types"
import GameCard from "./GameCard"
import RangeSlider from "react-range-slider-input"
import "react-range-slider-input/dist/style.css"
import "../styles/GameCatalog.css"
import { gamesRequest } from "../utils/api/gameApi"

export default function GameCatalog() {
  const [gameList, setGameList] = useState<Game[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const [filters, setFilters] = useState({
    search: "",
    rangoPrecio: [0, 100],
    enOferta: false,
    strict: false,
    selectedCategorias: [] as string[],
    selectedPlataformas: [] as string[],
  })

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setIsLoading(true)

        const response = await gamesRequest()
        const data: Game[] = await response.json()
        setGameList(data)
        console.log(data)
      } catch (err) {
        console.error("Error fetching games:", err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchGames()
  }, [])

  const allCategorias = [...new Set(gameList.flatMap((game) => game.categorias).filter(Boolean))]
  const allPlataformas = [...new Set(gameList.flatMap((game) => game.plataformas).filter(Boolean))]

  const minPrice = gameList.length > 0 ? Math.min(...gameList.map((g) => g.precio)) : 0
  const maxPrice = gameList.length > 0 ? Math.max(...gameList.map((g) => g.precio)) + 1 : 100

  const filteredGames = useMemo(() => {
    return gameList.filter((game) => {
      if (
        filters.search &&
        !game.titulo.toLowerCase().includes(filters.search.trim().toLowerCase())
      ) {
        return false
      }

      if (game.precio < filters.rangoPrecio[0] || game.precio > filters.rangoPrecio[1]) {
        return false
      }

      if (filters.enOferta && !game.esta_oferta) {
        return false
      }

      if (filters.selectedCategorias.length > 0) {
        if (filters.strict) {
          if (!filters.selectedCategorias.every((p) => game.categorias.includes(p))) {
            return false
          }
        } else {
          if (!filters.selectedCategorias.some((p) => game.categorias.includes(p))) {
            return false
          }
        }
      }

      if (filters.selectedPlataformas.length > 0) {
        if (!filters.selectedPlataformas.some((p) => game.plataformas.includes(p))) {
          return false
        }
      }

      return true
    })
  }, [gameList, filters])

  // helper functions
  const toggleCategoria = (cat: string) => {
    setFilters((prev) => ({
      ...prev,
      selectedCategorias: prev.selectedCategorias.includes(cat)
        ? prev.selectedCategorias.filter((c) => c !== cat)
        : [...prev.selectedCategorias, cat],
    }))
  }

  const togglePlataforma = (plat: string) => {
    setFilters((prev) => ({
      ...prev,
      selectedPlataformas: prev.selectedPlataformas.includes(plat)
        ? prev.selectedPlataformas.filter((p) => p !== plat)
        : [...prev.selectedPlataformas, plat],
    }))
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="text-center mx-auto mb-4 p-4">
      <div className="row gx-4">
        {/* Game Cards */}
        <div className="col-md-9">
          <div className="card p-0" style={{ height: "75vh", overflowY: "auto" }}>
            <div className="text-start sticky-top glassmorphic">
              <div className="d-flex justify-content-between align-items-center p-3">
                <h3 className="">Game Catalog</h3>
                <h5 className="">Total: {filteredGames.length}</h5>
              </div>
            </div>
            <div className="row row-cols-4 g-3 p-3">
              {filteredGames.map((game, index) => {
                return <GameCard key={`${game.titulo}-${index}`} game={game}></GameCard>
              })}
            </div>
          </div>
        </div>
        {/* Filters */}
        <div id="filter-pane" className="col-md-3 text-start">
          <div className="card p-0" style={{ height: "75vh", overflowY: "auto" }}>
            <div className="text-start sticky-top" style={{ backgroundColor: "white" }}>
              <div className="d-flex justify-content-between align-items-center px-3 py-2">
                <h3 className="">Filters</h3>
              </div>
            </div>
            <form className="mx-3">
              <div className="mb-4 form-floating">
                <input
                  type="search"
                  className="form-control"
                  id="filter-search"
                  placeholder="Buscar juegos..."
                  value={filters.search}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      search: e.target.value,
                    }))
                  }
                />
                <label htmlFor="filter-search">Search</label>
              </div>

              <div className="mb-4">
                <h5>Rango de Precio</h5>
                <div className="d-flex justify-content-between mb-2">
                  <span>${filters.rangoPrecio[0]}</span>
                  <span>${filters.rangoPrecio[1]}</span>
                </div>
                <RangeSlider
                  min={minPrice}
                  max={maxPrice}
                  value={[filters.rangoPrecio[0], filters.rangoPrecio[1]]}
                  onInput={([min, max]) => {
                    setFilters((prev) => ({
                      ...prev,
                      rangoPrecio: [min, max],
                    }))
                  }}
                  ariaLabel={["Precio Min", "Precio Max"]}
                />
              </div>

              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  checked={filters.enOferta}
                  onChange={() => {
                    setFilters({
                      ...filters,
                      enOferta: !filters.enOferta,
                    })
                  }}
                />
                <h5>En Oferta</h5>
              </div>

              <div className="mb-4">
                <div className="d-flex align-items-center justify-content-between">
                  <h4 className="mb-2">Categorías</h4>
                  <div className="form-check align-items-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      checked={filters.strict}
                      onChange={() => {
                        setFilters({
                          ...filters,
                          strict: !filters.strict,
                        })
                      }}
                    />
                    <h5>Strict</h5>
                  </div>
                </div>
                {/* row row-cols-4 g-4 col-8 */}
                <div className="">
                  {allCategorias.map((cat) => {
                    return (
                      <div key={cat} className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={cat}
                          checked={filters.selectedCategorias.includes(cat)}
                          onChange={() => toggleCategoria(cat)}
                        />
                        <label key={cat} className="form-check-label">
                          {cat}
                        </label>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="mb-2">Plataformas</h4>
                <div className="">
                  {allPlataformas.map((plat) => {
                    return (
                      <div key={plat} className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={plat}
                          checked={filters.selectedPlataformas.includes(plat)}
                          onChange={() => togglePlataforma(plat)}
                        />
                        <label key={plat} className="form-check-label">
                          {plat}
                        </label>
                      </div>
                    )
                  })}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
