import React from "react"
import PropTypes from "prop-types"
import { Button, Row, Col } from "react-bootstrap"

function BeerDetail(props) {
  const { beer } = props;

  return (
    <React.Fragment>
      <h1>{beer.name}</h1>
      <p>{beer.brand}</p>
      <p>{beer.quantity} Pints left</p>
      <Row>
        {/* <Col>
          <Button
            className="btn-warning"
            onClick={() => props.editBeer(beer.id)}
          > Edit</Button>
        </Col> */}
        {/* <Col>
          <Button
            className="btn-danger"
            onClick={() => props.deleteProduct(beer.id)}
          > Delete</Button>
        </Col> */}
      </Row>
    </React.Fragment >
  )
}

BeerDetail.propTypes = {
  beer: PropTypes.object,
  // deleteBeer: PropTypes.func
};

export default BeerDetail