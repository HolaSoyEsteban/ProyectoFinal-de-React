import React from 'react';
import { useCart } from "../../Contexts/CartContext";
import styles from "./cart.module.scss";

const Cart = () => {
  const { cartItems } = useCart();

  return (
    <div className={styles.container}>
      <ul className={styles.productList}>
        {cartItems.map((product, index) => (
          <li key={index} className={styles.productItem}>
            <div>
              <p>{product.title}</p>
              <img src={product.img} width={100} alt={product.title}/>
            </div>
            <p>Cantidad: {product.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cart;