import React from "react";
import PropTypes from "prop-types"
import BeerForm from "./BeerForm";

function EditBeer(props) {
  function handleEditBeerFormSubmission(event) {
    event.preventDefault()
    props.editProductFunction(
      {
        name: event.target.name.value,
        description: event.target.description.value,
        quantity: event.target.quantity.value,
        id: props.product.id
      }
    )
  }

  return (
    <React.Fragment>
      <h2>Edit Beer</h2>
      <BeerForm
        formSubmissionHandler={handleEditBeerFormSubmission}
        formButtonText="Edit Beer"
        beer={props.beer}
        beerBool={true}
      ></BeerForm>
    </React.Fragment>
  )
}

EditProduct.propTypes = {
  editBeerFunction: PropTypes.func //inherited from parent. Function from controller handleaddingnewproducttolist
}

export default EditBeer