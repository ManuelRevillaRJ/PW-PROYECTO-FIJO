import { Modal } from "react-bootstrap";
import { useState, type FormEvent } from "react";
import FormInput from "./FormInput";
import SubmitButton from "./Button";
import { ListaGames } from "../utils/ListaJuegos";

import "../styles/Modal.css";
import { toast } from "sonner";
import { addGamesRequest } from "../utils/api/gameApi";

interface ModalAgregarJuego {
  show: boolean;
  onHide: () => void;
}

export default function ModalAgregar({ show, onHide }: ModalAgregarJuego) {
  const [titulo1, setTitulo1] = useState("");
  const [description, setDescription] = useState("");
  const [precio, setPrecio] = useState(0);
  const [imagen, setImagen] = useState("");
  const [videoURL,setVideo] = useState("")

  const juegoDefault = {
    rating: 0,
    cover: "",
    titulo: "",
    descripcion: "",
    precio: 0,
    oferta: false,
    estado: false,
    videoURL: "",
    imagenes: [],
    categoria_id: 1,
  };

  const [juego] = useState(juegoDefault);

  

  const handleSubmit = async (evt: FormEvent) => {
    evt.preventDefault();
    // prueba
    console.log({ titulo1, description, precio });

    // aca poner que agregue a la lista de juegos
    if (titulo1 != "" && description != "") {
      ListaGames.push({
        id: JSON.stringify(ListaGames.length +1),
        titulo: titulo1,
        description: description,
        precio: precio,
        image: imagen,
        
        esta_oferta: false,
        detalleImagenes: [],
        categorias: [],
        plataformas: [],
        ventas: [],
      });

    if (titulo1 != "" && description != "" && imagen != "" && videoURL != ""){
      juego.cover = imagen
      juego.descripcion = description
      juego.titulo = titulo1
      juego.videoURL = videoURL
      const response = await addGamesRequest(juego); 
      if (!response){
        toast.error("No se pudo ingresar el juego")
      } else {
        toast.success("Juego registrado!")
      }
    } else {
      toast.error("Datos incompletos")
    }

      
      onHide();

    } 
  };

  

  return (
    <Modal show={show} onHide={onHide} centered size="lg" backdrop="static">
      <Modal.Header closeButton className="bg-dark text-white">
        <Modal.Title>Agregar Juego</Modal.Title>
      </Modal.Header>

      <Modal.Body className="bg-dark text-white">
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Titulo"
            type="text"
            id="titulo1"
            value={titulo1}
            onChange={(e) => setTitulo1(e.currentTarget.value)}
          />
          <FormInput
            label="Descripcion"
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.currentTarget.value)}
          />
          <FormInput
            label="Precio"
            type="number"
            id="precio"
            value={""+precio}
            onChange={(e) => setPrecio(Number(e.currentTarget.value))}
          />

          <FormInput
            label="Imagen (URL)"
            type="text"
            id="imagen"
            value={imagen}
            onChange={(e) => setImagen(e.currentTarget.value)}
          />
          <FormInput
            label="Video (URL)"
            type="text"
            id="video"
            value={videoURL}
            onChange={(e) => setVideo(e.currentTarget.value)}
          />
          
          <SubmitButton label="Crear"/>
        </form>
      </Modal.Body>
      <Modal.Footer className="bg-dark text-white">
            {(()=> {
              if (titulo1 == "" || description == "") {
              return <button type="button" className="btn btn-danger"> Faltan datos </button>;
            }})()}
          </Modal.Footer>
    </Modal>
  );
}
