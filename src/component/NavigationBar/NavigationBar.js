import React, { useState } from 'react';
import {Navbar,Form,Button,FormControl,Nav,NavDropdown,Fade } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Aos from "aos";

import "aos/dist/aos.css";
import "./NavigationBar.css";
import logo from "../../Image/logo.png";

function NavigationBar() {
  const [prevOffset,setPrevOffset] =useState();
  const [scrollDirection, setScrollDirection] = useState(null)
  const customStyle={
    position: scrollDirection =="up" && prevOffset > 50 ? "fixed" : "relative",
    top:"0",
    width:"100%",
  }
  // window.addEventListener('scroll',()=>{
  //   let scrollY = window.scrollY;
  //   if (scrollY === 0) {
  //     setScrollDirection(null)
  // }
  // if (scrollY > prevOffset){
  //     setScrollDirection("down")
  // } else if (scrollY < prevOffset) {
  //     setScrollDirection("up");
  // }
  // setPrevOffset(scrollY);
  // })

  Aos.init({
    offset: window.innerHeight > 1000 ?  600: 300,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 50,
  });
  return (
    <div>
      <Navbar collapseOnSelect expand="lg"  bg="light" variant="light" className={`navbar ${scrollDirection =='down' ? 'fade_out' :'fade_int'}` } style={customStyle}>
      <Navbar.Brand className="nav__left">
        <NavLink to="/SAE" activeClassName="nav__active" className="nav-link">
          <img src={logo} alt="logo" width="100" height="35" style={{marginRight:"10px",backgroundColor:"black",borderRadius:"4px"}}/> 
        {/* React-Bootstrap */}
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto nav__middle">
        <NavLink to="/SAE/benefits" exact activeClassName="nav__active" className="nav-link">
          Benefits
        </NavLink>
        <NavLink to="/SAE/events" exact activeClassName="nav__active" className="nav-link">
          Events
        </NavLink>
        <NavLink to="/SAE/member" exact activeClassName="nav__active" className="nav-link">
          Member
        </NavLink>
        </Nav>
        <Nav className="nav__right">
          <NavLink activeClassName="nav__active" className="nav-link" to="/member">
            More details
          </NavLink>
        </Nav>
      </Navbar.Collapse>
</Navbar>
    </div>
  )
}

export default NavigationBar
