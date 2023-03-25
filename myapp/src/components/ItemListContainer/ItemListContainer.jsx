import styles from "./itemlistcontainer.module.scss";

const ItemListContainer = ({productos}) => {
  return (
    <div className={styles.container}>
      { productos.map(producto => (
        <div key={producto.id} className={styles.tarjeta}>
          <h4>{producto.title}</h4>
          <img src={producto.img} alt={producto.title} width={280} height={450} />
          <button className={styles.botonVerDetalle}>Ver detalle</button>
          <p>${producto.price}</p>
        </div>
      ))}
    </div>
  )
}

export default ItemListContainer