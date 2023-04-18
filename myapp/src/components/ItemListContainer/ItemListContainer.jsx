import { useParams } from "react-router-dom";
import styles from "./itemlistcontainer.module.scss";
import ItemList from "../ItemList/ItemList.jsx"

const ItemListContainer = ({productos}) => {
  const {id} = useParams();

  const filtradoDeProductos = id ? productos.filter((producto) => producto.category === id) : productos;

  return (
    <div className={styles.container}>
      {filtradoDeProductos.map((producto) => (
        <ItemList key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ItemListContainer