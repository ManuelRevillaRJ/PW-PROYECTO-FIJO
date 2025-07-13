//import React from 'react';
import CartItemCard from './CartItemCard';

type CartBarProps = {
  cartItems: { name: string }[];
  onRemoveItem: (index: number) => void;
  onCheckout: () => void;
  onClearCart: () => void;
  isVisible: boolean;
};

const CartBar = ({ cartItems, onRemoveItem, onCheckout, onClearCart, isVisible }: CartBarProps) => {
  if (!isVisible) return null;

  return (
    <div
      className="position-fixed bottom-0 start-0 end-0 bg-dark text-white p-3 shadow"
      style={{ zIndex: 1050 }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <strong>Cart:</strong>
            <div
              className="mb-3 d-flex gap-2"
              style={{ overflowX: 'auto', whiteSpace: 'nowrap', flexWrap: 'nowrap' }}
            >
              {cartItems.length === 0 ? (
                'No items yet'
              ) : (
                cartItems.map((item, index) => (
                  <CartItemCard
                    key={index}
                    name={item.name}
                    onRemove={() => onRemoveItem(index)}
                  />
                ))
              )}
            </div>
          </div>
          <div className="col-12 text-end">
            <button className="btn btn-outline-light btn-sm mb-2" onClick={onCheckout}>
              Checkout
            </button>
            <br />
            <button className="btn btn-outline-danger btn-sm" onClick={onClearCart}>
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBar;