import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";

function Navigation(props) {
  return (
    <div>
      <Navbar className='nav' fixed='top'>
        <Container>
          <GiHamburgerMenu className='nav-burger' onClick={() => props.setMenu(true)} />
          <Button variant='dark' type='button' as='button' onClick={console.log('click')}>Contact</Button>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
