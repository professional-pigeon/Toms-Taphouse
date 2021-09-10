
import React from "react";
import { v4 } from 'uuid'
import PropTypes from "prop-types"
import BeerForm from "./BeerForm";

function NewBeerForm(props) {
  function handleNewBeerFormSubmission(event) {
    event.preventDefault()
    props.onNewBeerCreation(
      {
        name: event.target.name.value,
        brand: event.target.description.value,
        quantity: 124,
        price: event.target.quantity.value,
        abv: event.target.quantity.value,
        id: v4()
      }
    )
  }

  return (
    <React.Fragment>
      <h2>Add a Keg</h2>
      <BeerForm
        formSubmissionHandler={handleNewBeerFormSubmission}
        formButtonText="Add Keg"
        beerBool={false}
      ></BeerForm>
    </React.Fragment>
  )
}

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func //inherited from parent. Function from controller handleaddingnewproducttolist
}

export default NewBeerForm