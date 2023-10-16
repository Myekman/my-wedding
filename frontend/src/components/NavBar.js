import React from 'react';
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import Avatar from './Avatar';
import { NavLink } from 'react-router-dom';
import styles from "../styles/NavBar.module.css";
import logo from "../assets/logo.png"
import { useCurrentUser, useSetCurrentUser } from '../context/CurrentUserContext';
import useClickOutsideToggle from '../hooks/useClickOutsideToggle';
import axios from "axios";
import { removeTokenTimestamp } from '../utils/utils';

const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const { expanded, setExpanded, ref } = useClickOutsideToggle();

    const handleSignOut = async () => {
        try {
          await axios.post("dj-rest-auth/logout/");
          setCurrentUser(null);
          removeTokenTimestamp()
        } catch (err) {
          console.log(err);
        }
      };

    const addPostIcon = (
        <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/posts/create"
        >
            <i className="far fa-plus-square"></i>Add post
        </NavLink>
        
    );
    
    const loggedInIcons = (
        <>
        <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to={`/todos/${currentUser?.profile_id}`}
        >
            <i className="fa-solid fa-pencil"></i>My todos
        </NavLink>
        <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/feed"
        >
            <i className="fas fa-stream"></i>Feed
        </NavLink>
        <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/liked"
        >
            <i className="fas fa-heart"></i>Liked
        </NavLink>
        <NavLink 
            className={styles.NavLink} to="/" onClick={handleSignOut}>
            <i className="fas fa-sign-out-alt"></i>Sign out
        </NavLink>
        <NavLink
            className={styles.NavLink}
            to={`/profiles/${currentUser?.profile_id}`}
        >
            <Avatar src={currentUser?.profile_image} text={currentUser?.username} height={40} />
        </NavLink>
        </>
    );

    const loggedOutIcons = (
        <>
        <NavLink 
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/signin">
            <i className = "fas fa-sign-in"></i>Sign in
        </NavLink>
        <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/signup">
            <i className = "fas fa-user-plus"></i>Sign up
        </NavLink>
        </>
    );

  return (
    <Navbar
        expanded={expanded}
        className={styles.NavBar} 
        expand="md" 
        fixed="top"
        >
        <Container>
            <NavLink to="/">
                <Navbar.Brand>
                    <img src={logo} alt="logo" height="45" />
                </Navbar.Brand>
            </NavLink>
            {currentUser && addPostIcon}
            <Navbar.Toggle
                ref={ref}
                onClick={() => setExpanded(!expanded)}
                aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto text-left">
                {/* <NavLink
                    // the 'exact' prop prevent the home icon to be active when leaving the homepage
                    exact
                    className={styles.NavLink}
                    activeClassName={styles.Active}
                    to="/">
                    <i className = "fas fa-home"></i>Home
                </NavLink> */}
                
                {currentUser  ? loggedInIcons : loggedOutIcons}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
};

export default NavBar