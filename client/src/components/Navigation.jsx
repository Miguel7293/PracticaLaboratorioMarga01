import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Badge } from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Navigation() {
  const { cart } = useContext(CartContext);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">Mini Tienda</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Catálogo</Nav.Link>
            <Nav.Link as={Link} to="/cart">
              Carrito <Badge bg="light" text="dark" pill>{cart.length}</Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}