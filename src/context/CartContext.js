import React, { createContext, useState } from 'react';

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    // your logic here
  };

  return React.createElement(
    CartContext.Provider,
    { value: { cartItems, addToCart } },
    children
  );
}

export { CartContext, CartProvider };
