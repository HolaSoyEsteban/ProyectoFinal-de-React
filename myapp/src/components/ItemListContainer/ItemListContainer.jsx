import { Link, useParams } from "react-router-dom";
import styles from "./itemlistcontainer.module.scss";
import ItemList from "../ItemList/ItemList.jsx"

const ItemListContainer = ({productos}) => {
  const {id} = useParams();

  if(id === undefined){
    return (
      <div className={styles.container}>
        { productos.map(producto => (
          <ItemList key={producto.id} producto={producto} />
        ))}
      </div>
    )
  }else{
    return (
      <div className={styles.container}>
        { productos.filter(producto => producto.category == id).map(producto => (
          <ItemList key={producto.id} producto={producto} />
        ))}
      </div>
    )
  }
}

export default ItemListContainer