import { useState, useContext } from 'react';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { CartContext } from '../Contexts/CartContext';

export const AddToCart = (props) => {
  // Initialize the state with a value of 1
  const [value, setValue] = useState(1);
  const { updateCart } = useContext(CartContext);

  // Event handler for the + button
  const handleIncrement = () => {
    // Check if the current value is less than the maximum stock
    if (value < props.data.stock) {
      setValue(value + 1);
    }
  };

  // Event handler for the - button
  const handleDecrement = () => {
    // Check if the current value is greater than 1
    if (value > 1) {
      setValue(value - 1);
    }
  };

  // Event handler for the Add to Cart button
  const handleAddToCart = () => {
    // Add the item to the cart
    const item = {
      name: props.data.name,
      price: props.data.price,
      quantity: value,
    };
    updateCart(item);

    // Show the sweet alert using the Swal.fire() function
    Swal.fire({
      title: "Item added to cart",
      text: "Your item has been added to the cart",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <div>
      {/* Render the + button */}
      <Button onClick={handleIncrement}>+</Button>
      {/* Render the input field */}
      <OverlayTrigger
        trigger={['hover', 'focus']}
        placement="top"
        overlay={
          <Tooltip id="max-quantity-tooltip">
            Maximum quantity: {props.data.stock}
          </Tooltip>
        }
      >
        <input
          type="number"
          min="1"
          max={props.data.stock}
          value={value}
          onChange={(event) => {
            // Update the value to the maximum stock if it is greater than the maximum stock
            if (event.target.value > props.data.stock) {
              setValue(props.stock);
            } else {
              setValue(parseInt(event.target.value));
            }
          }}
        />
      </OverlayTrigger>
      {/* Render the - button */}
      <Button onClick={handleDecrement}>-</Button>
      {/* Render the Add to Cart button */}
      <OverlayTrigger
        trigger={['hover', 'focus']}
        placement="top"
        overlay={
          <Tooltip id="min-quantity-tooltip">
            Minimum quantity: 1
          </Tooltip>
        }
      >
        <Button
          onClick={handleAddToCart}
          disabled={value < 1}
          onMouseDown={(event) => {
            // Update the value to 1 if it is less than 1
            if (value < 1) {
              setValue(1);
              event.preventDefault();
            }
          }}
        >
          Add to Cart
        </Button>
      </OverlayTrigger>
    </div>
  );
};