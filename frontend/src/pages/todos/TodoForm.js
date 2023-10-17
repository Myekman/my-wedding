import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import btnStyles from "../../styles/Button.module.css";
import logo from "../../assets/logo.png"
// import Upload from "../../assets/upload.png";
import { axiosReq } from "../../api/axiosDefaults";
import { Link, useHistory } from "react-router-dom";
import { useRedirect } from "../../hooks/useRedirect";
import { useCurrentUser } from "../../context/CurrentUserContext";


function TodoForm() {
  useRedirect("loggedOut");
  const currentUser = useCurrentUser();
  
  const [errors, setErrors] = useState({});

  const [todoData, setTodoData] = useState({
    title: "",
    content: "",
  });
  const { title, content } = todoData;

  const history = useHistory();

  const handleChange = (event) => {
    setTodoData({
      ...todoData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);

    try {
      await axiosReq.post('/todos/', formData);
      history.push(`/todos/${currentUser?.profile_id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };


  const textFields = (
    <div>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="content"
          value={content}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={`${btnStyles.Button} ${btnStyles.Green}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Green}`} type="submit">
        create
      </Button>
    </div>
  );

  return (
    <Container>
        <h3 className="text-center">Add a todo</h3>
        <Form  onSubmit={handleSubmit}>
        <Row>
            <Col sx={5} lg={6}>
            <Container>{textFields}</Container>
            </Col>
            <Col lg={6} className="text-center mt-5">
            <Link to={`/todos/${currentUser?.profile_id}`}>
            <img src={logo} alt="logo" height="90" />
            </Link>
            <p>View all todos, click the icon</p>
            </Col>
        </Row>
        </Form>
    </Container>
  );
}

export default TodoForm;