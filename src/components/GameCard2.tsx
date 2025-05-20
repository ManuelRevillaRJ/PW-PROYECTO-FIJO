import { Link } from "react-router-dom"; // Asegúrate de que estás usando react-router-dom

interface GameCardProps {
  image?: string;
  title: string;
  description: string;
  onDetalleClick?: (juego: {
    title: string;
    description: string;
    image?: string;
  }) => void;
}

export default function GameCard2(props: GameCardProps) {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={props.image} className="card-img-top" alt={props.title} />
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
          </div>
          <div className="mt-auto">
            {/* Botón DETALLE */}
            <button
              className="btn btn-primary w-100 mt-2"
              onClick={() =>
                props.onDetalleClick &&
                props.onDetalleClick({
                  title: props.title,
                  description: props.description,
                  image: props.image,
                })
              }
            >
              Detalle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
