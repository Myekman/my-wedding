import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Link, useLocation, useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Todo from "./Todo";
import { Button } from "react-bootstrap";
import Asset from "../../components/Asset";
import NoResults from "../../assets/no-results.png"
// import appStyles from "../../App.module.css";

function TodoPage({ message }) {
  const { id } = useParams();
  const [todos, setTodos] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const pathname = useLocation();

useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: todos }] = await Promise.all([
          axiosReq.get(`/todos/?owner__profile=${id}`),
        ]);
        setTodos(todos);
        setHasLoaded(true)
        console.log(todos)
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false)
    handleMount();
  }, [id, pathname ]);

  console.log(todos)

  return (
    <Row className="h-100">
    <Col className="py-2 p-0 p-lg-2" lg={8} xl={9}>

      <Link to="/todos/create">
        <Button>
          Add todo
        </Button>
      </Link>

      {hasLoaded ? (
        <>
        {todos.results.length ? (
          todos.results?.map((todo) => (
            <Todo key={todo.id} {...todo} setTodos={setTodos} />
          ))
        ) : (
          <Container>
          <Asset src={NoResults} message={message} />
        </Container>
        )}
      </>
      ) : (
        <Container>
          <Asset spinner />
        </Container>
      )}
    </Col>
  </Row>

  );
}

export default TodoPage;