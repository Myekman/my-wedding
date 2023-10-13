import React, { useEffect, useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
// import { axiosReq } from "../../api/axiosDefaults";
import styles from "../../styles/PlannerTodo.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { useParams } from "react-router-dom";

function PlannerTodoForm() {
    const { id } = useParams();
    // const [errors, setErrors] = useState();

    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
    // const [inprogress, setInProgress] = useState([]);
    // const [completed, setCompleted] = useState([]);

    const addTodo = () => {
      const todo = {
        id: Math.floor(Math.random() * 1000),
        text: input

      }
    setTodos([todo, ...todos]);

    setInput("");
};

    useEffect(() => {
      const handleMount = async () => {
        try {
          const [{ data: todos }] = await Promise.all([
            axiosReq.get(`/todolist/?todos=${id}`),
          ]);
          setTodos(todos);
        } catch (err) {
          console.log(err);
        }
      };
  
      handleMount();
    }, [id]);


    const textFields = (
        <div className="text-center">
          <Form.Group>
            <Form.Label>Todo</Form.Label>
            <Form.Control
              type="text"
              name="title"
              // value={title}
              onChange={(e) => setInput(e.target.value)}
            //   className="form-control-sm"
            />
          </Form.Group>
          {/* {errors?.todo?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))} */}
    
          <Button type="button" onClick={() => addTodo()}>
            Add Todo!
          </Button>
          <Button
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
                <div className={styles.TodosWrapper}>
                <Row>
                        <Col xs={4} className="text-center">
                        <div className="TodosList">
                            <h3 className="TodosTitle">Todos</h3>
                            {todos.map((item) => 
                            <div className="TodoCard" key={item.id}>
                            <p className="CardText">{item.text}</p>
                            <i className="fa-solid fa-check"></i>
                            </div>
                            )}
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
      )

};

export default PlannerTodoForm;