import { createContext, useContext, useState } from 'react';

const CartContext = createContext([]);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    const index = cartItems.findIndex(item => item.id === product.id); // busca el índice del producto en el arreglo cartItems
  if (index === -1) {
    // si el producto no se encuentra en el carrito, se agrega con una cantidad inicial de 1
    const newProduct = { ...product, quantity: 1 };
    setCartItems([...cartItems, newProduct]);
  } else {
    // si el producto ya se encuentra en el carrito, se actualiza la cantidad del producto existente
    const updatedItems = [...cartItems]; // crea una copia del arreglo cartItems
    updatedItems[index] = { ...updatedItems[index], quantity: updatedItems[index].quantity + 1 }; // actualiza la cantidad del producto existente
    setCartItems(updatedItems);
  }
    console.log(cartItems);
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
