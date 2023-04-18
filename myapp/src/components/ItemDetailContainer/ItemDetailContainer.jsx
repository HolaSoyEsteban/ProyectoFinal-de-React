import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import styles from './itemDetailContainer.module.scss'

const ItemDetailContainer = ({productos}) => {
    return (
      <div>
        { productos.map(producto => (
          <ItemDetail key={producto.id} producto={producto} />
        ))}
      </div>
    )
  }
    
  

export default ItemDetailContainer