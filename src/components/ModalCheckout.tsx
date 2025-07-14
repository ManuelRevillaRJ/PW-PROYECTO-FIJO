import { Modal, Button, Form } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { toast } from "sonner";
import { checkoutRequest } from "../utils/api/cartApi";
import { useUser } from "../hooks/useUser";

interface CheckoutModalProps {
  show: boolean;
  onHide: () => void;
}

export default function CheckoutModal({ show, onHide }: CheckoutModalProps) {
  const { cartItems, clearCart } = useCart();
  const { user} = useUser();
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCvv] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const total = cartItems.reduce((sum, item) => sum + item.game.precio, 0);

  const isValid =
    email.includes("@") &&
    /^\d{16}$/.test(cardNumber.replace(/\s/g, "")) &&
    /^\d{2}\/\d{2}$/.test(expDate) &&
    /^\d{3}$/.test(cvv);

  const handleConfirm = async () => {
    setSubmitted(true);
    if (!isValid) return;
    if (user?.id === undefined){return}
    try {
        const ventas = await checkoutRequest(
        parseInt(user?.id), cartItems.map((i)=>(parseInt(i.game.id))))
        .then(async (res)=>(await res.json()))
        if(!ventas.ventas){toast.error("No se pudo completar el pago D:")}
    } catch (error) {
        toast.error("Hubo un error en el pago")
    }


    toast.success(`¡Gracias por tu compra, ${email}! :)`);
    clearCart();
    onHide();

    // Reset form after successful checkout
    setEmail("");
    setCardNumber("");
    setExpDate("");
    setCvv("");
    setSubmitted(false);
  };

  return (
    <Modal show={show} onHide={onHide} centered size="lg" backdrop={true}>
      <Modal.Header closeButton className="bg-dark text-white">
        <Modal.Title>Confirmar Compra</Modal.Title>
      </Modal.Header>

      <Modal.Body className="bg-dark text-white">
        {cartItems.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <>
            <ul className="list-group mb-3">
              {cartItems.map(({ game }) => (
                <li
                  key={game.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span>
                    <strong>{game.titulo}</strong>
                  </span>
                  <span>${game.precio.toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <h5 className="text-end mb-4">Total: ${total.toFixed(2)}</h5>

            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="usuario@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  isInvalid={submitted && !email.includes("@")}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Número de Tarjeta</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  isInvalid={submitted && !/^\d{16}$/.test(cardNumber.replace(/\s/g, ""))}
                />
              </Form.Group>

              <div className="d-flex gap-3">
                <Form.Group className="mb-3 w-50">
                  <Form.Label>Fecha de Expiración</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="MM/YY"
                    value={expDate}
                    onChange={(e) => setExpDate(e.target.value)}
                    isInvalid={submitted && !/^\d{2}\/\d{2}$/.test(expDate)}
                  />
                </Form.Group>

                <Form.Group className="mb-3 w-50">
                  <Form.Label>CVV</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="123"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    isInvalid={submitted && !/^\d{3}$/.test(cvv)}
                  />
                </Form.Group>
              </div>
            </Form>
          </>
        )}
      </Modal.Body>

      <Modal.Footer className="bg-dark">
        <Button variant="secondary" onClick={onHide}>
          Cancelar
        </Button>
        <Button
          variant="success"
          disabled={cartItems.length === 0}
          onClick={handleConfirm}
        >
          Confirmar Compra
        </Button>
      </Modal.Footer>
    </Modal>
  );
}