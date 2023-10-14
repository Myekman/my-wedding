import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';

const Todo = (props) => {
    const { title, content } = props;


    
    return (
        <Container>
            <Row>
                <Col>
                <Card.Body>
                    {title}
                </Card.Body>
                </Col>
                <Col>
                <Card.Body>
                    {content}
                </Card.Body>
                </Col>
            </Row>
      
        </Container>
       
    )
};

export default Todo;