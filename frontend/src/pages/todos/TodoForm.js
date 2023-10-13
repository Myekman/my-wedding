// import React, { useRef, useState } from "react";

// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";

// // import Upload from "../../assets/upload.png";

// import appStyles from "../../App.module.css";
// import btnStyles from "../../styles/Button.module.css";
// import { axiosReq } from "../../api/axiosDefaults";
// import { useHistory } from "react-router-dom";


// function TodoForm() {
//   const [errors, setErrors] = useState({});

//   const [todoData, setTodoData] = useState({
//     todo: "",
//     description: "",
//     price: "",
//   });
//   const { todo, description, price } = todoData;

//   const inputElement = useRef();
//   const history = useHistory();

//   const handleChange = (event) => {
//     setTodoData({
//       ...todoData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();

//     formData.append("todo", todo);
//     formData.append("description", description);
//     formData.append("price", price);

//     try {
//       const { data } = await axiosReq.post('/todos/', formData);
//       history.push(`/todos/${data.id}`);
//     } catch (err) {
//       console.log(err);
//       if (err.response?.status !== 401) {
//         setErrors(err.response?.data);
//       }
//     }
//   };


//   const textFields = (
//     <div className="text-center">
//       <Form.Group>
//         <Form.Label>Title</Form.Label>
//         <Form.Control
//           type="text"
//           name="todo"
//           value={todo}
//           ref={inputElement}
//           onChange={handleChange}
//         />
//       </Form.Group>
//       <Form.Group>
//         <Form.Label>Description</Form.Label>
//         <Form.Control
//           as="textarea"
//           rows={6}
//           name="description"
//           value={description}
//           ref={inputElement}
//           onChange={handleChange}
//         />
//       </Form.Group>
//       <Form.Group>
//         <Form.Label>Price</Form.Label>
//         <Form.Control
//           type="number"
//           name="price"
//           value={price}
//           ref={inputElement}
//           onChange={handleChange}
//         />
//       </Form.Group>

//       <Button
//         className={`${btnStyles.Button} ${btnStyles.Blue}`}
//         onClick={() => history.goBack()}
//       >
//         cancel
//       </Button>
//       <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
//         create
//       </Button>
//     </div>
//   );

//   return (
//     <Form  onSubmit={handleSubmit}>
//       <Row>
//         <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
//           <Container className={appStyles.Content}>{textFields}</Container>
//         </Col>
//       </Row>
//     </Form>
//   );
// }

// export default TodoForm;