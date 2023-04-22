import React, { useState } from 'react'
import styles from './itemQuantitySelector.module.scss';

const ItemQuantitySelector = () => {
  const [cantidad, setCantidad] = useState(1);

  const decrementarCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  }

  const incrementarCantidad = () => {
    setCantidad(cantidad + 1);
  }

  return (
    <div className={styles.container}>
      <button onClick={decrementarCantidad}> - </button>
      <p>{cantidad}</p>
      <button onClick={incrementarCantidad}> + </button>
    </div>
  )
}

export default ItemQuantitySelector