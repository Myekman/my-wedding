import React from 'react';
import NoResults from '../assets/not-found.jpg';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NotFound = () => {
    return (
      <div>
        <Container>
            <Row>
            <Col>
                <img src={NoResults} alt="noresults" />
            </Col>
            <Col>
                <p>Could not find the page you are looking for...</p>
            </Col>
            </Row>
        </Container>
      </div>
    );
  };

export default NotFound