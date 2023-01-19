import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Navbar, Nav, Container } from "react-bootstrap";

export const Footer = () => {
  return (
    <Navbar fixed="bottom" className="justify-content-evenly">
      <Nav>
        <Nav.Link href="https://wa.me/1234567890" className="icon">
          <FaWhatsapp />
        </Nav.Link>
        <Nav.Link href="https://instagram.com/your_account" className="icon">
          <FaInstagram />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

