import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function Menu() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">Wintaek</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/detail">Detail</Nav.Link>
          <Nav.Link href="/About">About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
