import { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      return JSON.parse(storedCart);
    } else {
      return [];
    }
  });

  // Update the localStorage with the current state of the cart when the cart items change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function updateCart(newItem) {
    // Check if the item being added to the cart already exists in the cart
    const existingItemIndex = cart.findIndex(
      (item) => item.name === newItem.name
    );
    if (existingItemIndex >= 0) {
      // If the item already exists in the cart, update the quantity of the existing item
      setCart((prevCart) =>
        prevCart.map((item, index) => {
          if (index === existingItemIndex) {
            return {
              ...item,
              quantity: item.quantity + newItem.quantity,
            };
          } else {
            return item;
          }
        })
      );
    } else {
      // If the item does not exist in the cart, add it as a new item
      setCart((prevCart) => [...prevCart, newItem]);
    }
  }

  function removeItem(index) {
    Swal.fire({
      title: "¿Está seguro?",
      text: "¿Desea eliminar este producto del carrito?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value) {
        // If the user confirms the deletion, remove the item from the cart
        setCart((prevCart) => prevCart.filter((item, i) => i !== index));
      }
    });
  }

  function updateQuantity(index, quantity) {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      newCart[index] = {
        ...newCart[index],
        quantity: newCart[index].quantity + quantity,
      };
      return newCart;
    });
  }

  function getTotal() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        updateCart,
        removeItem,
        updateQuantity,
        getTotal,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
