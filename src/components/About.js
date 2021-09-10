import React, { Fragment } from "react";

function About() {
  return (
    <React.Fragment>
      <h3 className="display-2">Tom's Tap House </h3>
      <br></br>
      <p>I'm a beer afficionado in a beer crazy world! We have 16 custom crafts on tap curated by our top tier beer taster. Stop by Tom's and find your new beer obsession!</p>
      <br></br>
      <ul> 
        <li>Hours of Operations: Wed-Sun 4-12</li>
        <li>Contact: ###-###-####</li>
        <li>Concerns: Owners@address</li>
      </ul>
    </React.Fragment>
  );
}

export default About;