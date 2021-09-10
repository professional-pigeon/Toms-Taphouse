import React from 'react';
import TapList from "./TapList";
import NewBeerForm from "./NewBeerForm";
import { Button } from "react-bootstrap"

class TapControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newBeerFormVisible: false,
      mainTapList: [
        {name: "Juice Gose",
        brand: "Goose Island",
        price: 5.00,
        quantity: 124,
        abv: 4.6,
        id: "First Test Made"},
        {name: "Flying Sparrow",
        brand: "Goose Island",
        price: 5.50,
        quantity: 108,
        abv: 4.8,
        id: "Second ID MADE"},
      ]
    }
  }


handleClick = () => {
    this.setState(prevState => ({
      newBeerFormVisible: !prevState.newBeerFormVisible
    }))
  }

  handleAddingNewBeer = (newBeer) => {
    if (newBeerValid(newBeer)) {
      const newMainTapList = this.state.mainTapList.concat(newBeer);
      this.setState({
        mainTapList: newMainTapList,
        newBeerFormVisible: false
      })
    } else {
      this.setState({
        newBeerFormVisible: false
      })
    }
  }


render() {
  let visibleState = null;
  let buttonText = null;
  if (this.state.newBeerFormVisible) {
    visibleState = <NewBeerForm onNewBeerCreation={this.handleAddingNewBeer} 
    beerBool={false}/>
    buttonText = "Go back to the Tap list"
  } else {
    visibleState = <TapList
      tapList={this.state.mainTapList.sort(sortByProperty("name"))
      }
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

function newBeerValid(newBeer) {
  if (newBeer.name && newBeer.quantity && newBeer.brand && newBeer.price && newBeer.abv) {
    return true
  }
}

