import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";


function PlannerTodoForm({ setItems }) {
    const [errors, setErrors] = useState();

    const [todoData, setTodoData] = useState({
        todo: "",
        description: "",
        price: "",
        
    });
    const { todo, description , price } = setTodoData;


    const textFields = (
        <div className="text-center">
          <Form.Group>
            <Form.Label>Todo</Form.Label>
            <Form.Control
              type="text"
              name="todo"
              value={todo}
            //   onChange={handleChange}
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
            //   onChange={handleChange}
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
            //   onChange={handleChange}
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
            <Form>
            {textFields}
            </Form>
        </Container>
      )

};

export default PlannerTodoForm;