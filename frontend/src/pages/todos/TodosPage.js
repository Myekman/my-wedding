import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

// import appStyles from "../../App.module.css";

function TodosPage() {
  // Add your logic here


  return (
    <Container>

    <div>
        <Row>
            <Col xs={4} className="text-center">
                <div className="TodosList">
                    <h3 className="TodosTitle">Todos</h3>
                </div>
            </Col>
            
            <Col xs={4} className="text-center">
            <div className="TodosList">
                <h3 className="TodosTitle">In progress</h3>
            </div>
            </Col>
        
            <Col xs={4} className="text-center">
            <div className="TodosList">
                <h3 className="TodosTitle">Completed</h3>
            </div>
            </Col>
        </Row>
    </div>
        
</Container>

  );
}

export default TodosPage;