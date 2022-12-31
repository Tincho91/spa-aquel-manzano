import React from 'react';
import { Container, Row, Col, Button, Carousel, Tabs, Tab, Table } from 'react-bootstrap';
import { AddToCart } from './AddToCart';
import { Link } from 'react-router-dom';

const ItemDetail = (props) => {
  return (
    <Container className="itemDetailContainer">
      <Row>
        <Col xs={12} md={6}>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src="" alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="" alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="" alt="" />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col xs={12} md={6}>
          <h1 className="itemTitle text-center">{props.title}</h1>
          <p className="itemShortDescription">{props.description}</p>
          <h2 className="itemPrice">${props.price}</h2>
          {/* Pass the stock prop to the AddToCart component */}
          <AddToCart data={props} />
        </Col>
      </Row>
      <Row>
        <Col>
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
        </Col>
      </Row>
      <Button as={Link} to="/tienda">Volver a la tienda</Button>
    </Container>
  );
};

export default ItemDetail;