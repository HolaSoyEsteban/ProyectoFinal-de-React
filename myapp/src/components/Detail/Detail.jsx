import React from 'react'
import { useParams } from 'react-router-dom'
import styles from "./detail.module.scss";

const Detail = ({producto}) => {
    const {id} = useParams();
    if(producto.id == id)
    return (
        <div className={styles.container}>
            <h4>{producto.title}</h4>
            <img src={producto.img} alt={producto.title} width={280} height={450} />
            <p className={styles.category}>Categoria: {producto.category}</p>
            <p>Sinopsis</p>
            <p>{producto.description}</p>
            <button>Agregar al carrito</button>
            <p>${producto.price}</p>
        </div>
    )

}

export default Detail