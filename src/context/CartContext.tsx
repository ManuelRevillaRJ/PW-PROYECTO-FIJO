import { createContext, useContext, useState, type ReactNode } from "react";
import type { Game } from "../types/types";

export interface CartItem {
  game: Game;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (game: Game) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  showCart: () => void;
  toggleCart: () => void;
  isCartVisible: boolean;
}


const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (game: Game) => {
  setCartItems(prev => {
    const exists = prev.some(item => item.game.id === game.id);
    return exists ? prev : [...prev, { game }];
  });
};
  const [isCartVisible, setCartVisible] = useState(false);
  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.game.id !== id));
  };

  const clearCart = () => setCartItems([]);

  const showCart = () => setCartVisible(true);
  const toggleCart = () => setCartVisible((prev) => !prev);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, showCart, toggleCart,  isCartVisible}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};