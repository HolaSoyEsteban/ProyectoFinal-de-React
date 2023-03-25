import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import axios from "axios";

const URL_API = "https://mocki.io/v1/759e9d65-7d05-4695-8076-0ac7b25f01f9";

function App() {
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    try {
      const response = await axios(URL_API);
      setProductos(response.data);
    } catch (error) {
      console.log("Este es el ERROR: " + error);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  console.log(productos);
  
  return (
    <div>
      <div className="brand">
        <img src="./public/img/Logo.png" alt="Logo del sitio" className="logo"/>
      </div>
      <Navbar />
      <h1 className="tituloPrincipal">Bienvenidos</h1>
      <Routes>
        <Route path="/" element={<ItemListContainer productos={ productos }/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/i" element={<ItemListContainer />} />
      </Routes>
      
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
