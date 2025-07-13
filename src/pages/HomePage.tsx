import Carousel from "../components/Carousel"
import GameCatalog from "../components/GameCatalog"
import NavBar from "../components/NavBar"
import { ListaGames } from "../utils/ListaJuegos"

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Carousel />
      <GameCatalog gameList={ListaGames} />
    </>
  )
}
