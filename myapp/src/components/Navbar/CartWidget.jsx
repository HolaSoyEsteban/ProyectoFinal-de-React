import { Link } from "react-router-dom";
import styles from "./cartwidget.module.scss";

const CartWidget = () => {

  return (
    <Link to={`/cart`}>
      <div className={styles.container}>
        <img src="../../../public/img/carritoIcono.svg" alt="Logo de carrito compras" className={styles.carritoIcono} />
        <p>0</p>
      </div>
    </Link>
  )
}

export default CartWidget