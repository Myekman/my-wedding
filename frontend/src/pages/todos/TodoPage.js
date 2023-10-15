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

import btnStyles from "../../styles/Button.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";


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
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false)
    handleMount();
  }, [id, pathname ]);

  return (
    <Row className="h-100">
    <Col>

      <Link to="/todos/create">
        <Button className={`${btnStyles.Button} ${btnStyles.Green}`}>
          Add todo
        </Button>
      </Link>

      {hasLoaded ? (
        <>
        {todos.results.length ? (
        <InfiniteScroll
          children={
              todos.results?.map((todo) => (
                <Todo key={todo.id} {...todo} setTodos={setTodos} />
              ))}
              dataLength={todos.results.length}
              loader={<Asset spinner />}
              hasMore={!!todos.next}
              next={() => fetchMoreData(todos, setTodos)}
                
        />
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