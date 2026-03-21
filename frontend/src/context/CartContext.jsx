import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // ADD ITEM
  const addToCart = (item) => {
    setCartItems((prev) => {
      const exist = prev.find((x) => x.id === item.id);

      if (exist) {
        return prev.map((x) =>
          x.id === item.id
            ? { ...x, quantity: x.quantity + 1 }
            : x
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });
  };

  // REMOVE ITEM (decrease quantity)
  const removeFromCart = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // DELETE ITEM (remove completely)
  const deleteFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, deleteFromCart }}>
      {children}  ✅ {/* THIS IS THE FIX */}
    </CartContext.Provider>
  );
};