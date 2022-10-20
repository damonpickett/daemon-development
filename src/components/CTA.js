import { Container, Button } from "react-bootstrap";

function CTA(props) {
    return (
      <div className='CTA component'>
        <Container>
            <div className="CTA-content">
                <h3>Contact Solidus Development for a free consultation</h3>
                <Button variant='dark' type='button' onClick={() => props.setModal(true)}>Contact</Button>
            </div>
        </Container>
        <div id='about'></div>
      </div>
    );
  }
  
  export default CTA;