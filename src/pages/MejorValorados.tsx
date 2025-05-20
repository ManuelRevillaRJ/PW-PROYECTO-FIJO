import Carousel from "../components/Carousel"
import NavBar from "../components/NavBar"

const enum Categoria{
    BestSeller, TopRated, FreeToPlay, Multiplayer, EarlyAcces
}

const MejoresValorados = ()=>{
    return <div>
        <NavBar/>
        <Carousel/>
        <h1>Top Rated</h1>
    </div>
}

export default MejoresValorados