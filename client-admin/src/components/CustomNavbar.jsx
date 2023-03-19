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
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto w-100 shadow">
              <NavLink className='rounded-start px-4 d-flex align-items-center justify-content-center'
              to='/'
              style={{ backgroundColor: '#BD0018', height: '55px' }}>
                <img src="https://www.mcdelivery.co.id/id/static/1677662128341/assets/62/img/mcdelivery_logo_in.png" alt="Logo" />
              </NavLink>
              <NavLink className={({ isActive, isPending }) =>
                isActive ? 'nav-link bg-dark bg-gradient text-warning px-5 d-flex align-items-center justify-content-center' : 'nav-link bg-dark bg-gradient text-light px-5 d-flex align-items-center justify-content-center'
              }
              to='/'
              style={{ height: '55px', fontSize: '20px' }}>
                <span className='material-symbols-outlined me-2'>house</span>
                Home
              </NavLink>
              <NavLink className={({ isActive, isPending }) =>
                isActive ? 'nav-link bg-dark bg-gradient text-warning py-3 px-5 d-flex align-items-center justify-content-center' : 'nav-link bg-dark bg-gradient text-light py-3 px-5 d-flex align-items-center justify-content-center'
              }
              to='/categories'
              style={{ height: '55px', fontSize: '20px' }}>
                <span className='material-symbols-outlined me-2'>category</span>
                Category
              </NavLink>
              <NavLink className={({ isActive, isPending }) =>
                isActive ? 'nav-link bg-dark bg-gradient text-warning py-3 px-5 d-flex align-items-center justify-content-center' : 'nav-link bg-dark bg-gradient text-light py-3 px-5 d-flex align-items-center justify-content-center'
              }
              to='/register'
              style={{ height: '55px', fontSize: '20px' }}>
                <span className='material-symbols-outlined me-2'>person</span>
                Register Admin
              </NavLink>
              <NavLink className='nav-link bg-dark bg-gradient text-light py-3 px-5 d-flex align-items-center justify-content-center rounded-end flex-grow-1'
              onClick={logoutHandler}
              style={{ height: '55px', fontSize: '20px' }}>
                <span className='material-symbols-outlined me-2'>logout</span>
                Logout
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default CustomNavbar
