import { FaBars } from 'react-icons/fa';

function Nav() {
    return (
      <div className="nav">
        <div className="burger-menu">
            <FaBars />
        </div>
        <div className="logo"></div>
        <div className='contact'></div>
      </div>
    );
  }
  
  export default Nav;