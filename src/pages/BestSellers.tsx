import Carousel from "../components/Carousel";
import GameCard2 from "../components/GameCard2";
import NavBar from "../components/NavBar";

export default function BestSellers() {
  const ListaGames = [
    {
      title: "Celestial Odyssey",
      desc: "Embark on an interstellar journey through alien worlds and forgotten civilizations.",
      img: "https://picsum.photos/id/1015/400/250",
    },
    {
      title: "Shadowfall",
      desc: "A stealth-based ninja adventure with parkour mechanics and gripping narrative.",
      img: "https://picsum.photos/id/1005/400/250",
    },
    {
      title: "Pixel Forge",
      desc: "Build, craft, and survive in a voxel-based fantasy world full of secrets.",
      img: "https://picsum.photos/id/1025/400/250",
    },
    {
      title: "RoboArena",
      desc: "Fast-paced multiplayer battles with customizable mechs and explosive abilities.",
      img: "https://picsum.photos/id/1035/400/250",
    },
    {
      title: "Silent Echo",
      desc: "A psychological horror puzzle game where every sound could be your last.",
      img: undefined, // Intentionally no image
    },
    {
      title: "Neon Drift",
      desc: "Race through futuristic cityscapes in gravity-defying anti-grav vehicles.",
      img: "https://picsum.photos/id/1045/400/250",
    },
  ];

  return (
    <>
      <NavBar />
      <div className="bg-dark text-white">
        <div className="container mt-5">
          <h2 className="mb-4">Best Sellers</h2>

          <Carousel />

          <div
            className="row row-cols-2 row-cols-md-5 g-4"
            id="games-list"
          ></div>

          <div className="container text-center">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
              {ListaGames.map((game) => (
                <GameCard2
                  title={game.title}
                  description={game.desc}
                  image={game.img}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
