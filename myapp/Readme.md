# Tienda de comics online ReactComics

## Descripción

Este sitio fue realizado para entregar como proyecto final del curso de React en Coderhouse.
ReactComics es una tienda de cómics online ficticia desarrollada en React.
El sitio cuenta con un catálogo de productos que pueden ser filtrados por categoría y vista detallada de cada producto. Además, los usuarios pueden agregar productos a su carrito de compra y finalizar su pedido en la sección de checkout.

Los componentes que se utilizan en este proyectos son los siguientes:

- main.jsx: Archivo principal de la aplicación donde se renderiza el componente App.
- app.jsx: Componente principal de la aplicación donde se definen las rutas y se obtiene la información de los productos a través de la base de datos Firebase.
- loader.jsx: Componente que muestra una animación de carga mientras se obtiene la información de los productos desde la base de datos Firebase.
- Brand.jsx: Muestra el logo con una animación y te dirige al home desde cualquier parte del sitio en donde te encuentres.
- Navbar.jsx: Componente que muestra la barra de navegación con los enlaces a las diferentes categorías y al carrito de compras, tiene como hijo al componente CartWidget.
- CartWidget.jsx: Componente que muestra el ícono del carrito de compras y la cantidad de productos agregados en la barra de navegación.
- ItemListContainer.jsx: Componente que muestra el listado de productos comp´leto y tambien los puede filtrar por categoría, tiene como hijo al componente ItemList.
- ItemList.jsx: Componente que muestra la vista previa de un producto en la página principal.
- ItemDetailContainer.jsx: Componente que muestra la vista detallada de un producto seleccionado, tiene como hijo al componente ItemDetail.
- ItemDetail.jsx: Componente que muestra la información detallada de un producto seleccionado, y tiene como hijo al componente AddItemButtom para agregar productos.
- AddItemButton.jsx: Componente que permite agregar un producto al carrito de compras.
- CartContext.jsx: Archivo que define el contexto para compartir la información del carrito de compras entre diferentes componentes.
- Cart.jsx: Componente que muestra el contenido del carrito de compras y permite eliminar productos o finalizar la compra.
- ItemQuantitySelector.jsx: Componente que permite seleccionar la cantidad de un producto ya sea para disminuir o aumentar, en el carrito de compras.
- Checkout.jsx: Componente que permite al usuario ingresar su información personal para finalizar la compra, devolviendole un identificador de la operacion.

## Instalación

Para instalar este proyecto de React, necesitarás tener instalado Node.js en tu computadora. Luego, puedes seguir estos pasos:

Descarga o clona el proyecto desde https://github.com/HolaSoyEsteban/ProyectoFinal-de-React.

Abre una terminal en la carpeta raíz del proyecto.

Ejecuta el siguiente comando para instalar las dependencias:

    npm install

Esto instalará todas las dependencias que necesita el proyecto y creará una carpeta llamada node_modules.

Para ejecutar el proyecto en un servidor local, ejecuta el siguiente comando:

    npm start

Este comando iniciará un servidor local en tu computadora y abrirá una ventana del navegador para que puedas ver el proyecto.

Con estos pasos, deberías poder instalar y ejecutar este proyecto de React en tu computadora.

## Uso

Es una tienda de comics bastante intuitiva, prueba su funcionamiento, comienza agregando productos al carrito, muevete por las categorias de la barra de navegación, dirigete al carrito y agrega o disminuye la cantidad de items desde los botones correspondientes o elimina el item del carrito con el boton eliminar. En el Checkout puedes verificar la lista de productos y el precio total a pagar.de productos que se está por comprar. 

## Contribución

No necesita contribución, pero acepto cualquier comentario para mejorar el código ya que recién estoy aprendiendo.
