import React from "react";
import About from "./About";
import Photo from "./Photo"
import { Card } from "react-bootstrap"

function Sidebar() {
    return (
    <React.Fragment>
      <Card>
        <Card.Title>
          <Photo />
        </Card.Title>
        <Card.Text>
          <About />
        </Card.Text>
      </Card>
    </React.Fragment>
  )
}

export default Sidebar;