import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap"

export default function Product(props) {
  const beer = { name: props.name, 
    brand: props.beer,
    price: props.price, 
    quantity: props.quantity, 
    id: props.id,
    abv: props.abv }

  return (
    <React.Fragment>
      <div className="col-6 mb-3">
        <Card>
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
              {props.brand}
            </Card.Text>
            <ul>
              <li>Quantity: {props.quantity} pints left</li>
              <li>ID: {props.id}</li>
              <li>price: {props.price}</li>
              <li>ABV: {props.abv}%</li>
            </ul>
            {/* <Button
              type="submit"
              variant="success"
              className="m-3"
              // onClick={() => props.stockPlus(prod)}
            >
              Add 1
            </Button>
            <Button
              type="submit"
              variant="warning"
              className="m-3"
              // onClick={() => props.stockMinus(prod)}
            >
              {subtract} */}
            {/* </Button> */}
          </Card.Body>
        </Card>
      </div>
    </React.Fragment>
  );
}


Product.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenProductClicked: PropTypes.func,
  stockPlus: PropTypes.func
}