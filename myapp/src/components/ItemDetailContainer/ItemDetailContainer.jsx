import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import styles from './itemDetailContainer.module.scss'

const ItemDetailContainer = ({productos}) => {
    const { id } = useParams();

    const producto = productos.find((producto) => producto.id === id);

    return (
      <div>
        {producto && <ItemDetail key={producto.id} producto={producto} />}
      </div>
    )
  }

export default ItemDetailContainer