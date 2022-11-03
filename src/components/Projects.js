import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import Stack from 'react-bootstrap/Stack';
import seaweasel from '../images/seaweasel.png';
import torbomb from '../images/torbombdesign.png';
import whitsteen from '../images/whitsteen.png';

function Projects() {
    return (
      <div className='projects component'>
        <Container>
            <h2 className='section-header'>Projects</h2>
            <Row>
                <Col className='projects-col'>
                    <Card border='dark' style={{ width: '16rem'}}>
                        <Card.Body>
                            <Card.Title style={{ marginBottom: '20px'}}>Sea Weasel</Card.Title>
                            <Card.Img src={seaweasel} style={{ marginBottom: '20px'}}/>
                            <Card.Text>Sea Weasel is a punk rock, nautical clothing line. This landing page collects users' emails who want to be notified of product releases.</Card.Text>
                            <div className='card-buttons'>
                                <Button variant='dark'>Site</Button>
                                <Button variant='dark'>Code</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='projects-col'>
                    <Card border='dark' style={{ width: '16rem'}}>
                        <Card.Body>
                            <Card.Title style={{ marginBottom: '20px'}}>Torbomb Design</Card.Title>
                            <Card.Img src={torbomb} style={{ marginBottom: '20px'}}/>
                            <Card.Text>Torbomb Designs is expanding possibilities in the world of paintball by creating accessories via 3D printing technology.</Card.Text>
                            <div className='card-buttons'>
                                <Button variant='dark'>Site</Button>
                                <Button variant='dark'>Code</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='projects-col'>
                    <Card border='dark' style={{ width: '16rem'}}>
                        <Card.Body>
                            <Card.Title style={{ marginBottom: '20px', fontSize: '1.2em'}}>The Whitsteen Project</Card.Title>
                            <Card.Img src={whitsteen} style={{ marginBottom: '20px'}}/>
                            <Card.Text>The Whitsteen Project is a mock NFT project to showcase the artwork of Whitsteen. This app records transactions on the Ethereum testnet.</Card.Text>
                            <div className='card-buttons'>
                                <Button variant='dark'>Site</Button>
                                <Button variant='dark'>Code</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        <div id='contact'></div>
      </div>
    );
  }
  
  export default Projects;