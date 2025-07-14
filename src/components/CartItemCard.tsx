//import React from 'react';

import type { Game } from "../types/types";

type CartItemCardProps = {
  juego: Game;
  onRemove: () => void;
};

const CartItemCard = ({ juego, onRemove }: CartItemCardProps) => {
    return (
        <div className="card text-dark text-center position-relative" style={{ minWidth: 120 }}>
            <button
                className="btn btn-sm btn-danger position-absolute top-0 end-0 m-1 py-1 px-1"
                style={{ lineHeight: 1, fontSize: '0.75rem' }}
                onClick={onRemove}
            >
            ×
            </button>
            <div className="card-body p-2">
                <img
                    src={juego.image}
                    alt={juego.titulo}
                    style={{ height: 80 }}
                    className="mb-2 w-100 object-fit-contain rounded"
                />
                <div style={{ fontSize: '0.85rem' }}>{juego.titulo}</div>
            </div>
        </div>
    );
};

export default CartItemCard;