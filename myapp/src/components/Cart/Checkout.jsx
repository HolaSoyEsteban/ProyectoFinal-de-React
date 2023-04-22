import React, { useState } from 'react';
import { useCart } from '../../Contexts/CartContext.jsx';
import styles from './checkout.module.scss';
import { collection, addDoc } from "firebase/firestore";
import db from "../../../db/firebase-config.js";

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    phone: "",
  });


  
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
    // Validar que los correos electrónicos ingresados sean iguales
    if (formData.email !== formData.confirmEmail) {
      alert("Los correos electrónicos no coinciden.");
      return;
    }
  
    // Crear objeto con datos del carrito y formulario
    const orderData = {
        items: cartItems,
        fecha: new Date(),
        estado: "generada",
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        total: total,
      };
    
      const ordersRef = collection(db, "orders");
      addDoc(ordersRef, orderData)
      .then((docRef) => {
        console.log("Orden agregada a Firestore con éxito.");
        alert("La orden se ha generado correctamente. ID de la orden: " + docRef.id);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          confirmEmail: "",
          phone: "",
        });
        clearCart();
        })
        .catch((error) => {
          console.error("Error al agregar orden a Firestore:", error);
        });
    };

  // Función para limpiar carrito
  

  // Calcula la suma total de los productos en el carrito
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  

  return (
    <div className={styles.container}>
      <h2>Checkout</h2>
      <div className={styles.itemsContainer}>
        <h3>Detalle de los productos</h3>
        {cartItems.map((item) => (
          <div key={item.id} className={styles.item}>
            <p className={styles.itemTitulo}>{item.title}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio: ${item.price}</p>
          </div>
        ))}
        <div className={styles.muestraElTotal}>
          <p>Total a pagar: ${total}</p>
        </div>
      </div>
      <div className={styles.formContainer}>
        <h3>Detalles del comprador:</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Apellido:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Confirmar email:
            <input
              type="email"
              name="confirmEmail"
              value={formData.confirmEmail}
              onChange={handleInputChange}
              required
            />
            {formData.email !== formData.confirmEmail && <span>Los correos no coinciden</span>}
          </label>
          <label>
            Teléfono:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit" disabled={!cartItems.length}>Realizar la compra</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;