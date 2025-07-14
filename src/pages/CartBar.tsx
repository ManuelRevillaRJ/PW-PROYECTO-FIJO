//import { useState } from 'react';
import { useCart } from '../context/CartContext';
import CartItemCard from '../components/CartItemCard';
import { toast } from "sonner";

const CartBar = () => {
  const { cartItems, removeFromCart, clearCart, isCartVisible, toggleCart } = useCart();

  const checkout = () => {
    toast.error("Checkout not implemented yet. Items: " + cartItems.map(i => i.game.titulo).join(", "));
  };

  return (
    <>
      <button
        className="btn btn-dark"
        style={{ position: 'fixed', top: '4rem', right: '1rem', zIndex: 9999 }}
        onClick={toggleCart}
      >
        🛒
      </button>

      {isCartVisible && (
        <div className="position-fixed bottom-0 start-0 end-0 bg-dark text-white p-3 shadow" style={{ zIndex: 1050 }}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <strong>Cart:</strong>
                <div className="mb-3 d-flex gap-2" style={{ overflowX: 'auto', whiteSpace: 'nowrap', flexWrap: 'nowrap' }}>
                  {cartItems.length === 0 ? (
                    'No items yet'
                    ) : (
                    cartItems.map(({ game }) => (
                        <CartItemCard
                            key={game.id}
                            game={game}
                            onRemove={() => removeFromCart(game.id)}
                            />
                        ))
                    )}
                </div>
              </div>
              <div className="col-12 text-end">
                <button className="btn btn-outline-light btn-sm mb-2" onClick={checkout}>
                  Checkout
                </button>
                <br />
                <button className="btn btn-outline-danger btn-sm" onClick={clearCart}>
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartBar;