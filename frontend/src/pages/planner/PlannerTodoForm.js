import React, { useState } from "react";
import { Container, Form, Button, Alert, Row, Col } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import styles from "../../styles/PlannerTodo.module.css";

function PlannerTodoForm({ setItems }) {
    const [errors, setErrors] = useState();

    const [todoData, setTodoData] = useState({
        todo: "",
        description: "",
        price: "",
        
    });
    const { todo, description , price } = setTodoData;

    const handleChange = (event) => {
        setTodoData({
          ...todoData,
          [event.target.name]: event.target.value,
        });
      };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(todoData);

    }


    const textFields = (
        <div className="text-center">
          <Form.Group>
            <Form.Label>Todo</Form.Label>
            <Form.Control
              type="text"
              name="todo"
              value={todo}
              onChange={handleChange}
            //   className="form-control-sm"
            />
          </Form.Group>
          {errors?.todo?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
    
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description "
              value={description}
            //   onChange={(e) => console.log(e.target.value)}
            //   className="form-control-sm"
            />
          </Form.Group>
          {errors?.description?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={price}
            //   onChange={(e) => console.log(e.target.value)}
            //   className="form-control-sm"
            />
          </Form.Group>
          {errors?.price?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
    
          <Button type="submit">
            Add Todo!
          </Button>
          <Button
            // className={`${btnStyles.Button} ${btnStyles.Green}`}
            // onClick={handleCancel}
          >
            Cancel
          </Button>
        </div>
      );

    
      return (
        <Container>
            <Form onSubmit={handleSubmit}>
            {textFields}
            </Form>
                <div className={styles.TodosWrapper}>
                <Row>
                        <Col xs={4} className="text-center">
                        <div className="TodosList">
                            <h3 className="TodosTitle">Todos</h3>
                        </div>
                        </Col>
                    
                        <Col xs={4} className="text-center">
                        <div className="TodosList">
                            <h3 className="TodosTitle">Todos</h3>
                        </div>
                        </Col>
                    
                        <Col xs={4} className="text-center">
                        <div className="TodosList">
                            <h3 className="TodosTitle">Todos</h3>
                        </div>
                        </Col>
                </Row>
                </div>
        </Container>
      )

};

export default PlannerTodoForm;