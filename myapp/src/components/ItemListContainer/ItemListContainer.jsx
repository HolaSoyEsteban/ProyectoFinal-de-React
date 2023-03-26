import { Link } from "react-router-dom";
import styles from "./itemlistcontainer.module.scss";
import Card from "../Card/Card.jsx"

const ItemListContainer = ({productos}) => {
  return (
    <div className={styles.container}>
      { productos.map(producto => (
        <Card key={producto.id} producto={producto} />
      ))}
    </div>
  )
}

export default ItemListContainer