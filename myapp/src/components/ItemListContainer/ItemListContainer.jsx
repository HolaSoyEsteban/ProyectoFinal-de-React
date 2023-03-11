import styles from "./itemlistcontainer.module.scss";

const ItemListContainer = ({greeting}) => {
  return (
    <div className={styles.container}>
        <div>
            <p>{greeting}</p>
        </div>
    </div>
  )
}

export default ItemListContainer