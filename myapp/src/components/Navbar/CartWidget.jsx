import { Link } from "react-router-dom";
import styles from "./cartwidget.module.scss";
import { useCart } from '../../Contexts/CartContext';

const CartWidget = () => {
  const { cartItems } = useCart(); // obtener los productos del carrito del contexto

  // Calcular la cantidad total de productos en el carrito sumando la cantidad de cada producto
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link to={`/cart`}>
      <div className={styles.container}>
        <img
          src="../../../public/img/carritoIcono.svg"
          alt="Logo de carrito compras"
          className={styles.carritoIcono}
        />
        <p className={styles.circuloCantidad}>{totalQuantity}</p>
      </div>
    </Link>
  );
};

export default CartWidget;