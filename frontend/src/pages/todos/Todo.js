import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { MoreDropdown } from '../../components/MoreDropdown';
import { axiosRes } from '../../api/axiosDefaults';
import { useHistory } from 'react-router-dom';

const Todo = (props) => {
    const { title, content, id } = props;
    const history = useHistory();
    
    const handleDelete = async () => {
        try {
        await axiosRes.delete(`/todos/${id}/`);
        history.goBack();
        } catch (err) {
        console.log(err);
        }
    };

    const handleEdit = async () => {
        history.push(`/todos/${id}/edit`);
      };
    
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
                    <MoreDropdown 
                     handleDelete={handleDelete}
                     handleEdit={handleEdit}
                    />
                </Col>
            </Row>
      
        </Container>
       
    )
};

export default Todo;