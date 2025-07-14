import { Modal, Button } from "react-bootstrap";
import type { Game } from "../types/types";
import { useCart } from "../context/CartContext";



interface ModalJuegoProps {
  show: boolean;
  onHide: () => void;
  juego: Game;
}

export default function ModalJuego({ show, onHide, juego }: ModalJuegoProps) {
  const { titulo, description, videoURL, precio } = juego;

  const { cartItems, addToCart, showCart } = useCart();

  const isInCart = cartItems.some(item => item.game.id === juego.id);
  
  return (
    <Modal show={show} onHide={onHide} centered size="lg" backdrop={true}>
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

        <p>{description}</p>
        <p>Precio: ${precio}</p>

        <div className="mb-3 text-center">
          <p>Calificación:</p>
          <p>⭐⭐⭐⭐☆</p>
          <Button variant="success" className="me-2">
            👍 Buen Juego
          </Button>
          <Button variant="danger">👎 Mal Juego</Button>
        </div>
      </Modal.Body>

      <Modal.Footer className="bg-dark">
        <Button variant="primary" className="mx-auto p-2" onClick={() => {addToCart(juego); showCart(); onHide();}}>
          {isInCart ? "Ya en el carrito" : "Comprar Ahora"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
