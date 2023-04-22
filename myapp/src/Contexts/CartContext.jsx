import { createContext, useContext, useEffect, useState } from 'react';

const CART_STORAGE_KEY = 'myCart';

const CartContext = createContext([]);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY));
    if (storedCart) {
      setCartItems(storedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

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
  }

  function removeProduct(product) {
    const newCartItems = cartItems.filter(item => item.id !== product.id);
    setCartItems(newCartItems);
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newCartItems));
  }

  function clearCart() {
    setCartItems([]);
    localStorage.removeItem(CART_STORAGE_KEY);
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeProduct, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}