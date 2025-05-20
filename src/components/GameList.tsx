import React from 'react';
import GameCard, {type Game} from './GameCard';

const games = [
  {
    image: 'assets\carrusel\infinityblade.jpg',
    title: 'Infinity Blade',
    description: 'Epic action RPG with stunning visuals.'
  },
  {
    image: 'assets\carrusel\ironsight.jpg',
    title: 'Ironsight',
    description: 'Futuristic FPS with tactical combat.'
  },
  {
    image: 'assets\carrusel\titanfall.jpg',
    title: 'Titanfall',
    description: 'Multiplayer shooter with mechs and parkour.'
  }
];

const GameList = () =>{
  return (
    <div className="container mt-4 mb-4">
      <h1 className="mb-4">Top Rated Games</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {games.map((e: Game) => (
          <GameCard image={e.image} title={e.title} description={e.description} />
        ))}
      </div>
    </div>
  );
}

export default GameList
