import { Link } from "react-router-dom";
import CartWidget from "./CartWidget.jsx";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.container_nav}>
        <Link to="/home">
          <p>Home</p>
        </Link>
        <Link to="/category/John_Wick">
          <p>John Wick</p>
        </Link>
        <Link to="/category/Marvel">
          <p>Marvel</p>
        </Link>
        <Link to="/category/Stranger_Things">
          <p>Stranger Things</p>
        </Link>
        <Link to="/category/The_Walking_Dead">
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