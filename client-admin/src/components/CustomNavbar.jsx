import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { successAlert } from '../helpers/sweetalert';

const CustomNavbar = () => {
  const navigate = useNavigate();
  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate('/login');
    successAlert('Logged out');
  }

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <NavLink className='navbar-brand' to='/'>Pizza Donald</NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink className='nav-link' to='/'>Home</NavLink>
              <NavLink className='nav-link' to='/categories'>Category</NavLink>
              <NavLink className='nav-link' to='/register'>Register Admin</NavLink>
              <NavLink className='nav-link' onClick={logoutHandler}>Logout</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default CustomNavbar
