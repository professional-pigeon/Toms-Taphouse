  
import React from "react";
import Otter from './otter.jpg'

function Photo() {
  const photoStyles = {
    maxWidth: '100%'
  }
  return (
    <React.Fragment>
      <img src={Otter} alt="Otter holding a beer" style={photoStyles} />
    </React.Fragment>
  );
}

export default Photo;