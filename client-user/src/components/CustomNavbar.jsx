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
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto w-100 shadow">
              <NavLink className='rounded-start px-4 d-flex align-items-center justify-content-center' to='/'
              style={{ backgroundColor: '#BD0018', height: '55px' }}>
                <img src="https://www.mcdelivery.co.id/id/static/1677662128341/assets/62/img/mcdelivery_logo_in.png" alt="Logo" />
              </NavLink>
              <NavLink className='nav-link bg-dark bg-gradient text-light px-5 d-flex align-items-center justify-content-center' to='/menu'
              style={{ height: '55px', fontSize: '22px' }}>
                <span className='material-symbols-outlined me-2'>lunch_dining</span>
                Menu
              </NavLink>
              <NavLink className='nav-link bg-dark bg-gradient text-light py-3 px-5 d-flex align-items-center justify-content-center'
              style={{ height: '55px', fontSize: '22px' }}>
                <span className='material-symbols-outlined me-2'>sell</span>
                Penawaran Menarik
              </NavLink>
              <NavLink className='nav-link bg-dark bg-gradient text-light py-3 px-5 d-flex align-items-center justify-content-center'
              style={{ height: '55px', fontSize: '22px' }}>
                <span className='material-symbols-outlined me-2'>person</span>
                Akun Saya
              </NavLink>
              <NavLink className='nav-link bg-dark bg-gradient text-light py-3 px-5 d-flex align-items-center justify-content-center rounded-end flex-grow-1'
                style={{ height: '55px', fontSize: '22px' }}>
                <span className='material-symbols-outlined me-2'>call</span>
                Bantuan
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default CustomNavbar
