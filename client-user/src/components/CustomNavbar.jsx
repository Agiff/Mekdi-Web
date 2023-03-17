import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const CustomNavbar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <NavLink className='navbar-brand' to='/'>Pizza Donald</NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className='nav-link' to='/'>Home</NavLink>
              <NavLink className='nav-link' to='/menu'>Menu</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default CustomNavbar
