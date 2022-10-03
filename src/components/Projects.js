import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import seaweasel from '../images/seaweasel.png';

function Projects() {
    return (
      <div className='projects component'>
        <Container>
            <h2>Projects</h2>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Sea Weasel</Card.Title>
                            <Card.Img src={seaweasel}/>
                            <Card.Text>Sea Weasel is a punk rock, nautical clothing line. This landing page collects user emails who want to be notified of product releases.</Card.Text>
                            <Button variant='dark'>Site</Button>
                            <Button variant='dark'>Code</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
      </div>
    );
  }
  
  export default Projects;