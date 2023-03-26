import Detail from '../Detail/Detail.jsx'
import styles from './ItemDetailContainer.module.scss'

const ItemDetailContainer = ({productos}) => {
    return (
      <div>
        { productos.map(producto => (
          <Detail key={producto.id} producto={producto} />
        ))}
      </div>
    )
  }
    
  

export default ItemDetailContainer