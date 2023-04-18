import React from 'react'
import styles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <ul className={styles.ul}>
          <li>
            <p>Telefono: 1234-5678</p>
          </li>
          <li>
            <p>Dirección: Calle Falsa 123</p>
          </li>
          <li>
            <p></p>
          </li>
        </ul>
        <span className={styles.span}>Todos los derechos reservados</span>
      </footer>
  )
}

export default Footer