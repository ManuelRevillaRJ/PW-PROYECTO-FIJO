export type Game = {
  image: string;
  title: string;
  description: string;
};

const GameCard = (e: Game) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={e.image} className="card-img-top" alt={e.title} />
        <div className="card-body">
          <h5 className="card-title">{e.title}</h5>
          <p className="card-text">{e.description}</p>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
