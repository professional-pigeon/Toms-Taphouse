  
import React from "react";
import Bar from './bar.jpg'

function Photo() {
  const photoStyles = {
    maxWidth: '100%'
  }
  return (
    <React.Fragment>
      <img src={Bar} alt="Otter holding a beer" style={photoStyles} />
    </React.Fragment>
  );
}

export default Photo;