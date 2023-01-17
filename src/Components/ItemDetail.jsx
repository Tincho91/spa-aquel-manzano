import React from 'react';
import { Container, Row, Col, Button, Carousel, Tabs, Tab, Table } from 'react-bootstrap';
import { AddToCart } from './AddToCart';
import { Link } from 'react-router-dom';

const ItemDetail = (props) => {
  return (
    <Container fluid className="itemDetailContainer h-100 d-flex align-items-stretch">
      <Row className="h-100 w-100 align-items-center">
        <Col xs={12} md={6} className="p-0">
        <Carousel variant='dark' className="item-card__carousel h-100 w-100">
          {props.images && props.images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100 h-100 item-card__carousel-image h-100"
                src={image}
                alt=""
              />
            </Carousel.Item>
          ))}
        </Carousel>
        </Col>
        <Col xs={12} md={6} className="d-flex flex-column justify-content-center align-items-center p-5">
          <h1 className="itemTitle text-center">{props.name}</h1>
          <p className="itemShortDescription">{props.description}</p>
          <h2 className="itemPrice">${props.price}</h2>
          <AddToCart data={props} />
          <Tabs defaultActiveKey="description" className="itemDetailsTabs">
            <Tab
              eventKey="description"
              title="Descripcion"
              className="itemDetailsTabs--description"
            >
              <p className="itemDetailsTabs--description_text">
                {props.longDescription}
              </p>
            </Tab>
            <Tab
              eventKey="specifications"
              title="Especificaciones"
              className="itemDetailsTabs--specifications"
            >
              <Table striped bordered hover>
                <tbody>
                  <tr>
                    <td>Marca</td>
                    <td>{props.brand}</td>
                  </tr>
                  <tr>
                    <td>Modelo</td>
                    <td>{props.model}</td>
                  </tr>
                  <tr>
                    <td>Dimensiones</td>
                    <td>{props.dimensions}</td>
                  </tr>
                  <tr>
                    <td>Material</td>
                    <td>{props.material}</td>
                  </tr>
                </tbody>
              </Table>
            </Tab>
          </Tabs>
          <Button as={Link} to="/tienda">Volver a la tienda</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;