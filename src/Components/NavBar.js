import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
        <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand exact to="/Home">PETSHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link exact to="/Home">Inicio</Nav.Link>
            <Nav.Link exact to="/Breeds">Razas</Nav.Link>
            <Nav.Link exact to="/Contact">Contacto</Nav.Link>
            <CartWidget/>
          </Nav>
        </Container>
      </Navbar>
    </div>
   
  )
}

export default NavBar
