import { Modal, Button } from "react-bootstrap";

interface ModalJuegoProps {
  show: boolean;
  onHide: () => void;
  titulo: string;
  descripcion: string;
  videoURL: string;
  imagenes: string[];
}

export default function ModalJuego({
  show,
  onHide,
  titulo,
  descripcion,
  videoURL,
  imagenes,
}: ModalJuegoProps) {
  return (
    <Modal show={show} onHide={onHide} centered size="lg" backdrop="static">
      <Modal.Header closeButton className="bg-dark text-white">
        <Modal.Title>{titulo}</Modal.Title>
      </Modal.Header>

      <Modal.Body className="bg-dark text-white">
        <div className="mb-3">
          <iframe
            width="100%"
            height="400"
            src={videoURL}
            title={titulo}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="d-flex overflow-auto gap-2 mb-3">
          {imagenes.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`img-${idx}`}
              className="rounded"
              width={150}
            />
          ))}
        </div>

        <p>{descripcion}</p>

        <div className="mb-3">
          <p>Calificación:</p>
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
  );
}
