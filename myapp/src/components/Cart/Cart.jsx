import React from 'react';
import { useCart } from "../../Contexts/CartContext";
import styles from "./cart.module.scss";
import Checkout from "./Checkout.jsx";
import ItemQuantitySelector from "./ItemQuantitySelector";

const Cart = () => {
  const { cartItems, removeProduct, increaseProductQuantity, decreaseProductQuantity } = useCart();

  return (
    <div className={styles.container}>
      <h1>Carrito</h1>
      <ul className={styles.productList}>
        {cartItems.map((product) => (
          <li key={product.id} className={styles.productItem}>
            <div className={styles.cajaConImagen}>
              <p>{product.title}</p>
              <img src={product.img} width={80} alt={product.title}/>
            </div>
            <p>Precio c/u:  $ {product.price}</p>
            <p>Precio del pack:  $ {product.price * product.quantity}</p>
            <ItemQuantitySelector
              quantity={product.quantity}
              onIncrease={() => increaseProductQuantity(product)}
              onDecrease={() => decreaseProductQuantity(product)}
            />
            <button className={styles.eliminar} onClick={() => removeProduct(product)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <Checkout />
    </div>
  )
}

export default Cart;