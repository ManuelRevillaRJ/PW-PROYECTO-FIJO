import { useState } from 'react';
import { useCart } from '../context/CartContext';
import CartItemCard from '../components/CartItemCard';
import CheckoutModal from '../components/ModalCheckout';

const CartBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { cartItems, removeFromCart, clearCart } = useCart();

  const checkout = () => {
    setShowCheckout(true);
  };
  const [showCheckout, setShowCheckout] = useState(false);
  const toggleCart = () => setIsVisible(!isVisible);

  return (
    <>
      {/* 🔹 Always-visible toggle button */}
      <button
        className="btn btn-dark"
        style={{ position: 'fixed', top: '4rem', right: '1rem', zIndex: 9999 }}
        onClick={toggleCart}
      >
        🛒
      </button>

      {/* 🔹 CartBar only shown when visible */}
      {isVisible && (
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
                        juego={game}
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
                <CheckoutModal show={showCheckout} onHide={() => setShowCheckout(false)} />
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