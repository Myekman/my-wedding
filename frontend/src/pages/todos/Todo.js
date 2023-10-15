import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { MoreDropdown } from '../../components/MoreDropdown';

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
                <Col>
                    <MoreDropdown />
                </Col>
            </Row>
      
        </Container>
       
    )
};

export default Todo;