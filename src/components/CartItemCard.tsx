//import React from 'react';

type CartItemCardProps = {
  name: string;
  onRemove: () => void;
};

const CartItemCard = ({ name, onRemove }: CartItemCardProps) => {
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
                    src="/public/assets/juegos/BD2.jpg"
                    alt={name}
                    style={{ height: 80 }}
                    className="mb-2 w-100 object-fit-contain rounded"
                />
                <div style={{ fontSize: '0.85rem' }}>{name}</div>
            </div>
        </div>
    );
};

export default CartItemCard;