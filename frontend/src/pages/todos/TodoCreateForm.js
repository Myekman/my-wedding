// import { useState } from "react"
// import { Col, Container, Row } from "react-bootstrap";


// function TodoCreateForm() {
//     const [todolist, setTodoList] = useState([]);
//     const [input, setInput] = useState("");

//     const addTodo = (todo) => {
//         const newTodo = {
//             id: Math.random(),
//             todo: todo,
//         } 

//     // add the todo to the list
//     setTodoList([...todolist, newTodo]);

//     // clear inputbox
//     setInput("");
// };

// return (
    // <Container>

    //     <div>
    //         <Row>
    //             <Col xs={4} className="text-center">
    //                 <div className="TodosList">
    //                     <h3 className="TodosTitle">Todos</h3>
    //                 <ul>
    //                     {todolist.map((todo) => (
    //                         <li key={todo.id}>
    //                             {todo.todo}
    //                         </li>
    //                     ))}
    //                 </ul>
    //                 </div>
    //             </Col>
                
    //             <Col xs={4} className="text-center">
    //             <div className="TodosList">
    //                 <h3 className="TodosTitle">In progress</h3>
    //             </div>
    //             </Col>
            
    //             <Col xs={4} className="text-center">
    //             <div className="TodosList">
    //                 <h3 className="TodosTitle">Completed</h3>
    //             </div>
    //             </Col>
    //         </Row>
    //     </div>
            
    // </Container>
    
//     );
// };

// export default TodoCreateForm;