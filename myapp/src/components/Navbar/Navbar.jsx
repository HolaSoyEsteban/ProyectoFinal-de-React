import CartWidget from "./CartWidget.jsx";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.container_nav}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Categorias</a></li>
          <li><a href="#">Contacto</a></li>
          <li><CartWidget /></li>
        </ul>
    </nav>
  )
}

export default Navbar