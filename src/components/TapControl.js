import React from 'react';
import TapList from "./TapList";
import NewBeerForm from "./NewBeerForm";
import { Button } from "react-bootstrap"

class ProductControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newBeerFormVisible: false,
      mainTapList: []
    }
  }


handleClick = () => {
    this.setState(prevState => ({
      newProductFormVisible: !prevState.newProductFormVisible
    }))
  }

render() {
  let visibleState = null;
  let buttonText = null;
  if (this.state.newBeerFormVisible) {
    visibleState = <NewBeerForm onNewBeerCreation={this.handleAddingNewBeer} />
    buttonText = "Go back to the Tap list"
  } else {
    visibleState = <TapList
      productList={this.state.mainTapList.sort(sortByProperty("name"))
      }
      onProductSelection={this.handleChangingSelectedProduct}
      addStock={this.handleAddStock}
      subtractStock={this.handleSubtractStock}
    />
    buttonText = "Add a Beer"
  }

  return (
    <React.Fragment>
      {visibleState}
      <Button onClick={this.handleClick} variant="dark" className="mt-3 p-5">{buttonText}</Button>
    </React.Fragment>
  ) 

}
}

export default TapControl

const sortByProperty = (property) => {
  let sortOrder = 1;
  return function (a, b) {
    const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    return result * sortOrder;
  }
}

