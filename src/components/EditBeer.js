import React from "react";
import PropTypes from "prop-types"
import BeerForm from "./BeerForm";

function EditBeer(props) {
  function handleEditBeerFormSubmission(event) {
    event.preventDefault()
    props.editProductFunction(
      {
        name: event.target.name.value,
        brand: event.target.brand.value,
        quantity: props.quantity,
        price: event.target.price.value,
        abv: event.target.abv.value,
        id: props.id
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

EditBeer.propTypes = {
  editBeerFunction: PropTypes.func //inherited from parent. Function from controller handleaddingnewproducttolist
}

export default EditBeer