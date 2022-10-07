import { HashLink as Link } from 'react-router-hash-link';
import CloseButton from 'react-bootstrap/CloseButton';

function BurgerMenu(props) {

    let visibility = 'hide'

    if(props.menu) {
        visibility = 'show'
    }

    return (
      <div id='burger-menu' className={visibility}>
        <div className='close-button'>
            <CloseButton onClick={() => props.setMenu(false)} />
        </div>
        <ul className="burger-menu-list">
            <li><Link smooth to='#home'>Home</Link></li>
            <li><Link smooth to='#projects'>Projects</Link></li>
            <li><Link smooth to='#contact'>Contact</Link></li>
            <li><Link smooth to='#about'>About</Link></li>
        </ul>
        
      </div>
    );
  }
  
  export default BurgerMenu;