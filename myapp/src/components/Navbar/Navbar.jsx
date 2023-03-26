import { Link } from "react-router-dom";
import CartWidget from "./CartWidget.jsx";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.container_nav}>
        <Link to="/home">
          <p>Home</p>
        </Link>
        <Link to="/">
          <p>John Wick</p>
        </Link>
        <Link to="/">
          <p>Marvel</p>
        </Link>
        <Link to="/">
          <p>Stranger Things</p>
        </Link>
        <Link to="/">
          <p>The Walking Dead</p>
        </Link>
        <Link to="/">
          <p>Contacto</p>
        </Link>
        <Link to="/">
          <CartWidget />
        </Link>
       
    </nav>
  )
}

export default Navbar