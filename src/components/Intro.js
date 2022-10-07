import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function Intro() {
    return (
      <div className='intro component'>
        <div id='home'></div>
        <Container>
            <div className="intro-content">
                <h1 className="glow">Daemon Development</h1>
                <h2>Servicing the entrepreneurial spirit</h2>
                <p>Affordable web design, web development, copywriting, and SEO.</p>
            </div>
        </Container>
        <div id="projects"></div>
      </div>
    );
  }
  
  export default Intro;
  