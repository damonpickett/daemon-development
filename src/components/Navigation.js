import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";

function Navigation() {
  return (
    <div>
      <Navbar className='nav' fixed='top'>
        <Container>
          <GiHamburgerMenu className='nav-burger'/>
          <Button variant='dark'>Contact</Button>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
