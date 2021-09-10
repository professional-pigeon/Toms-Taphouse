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
    visibleState = <NewBeerForm onNewProductCreation={this.handleAddingNewProductToList} />
    buttonText = "Go back to Product List, Cadet!"
  } else {
    visibleState = <TapList
      productList={this.state.mainProductList.sort(dynamicSort("name"))
      }
      onProductSelection={this.handleChangingSelectedProduct}
      addStock={this.handleAddStock}
      subtractStock={this.handleSubtractStock}
    />
    buttonText = "Add a product, My fine Aquadet"
  }

  return (
    <React.Fragment>
      {visibleState}
      <Button onClick={this.handleClick} variant="dark" className="mt-3 p-5">{buttonText}</Button>
    </React.Fragment>
  ) 

}
