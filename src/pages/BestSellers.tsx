import { useState } from "react";
import Carousel from "../components/Carousel";
import GameCard2 from "../components/GameCard2";
import NavBar from "../components/NavBar";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function BestSellers() {
  const ListaGames = [
    {
      title: "Grand Theft Auto V",
      desc: "Grand Theft Auto V es un videojuego de acción-aventura de mundo abierto desarrollado por Rockstar North y distribuido por Rockstar Games.",
      img: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/grand-theft-auto-5/2/28/V_trevorfranklinmichael.jpg?width=640",
      video: "https://www.youtube.com/embed/QkkoHAzjnUs",
      detalles: [
        "https://i.blogs.es/4d1062/gta-v/1366_2000.jpeg",
        "https://media.rockstargames.com/rockstargames/img/global/news/upload/GTAO640image.jpg",
        "https://i.blogs.es/0d5188/v-igg1-2880x1800/1366_2000.jpeg",
      ],
    },
    {
      title: "Shadowfall",
      desc: "A stealth-based ninja adventure with parkour mechanics and gripping narrative.",
      img: "https://picsum.photos/id/1005/400/250",
      video: "https://www.w3schools.com/html/movie.mp4",
      detalles: [
        "https://picsum.photos/seed/shadow1/150",
        "https://picsum.photos/seed/shadow2/150",
        "https://picsum.photos/seed/shadow3/150",
      ],
    },
    {
      title: "Pixel Forge",
      desc: "Build, craft, and survive in a voxel-based fantasy world full of secrets.",
      img: "https://picsum.photos/id/1025/400/250",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      detalles: [
        "https://picsum.photos/seed/pixel1/150",
        "https://picsum.photos/seed/pixel2/150",
        "https://picsum.photos/seed/pixel3/150",
      ],
    },
    {
      title: "RoboArena",
      desc: "Fast-paced multiplayer battles with customizable mechs and explosive abilities.",
      img: "https://picsum.photos/id/1035/400/250",
      video: "https://www.w3schools.com/html/movie.mp4",
      detalles: [
        "https://picsum.photos/seed/robo1/150",
        "https://picsum.photos/seed/robo2/150",
        "https://picsum.photos/seed/robo3/150",
      ],
    },
    {
      title: "Silent Echo",
      desc: "A psychological horror puzzle game where every sound could be your last.",
      img: "https://picsum.photos/id/1065/400/250",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      detalles: [
        "https://picsum.photos/seed/echo1/150",
        "https://picsum.photos/seed/echo2/150",
        "https://picsum.photos/seed/echo3/150",
      ],
    },
    {
      title: "Neon Drift",
      desc: "Race through futuristic cityscapes in gravity-defying anti-grav vehicles.",
      img: "https://picsum.photos/id/1045/400/250",
      video: "https://www.w3schools.com/html/movie.mp4",
      detalles: [
        "https://picsum.photos/seed/neon1/150",
        "https://picsum.photos/seed/neon2/150",
        "https://picsum.photos/seed/neon3/150",
      ],
    },
  ];

  const [juegoSeleccionado, setJuegoSeleccionado] = useState<null | {
    title: string;
    description: string;
    image?: string;
  }>(null);

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
                  key={game.title}
                  title={game.title}
                  description={game.desc}
                  image={game.img}
                  videoURL={game.video}
                  detalleImagenes={game.detalles}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {juegoSeleccionado && (
        <Modal
          show
          onHide={() => setJuegoSeleccionado(null)}
          centered
          size="lg"
          backdrop="static"
        >
          <Modal.Header closeButton className="bg-dark text-white">
            <Modal.Title>{juegoSeleccionado.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body className="bg-dark text-white">
            {/* Video del juego */}
            <div className="mb-3">
              <video width="100%" controls poster={juegoSeleccionado.image}>
                <source
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  type="video/mp4"
                />
                Tu navegador no soporta video HTML5.
              </video>
            </div>

            {/* Imágenes de gameplay en scroll horizontal */}
            <div className="d-flex overflow-auto gap-2 mb-3">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://picsum.photos/seed/${i}/150`}
                  alt="Gameplay"
                  className="rounded"
                />
              ))}
            </div>

            {/* Descripción del juego */}
            <div className="mb-3">
              <p>{juegoSeleccionado.description}</p>
            </div>

            {/* Calificación del juego */}
            <div className="mb-3">
              <p className="mb-1">Calificación:</p>
              <p>⭐⭐⭐⭐☆</p>
              <Button variant="success" className="me-2">
                👍 Buen Juego
              </Button>
              <Button variant="danger">👎 Mal Juego</Button>
            </div>
          </Modal.Body>

          <Modal.Footer className="bg-dark">
            <Button variant="primary">Comprar Ahora</Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}
