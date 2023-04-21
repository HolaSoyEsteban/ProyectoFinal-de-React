import { useEffect, useState } from 'react'
import {Link, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Brand from './components/Brand/Brand'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart.jsx'
import Loader from './components/Loader/loader.jsx'
import db from "../db/firebase-config";
import { getDocs, collection } from 'firebase/firestore';
import { CartProvider } from './Contexts/CartContext.jsx';

function App() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const referenciaColeccionItemsFirestore = collection(db, "items");

  const getProductos = async () => {
    const coleccionItems = await getDocs(referenciaColeccionItemsFirestore);
    const items = coleccionItems.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setProductos(items);
    setLoading(false);
  };

  useEffect(() => {
    getProductos();
  }, []);

  if (loading){
    return (
      <div>
        <Loader />
      </div>
    )
  }

  return (
    <div>
      <Link to="/">
        <Brand />
      </Link>
      <CartProvider>
        <Navbar />
        <h1 className="tituloPrincipal">¡Explora un universo de historias en nuestra tienda de cómics online!</h1>
        <Routes>
          <Route path="/" element={<ItemListContainer productos={ productos }/>} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/item/:id" element={<ItemDetailContainer productos={ productos } />} />
          <Route path="/category/:id" element={<ItemListContainer productos={ productos }/>} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
      
      <Footer />
    </div>
  )
}

export default App
