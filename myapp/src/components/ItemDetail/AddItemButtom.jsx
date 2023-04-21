import React from 'react';
import { useCart } from '../../Contexts/CartContext.jsx';
import styles from './additembuttom.module.scss';

const AddItemButtom = ({producto}) => {
  const { addToCart } = useCart();

  function handleClick() {
    addToCart(producto);
    // console.log(producto);
  }

  return (
    <div className={styles.container}>
      <button onClick={handleClick}>Agregar al carrito</button>
    </div>
  );
}

export default AddItemButtom;