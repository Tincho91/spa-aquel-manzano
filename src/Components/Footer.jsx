import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Navbar, Nav } from "react-bootstrap";

export const Footer = () => {
  return (
    <Navbar className="shadow footer justify-content-evenly">
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
