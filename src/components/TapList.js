import React from "react";
import Beer from "./Beer"
import PropTypes from "prop-types"

function TapList(props) {
  return (
    <React.Fragment>
      {props.tapList.map((beer) =>
        <Beer
          name={beer.name}
          brand={beer.brand}
          price={beer.price}
          quantity={beer.quantity}
          abv={beer.abv}
          id={beer.id}
          key={beer.id} 
          whenBeerClicked={props.onBeerSelection}
          pintPlus={props.addPint}
          deleteEmpty={props.deleteBeer}
          pintMinus={props.subtractPint}/>

      )}
    </React.Fragment>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array,
  onBeerSelection: PropTypes.func,
  addPint: PropTypes.func,
  subtractPint: PropTypes.func,
  deleteBeer: PropTypes.func,
}

export default TapList