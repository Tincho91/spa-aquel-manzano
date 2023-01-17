import { useState, useEffect, useContext } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../Contexts/CartContext";

export const NavBar = () => {
  const { cart } = useContext(CartContext);
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    setCartItems(cart.length);
  }, [cart]);


  return (
    <Navbar sticky="top" expand="lg" className="navbar shadow">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar--brand">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/sap-aquel-manzano.appspot.com/o/navBrand.png?alt=media&token=e13368eb-8090-4721-96ac-f33468de23ce"
            className="d-inline-block align-top navbar--brand--logo"
            alt="Brand"
          />
        </Navbar.Brand>
        <Nav className="ms-auto pe-3">
          <Nav.Link as={Link} to="/cart" className="text-dark navbar--cart">
            <FaShoppingCart /> {cartItems}
          </Nav.Link>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar--button"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/accesorios" className="text-black navbar--link">
              Accesorios
            </Nav.Link>
            <Nav.Link as={Link} to="/indumentaria" className="text-black navbar--link">
              Indumentaria
            </Nav.Link>
            <Nav.Link as={Link} to="/blanqueria" className="text-black navbar--link">
              Blanquería
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
