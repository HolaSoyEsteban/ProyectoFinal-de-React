import React from 'react';
import styles from "./itemQuantitySelector.module.scss";

const ItemQuantitySelector = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <div className={styles.container}>
      <button className={styles.disminuir} onClick={onDecrease}>-</button>
      <p>{quantity}</p>
      <button className={styles.aumentar} onClick={onIncrease}>+</button>
    </div>
  )
}

export default ItemQuantitySelector;