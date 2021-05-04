import React from 'react';
import {Navbar,Form,Button,FormControl,Nav,NavDropdown} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg"  bg="light" variant="light" className="navbar">
  <Navbar.Brand href="#home" className="nav__left">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto nav__middle">
    <NavLink to="/benefits" exact activeClassName="nav__active" className="nav-link">
      Benefits
    </NavLink>
    <NavLink to="/goals" exact activeClassName="nav__active" className="nav-link">
      Goals
    </NavLink>
    <NavLink to="/member" exact activeClassName="nav__active" className="nav-link">
      Member
    </NavLink>
    <NavLink to="/blog" exact activeClassName="nav__active" className="nav-link">
      blog
    </NavLink>
    <NavLink to="/team" exact activeClassName="nav__active" className="nav-link">
      Team
    </NavLink>
    </Nav>
    <Nav className="nav__right">
      <NavLink activeClassName="nav__active" className="nav-link" to="/member">
        More deets
      </NavLink>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>
  )
}

export default NavigationBar
