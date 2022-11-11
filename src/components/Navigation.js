import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { HashLink as Link } from 'react-router-hash-link';

function Navigation(props) {
  return (
    <div>
      <Navbar className='nav' fixed='top'>
        <Container>

        <ul className="nav-menu-list">
            <li><Link smooth to='#home'>Home</Link></li>
            <li><Link smooth to='#projects'>Projects</Link></li>
            <li><Link smooth to='#contact'>Contact</Link></li>
            <li><Link smooth to='#about'>About</Link></li>
        </ul>

          {/* FOR MOBILE */}
          <GiHamburgerMenu className='nav-burger' onClick={() => props.setMenu(true)} />
          {/* --- */}

          <Button variant='dark' type='button' onClick={() => props.setModal(true)}>Contact</Button>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
