import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap"

export default function Product(props) {
  const beer = { name: props.name, 
    brand: props.brand,
    price: props.price, 
    quantity: props.quantity, 
    id: props.id,
    abv: props.abv }

  let buttonDelete = ( 
    <Button
      type="submit"
      variant="danger"
      className="m-2"
      onClick={() => props.deleteEmpty(props.id)}
    >
      Delete Empty
    </Button> )
  
  let deleteBool = false
  let subtract = "Subtract 1"

  if (beer.quantity === 0) {
    subtract = "Keg Empty"
    deleteBool = true
  }

  return (
    <React.Fragment>
      <div className="col-6 mb-3">
        <Card>
          <Card.Body>
            <Card.Title onClick={() => props.whenBeerClicked(props.id)}>{props.name}</Card.Title>
            <Card.Text>
              By {props.brand}
            </Card.Text>
            <ul>
              <li>Quantity: {props.quantity} pints left</li>
              <li>price: ${props.price}</li>
              <li>ABV: {props.abv}%</li>
            </ul>
            <Button
              type="submit"
              variant="success"
              className={ deleteBool ? "m-2" : "m-3"}
              onClick={() => props.pintPlus(beer)}
            >
              Add 1
            </Button>
            <Button
              type="submit"
              variant="warning"
              className={ deleteBool ? "m-2" : "m-3"}
              onClick={() => props.pintMinus(beer)}
            >
              {subtract}
            </Button>
            { deleteBool ? buttonDelete : null}
          </Card.Body>
        </Card>
      </div>
    </React.Fragment>
  );
}


Product.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  abv: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenBeerClicked: PropTypes.func,
  pintPlus: PropTypes.func,
  pintMinus: PropTypes.func,
  deleteEmpty: PropTypes.func
}