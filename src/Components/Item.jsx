import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = (props) => {
  let image;
  if (props.images) {
    image = props.images[0];
  }
  return (
        <Col md={6}>
          <Card className="item-card card-body mb-4">
            <Row className="item-card__row align-items-center align-items-lg-start">
              <Col lg={2} className="item-card__image-container mr-2 mb-3 mb-lg-0">
                <img
                  src={image}
                  alt="product"
                  className="item-card__image img-fluid fixed-size"
                />
              </Col>
              <Col lg={6} className="item-card__description-container media-body">
                <h6 className="item-card__title media-title font-weight-semibold">
                  <Link to={`/detalles/${props.id}`}>{props.name}</Link>
                </h6>
                <p className="item-card__text mb-3">{props.description}</p>
              </Col>
              <Col lg={4} className="item-card__price-container text-center">
                <h3 className="item-card__price mb-0 font-weight-semibold">${props.price}</h3>
                <Button as={Link} to={`/detalles/${props.id}`} variant="warning" className="item-card__button mt-4 text-white">
                  <i className="icon-cart-add mr-2"></i> Add to cart
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
  );
};

export default Item;