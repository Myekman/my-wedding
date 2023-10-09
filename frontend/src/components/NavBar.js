import React from 'react'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"

import { NavLink } from 'react-router-dom';
import styles from "../styles/NavBar.module.css";
import logo from "../assets/logo.png"

const NavBar = () => {
  return (
  <Navbar className={styles.NavBar} expand="md" fixed="top">
    <Container>
        <NavLink to="/">
            <Navbar.Brand>
                <img src={logo} alt="logo" height="45" />
            </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto text-left">
            <NavLink to="/">
                <i className = "fas fa-home"></i>Home
            </NavLink>
            <NavLink to="/signin">
                <i className = "fas fa-sign-in"></i>Sign in
            </NavLink>
            <NavLink to="/signup">
                <i className = "fas fa-user-plus"></i>Sign up
            </NavLink>
            </Nav>
        </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar