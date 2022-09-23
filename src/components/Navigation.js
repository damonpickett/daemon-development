import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  return (
    <div>
      <Navbar className='nav' fixed='top'>
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
          </Nav>
          <Navbar.Brand href="#home">Daemon Development</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
