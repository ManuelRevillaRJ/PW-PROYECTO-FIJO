interface GameCardProps {
  image?: string;
  title: string;
  description: string;
}

export default function GameCard2(props: GameCardProps) {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={props.image} className="card-img-top" alt={props.title} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
