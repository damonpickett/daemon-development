import { Container, Button } from "react-bootstrap";

function CTA() {
    return (
      <div className='CTA component'>
        <Container>
            <div className="CTA-content">
                <h3>Contact Daemon Development for a free consultation</h3>
                <Button variant='dark'>Contact</Button>
            </div>
        </Container>
      </div>
    );
  }
  
  export default CTA;