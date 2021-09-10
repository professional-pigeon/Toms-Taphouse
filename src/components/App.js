import './App.css';
import React from 'react';
import Sidebar from './SideBar';
import TapControl from './TapControl'
import { Row, Col, Container} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <Container className="mt-3">
        <Row>
          <div className="col-md-4">
            <Sidebar />
          </div>
          <Col>
            <Row>
              <TapControl />
            </Row>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
