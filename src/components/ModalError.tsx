import { Modal } from "react-bootstrap";
import SubmitButton from "./Button";

import "../styles/Modal.css";

interface ModalErrorTexto {
  show: boolean,
  label: string,
  onHide: () => void;
}

export default function ModalError({show,label, onHide}: ModalErrorTexto) {


  return (
    <Modal show={show} onHide={onHide} centered size="lg" backdrop="static">
      <Modal.Header closeButton className="bg-dark text-white">
        <Modal.Title>{label}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark text-white">
        <form onSubmit={onHide}>
          <SubmitButton label="Aceptar"/>
        </form>
      </Modal.Body>
    </Modal>
  );
}
