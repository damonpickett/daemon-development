import { Container, Button } from "react-bootstrap";

function CTA() {
    return (
      <div className='CTA component'>
        <Container>
            <div className="CTA-content">
                <h3>Contact Solidus Development for a free consultation</h3>
                <Button variant='dark'>Contact</Button>
            </div>
        </Container>
        <div id='about'></div>
      </div>
    );
  }
  
  export default CTA;