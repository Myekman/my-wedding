import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import SignUpImage from "../../assets/sign-up.jpg";

import { Form, Button, Image, Col, Row, Container } from "react-bootstrap";

const SignUpForm = () => {
  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} ${styles.Form} p-4 `}>
          <h1 className={styles.Header}>sign up</h1>

          <Form>
            <Form.Group controlId="username">
                <Form.Label className="d-none">Username</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Username" 
                name="username"
                className = {styles.Input} 
                />
            </Form.Group>

            <Form.Group controlId="password1">
                <Form.Label className="d-none">Username</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Password" 
                name="password1" 
                className = {styles.Input} 
                />
            </Form.Group>

            <Form.Group controlId="password2">
                <Form.Label className="d-none">Username</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Confirm password" 
                name="password2" 
                className = {styles.Input} 
                />
            </Form.Group>

            <Button 
                className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}>
                Sign up
            </Button>

            <Container className={`mt-3 ${appStyles.Content}`}>
            <Link className={styles.Link} to="/signin">
                <p> Already have an account?</p>
                <span>Sign in</span>
            </Link>
            </Container>
        </Form>
    
        </Container>
        
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
      >
        <Image
          className={`${appStyles.FillerImage}`}
          src={
            SignUpImage
          }
        />
      </Col>
    </Row>

  );
};

export default SignUpForm;