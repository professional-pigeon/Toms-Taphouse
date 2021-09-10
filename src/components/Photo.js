  
import React from "react";
import Bar from './bar.jpg'

function Photo() {
  const photoStyles = {
    maxWidth: '100%',
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block"
  }
  return (
    <React.Fragment>
      <img src={Bar} alt="Neon bar sign" style={photoStyles} />
    </React.Fragment>
  );
}

export default Photo;