import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { FaStore } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';

export const LandingCarrousel = () => {

  return (
    <Container fluid className="carrousel px-0">
      <Image 
      className="main-logo" 
      fluid 
      roundedCircle 
      src="https://firebasestorage.googleapis.com/v0/b/sap-aquel-manzano.appspot.com/o/mainLogo.png?alt=media&token=9f3df46f-a97b-4f81-bb9a-712a483a9f45" 
      alt="Aquel Manzano"
      />
      <LinkContainer to="/tienda">
        <Button className="main-button justify-content-center align-items-center">Ir a la Tienda! <FaStore className="main-button--icon ms-3"/></Button>
      </LinkContainer>
      <Carousel fade controls={false} variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 carrousel-img"
            src="https://firebasestorage.googleapis.com/v0/b/sap-aquel-manzano.appspot.com/o/landing1.png?alt=media&token=dc1a66b8-9369-48dc-bf61-d4417cbb1cf0"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carrousel-img"
            src="https://firebasestorage.googleapis.com/v0/b/sap-aquel-manzano.appspot.com/o/landing2.png?alt=media&token=0463ba4b-69d3-49f9-9ad9-5f4a54a0be95"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carrousel-img"
            src="https://firebasestorage.googleapis.com/v0/b/sap-aquel-manzano.appspot.com/o/landing3.png?alt=media&token=55e85bb1-8bb8-4044-98af-86fdc0cce63e"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}