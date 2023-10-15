// import React, { useEffect, useState } from "react";

// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import Container from "react-bootstrap/Container";

// import { Link, useLocation } from "react-router-dom";
// import { axiosReq } from "../../api/axiosDefaults";

// import Asset from "../../components/Asset";

// import { useCurrentUser } from "../../context/CurrentUserContext";
// import { Button } from "react-bootstrap";
// import Todo from "./Todo";
// import NoResults from "../../assets/no-results.png";

// function TodosPage({ message, filter = "" }) {
//     const currentUser = useCurrentUser();
//     const [todos, setTodos] = useState({ results: [] });
//     const [hasLoaded, setHasLoaded] = useState(false);
//     const { pathname } = useLocation();

//     useEffect(() => {
//         const fetchTodos = async () => {
//             try {
//               const { data } = await axiosReq.get(`/todos/?{id}`);
//               setTodos(data);
//               setHasLoaded(true)
//             } catch(err) {
//               console.log(err)
//             }
//         }

//         setHasLoaded(false)
//         fetchTodos();
//     }, [filter, pathname, currentUser]);


//     return (
//         <Row className="h-100">
//         <Col className="py-2 p-0 p-lg-2" lg={8} xl={9}>
  
//           <Link to="/todos/create">
//             <Button>
//               Add a task
//             </Button>
//           </Link>
  
//           {hasLoaded ? (
//             <>
//             {todos.results.length ? (
//               todos.results.map((todo) => (
//                 <Todo key={todo.id} {...todo} setTodos={setTodos} />
//               ))
//             ) : (
//               <Container>
//               <Asset src={NoResults} message={message} />
//             </Container>
//             )}
//           </>
//           ) : (
//             <Container>
//               <Asset spinner />
//             </Container>
//           )}
//         </Col>
//       </Row>
//     );
//   }

// // export default TodosPage;