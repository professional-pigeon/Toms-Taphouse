import React from "react";
import PropTypes from "prop-types"
import { Form, Button } from 'react-bootstrap'

function BeerForm(props) {
  return (
    <React.Fragment>
      <Form onSubmit={props.formSubmissionHandler}>
        <Form.Group
          className="mb-3"
          controlId="beerName">
          <Form.Label>Beer Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            required
            defaultValue={props.beerBool ? props.beer.name : ""}
          >
          </Form.Control>
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="beerBrand">
          <Form.Label>Maker</Form.Label>
          <Form.Control
            type="text"
            name="brand"
            defaultValue={props.beerBool ? props.beer.brand : ""}
            required />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="beerABV">
          <Form.Label>ABV</Form.Label>
          <Form.Control
            type="number"
            name="abv"
            min="0"
            step={0.1}
            defaultValue={props.beerBool ? props.beer.abv : 0}
            required />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="beerPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            min="0"
            step={0.01}
            defaultValue={props.beerBool ? props.beer.price : 0}
            required />
        </Form.Group>
        <Button
          variant="primary"
          type="submit">
          {props.formButtonText}
        </Button>
      </Form>
    </React.Fragment>
  )
}


BeerForm.propTypes = {
  onNewbeerCreation: PropTypes.func //inherited from parent. Function from controller handleaddingnewbeertolist
}

export default BeerForm