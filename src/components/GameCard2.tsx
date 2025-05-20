import { useState } from "react";
import { Button } from "react-bootstrap";
import ModalJuego from "./ModalJuego";

interface GameCardProps {
  image?: string;
  title: string;
  description: string;
  videoURL: string;
  detalleImagenes: string[]; // NUEVO: imágenes únicas por juego
}

export default function GameCard2(props: GameCardProps) {
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <>
      <div className="col">
        <div className="card h-100">
          <img src={props.image} className="card-img-top" alt={props.title} />
          <div className="card-body d-flex flex-column justify-content-between">
            <div>
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.description}</p>
            </div>
            <div className="mt-auto">
              <Button
                className="w-100 mt-2"
                onClick={() => setMostrarModal(true)}
              >
                Detalle
              </Button>
            </div>
          </div>
        </div>
      </div>

      <ModalJuego
        show={mostrarModal}
        onHide={() => setMostrarModal(false)}
        titulo={props.title}
        descripcion={props.description}
        videoURL={props.videoURL}
        imagenes={props.detalleImagenes}
      />
    </>
  );
}
