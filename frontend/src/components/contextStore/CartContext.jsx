import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = function ({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    let cart2 = localStorage.getItem('Cart');
    if (cart2) {
      setCart(JSON.parse(cart2));
    }
  }, []);

  const updateQuantity = (id, action) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === id) {
          if (action === 'increase') {
            item.quantity += 1;
          } else if (action === 'decrease' && item.quantity > 1) {
            item.quantity -= 1;
          }
        }
        return item;
      });
    });
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('Cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

