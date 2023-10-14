import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Link, useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Todo from "./Todo";

// import appStyles from "../../App.module.css";

function TodosPage() {
  const { id } = useParams();
  const [todo, setTodo] = useState({ results: [] });


useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: todo }] = await Promise.all([
          axiosReq.get(`/todos/${id}`),
        ]);
        setTodo({ results: [todo] });
        console.log(todo)
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Container>

    <div>
        <Row>
            <Col xs={12}>
            <div className="TodosList">
                <Link to={'/todos/create'}>add todo!</Link>
            </div>
            </Col>
        </Row>

        <Row>
            <Col xs={12} className="text-center">
            <div className="TodosList">
              <h1>Todos</h1>
                <Todo {...todo.results[0]} />
            </div>
            </Col>
        </Row>
    </div>
        
  </Container>

  );
}

export default TodosPage;