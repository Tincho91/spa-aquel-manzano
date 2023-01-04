import React from 'react';
import Swal from 'sweetalert2';
import { doc, getDocs, setDoc, collection, serverTimestamp, increment, updateDoc} from "firebase/firestore";
import { db } from '../dataBase/firebaseConfig';
import { useContext } from 'react';
import { CartContext } from '../Contexts/CartContext';
import { Button, Table, Container } from 'react-bootstrap';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export const Cart = () => {
  // Obtener el estado y las funciones del carrito de compras
  const { cart, removeItem, updateQuantity, getTotal, setCart } = useContext(CartContext);

  const updateStock = async (order) => {
    try {
      Object.values(order.items).forEach(async (item) => {
        const itemRef = doc(db, "productos", item.id);
        await updateDoc(itemRef, {
          stock: increment(-order.items.quantity)
        });
      });
    } catch (error) {
      console.error(error);
      // Mensaje de error.
      Swal.fire({
        title: "Error",
        text: "No se pudo actualizar el stock de los productos. Inténtalo de nuevo más tarde.",
        icon: "error",
      });
    }
  }

  const createOrder = () => {
    // Input para nombre, email y teléfono. (SIMPLE)
    Swal.fire({
      title: 'Confirmar compra',
      html: `
        <input id="name" class="swal2-input" placeholder="Nombre y apellido">
        <input id="email" class="swal2-input" placeholder="Email">
        <input id="phone" class="swal2-input" placeholder="Teléfono">
      `,
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then(async (result) => {
      if (result.value) {
        // Cuando el usuario confirma, toma los datos.
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
  
        // Crea una orden, con name, email, and phone number, tambien con sus items y el total
        const order = {
          buyer: {
            name,
            email,
            phone
          },
          date: serverTimestamp(),
          items: cart.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity
          })),
          total: getTotal()
        }

        const uploadOrderToFirestore = async() => {
          try {
            const newOrderRef = doc(collection(db, "orders"))
            await setDoc(newOrderRef, order);

            // Alerta de exito
            Swal.fire({
              title: "Compra realizada",
              text: "Gracias por su compra!",
              icon: "success",
            });
          } catch (error) {
            console.error(error);
            // Alerta de error
            Swal.fire({
              title: "Error",
              text: "No se pudo realizar la compra. Inténtalo de nuevo más tarde.",
              icon: "error",
            });
          }
        }
        uploadOrderToFirestore()
        .then(result => {
          updateStock(order);

          // Limpiar el carrito
          setCart([]);
        });
      }
    });
  }
  


  if (cart.length === 0) {
    // Mostrar un mensaje si el carrito está vacío
    return (
      <div>
        <p>Su carrito está vacío</p>
        <Button href="/tienda">Volver a la tienda</Button>
      </div>
    );
  }

  return (
    <Container fluid>
      {/* Tabla con los productos en el carrito */}
      <Table striped bordered hover className='text-center'>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Subtotal</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={item.name}>
              <td><img src="" alt="Producto" /></td>
              <td>{item.name}</td>
              <td>
                <Button onClick={() => updateQuantity(index, -1)} className="me-2"><FaMinus /></Button>
                {item.quantity}
                <Button onClick={() => updateQuantity(index, 1)} className="ms-2"><FaPlus /></Button>
              </td>
              <td>${item.price}</td>
              <td>${item.quantity * item.price}</td>
              <td>
                <Button onClick={() => removeItem(index)}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* Mostrar el costo total */}
      <p>Total: ${getTotal()}</p>
      {/* Botón de checkout */}
      <Button onClick={createOrder}>Proceder al checkout</Button>
      <Button as={Link} to="/tienda">Volver a la tienda</Button>
    </Container>
  );
};