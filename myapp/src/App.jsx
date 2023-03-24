import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import Navbar from './components/Navbar/Navbar.jsx'

function App() {
  return (
    <div>
      <div className="brand">
        <img src="./public/img/Logo.png" alt="Logo del sitio" className="logo"/>
      </div>
      <Navbar />
      <div className="tituloPrincipal">
        <h1>Nuestros productos</h1>
      </div>
      <ItemListContainer greeting="Acá va una lista de elementos"/>
      <footer className="footer">
        <ul>
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
        <span>Todos los derechos reservados</span>
      </footer>
    </div>
  )
}

export default App
