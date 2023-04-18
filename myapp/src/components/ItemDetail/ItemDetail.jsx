import React from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from "./itemDetail.module.scss";
import Description from "./Description.jsx"

const ItemDetail = ({producto}) => {
    const {id} = useParams();
    if(producto.id == id)
        return (
            <div className={styles.container}>
                <h4>{producto.title}</h4>
                <img src={producto.img} alt={producto.title} width={280} height={450} />
                <Link to={`/category/${producto.category}`} className={styles.linkDecoration}>
                    <p className={styles.category}>Categoria: {producto.category}</p>
                </Link>
                <Description description= { producto.description }/>
                <button>Agregar al carrito</button>
                <p>${producto.price}</p>
            </div>
        )
}

export default ItemDetail