import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Navbar, Nav } from "react-bootstrap";
import { useState, useEffect } from 'react'

export const Footer = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.onscroll = function() {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
  }, []);

  return (
    <Navbar className={`shadow footer justify-content-evenly mt-5 ${show ? 'show' : ''}`}>
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




