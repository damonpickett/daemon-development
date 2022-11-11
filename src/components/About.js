import { Container, Button } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import profilePic from '../images/profile-pic.jpeg';

function About(props) {
    return (
      <div className='about component'>
        <Container>
            <div className="about-content">
                <h2 className='section-header'>About</h2>
                <Image src={profilePic} fluid roundedCircle />
                <p>Hi, my name is Damon Pickett and I help individuals and small businesses establish themselves online. 
                  My father runs an excavating business. He is kind, caring, hard-working, and he takes care of everyone around him. 
                  Through his example I’ve come to believe that the entrepreneurial spirit is a light that guides humanity and I’ve made it my mission to help carry this light to the best of my ability. 
                  In December of 2021 I graduated from General Assembly’s Software Engineering Immersive and am now applying my skills to my mission. 
                  As well as being a developer, I pride myself on my communication skills. 
                  You know when you call a call center and an automated message will say “This call may be monitored for quality and training purposes.”? Well I used to be the guy monitoring those calls. I’ve spent countless hours studying the way people interact and I’ve learned that the ability to listen is the most important ingredient in effective communication. You can expect me to take the time necessary to understand your situation and to complete a project specific to your needs. So if you have a passion, a business, or a mission that you want to share with the world, please don’t hesitate to contact me for a free consultation. </p>
                <Button variant='dark' type='button' onClick={() => props.setModal(true)}>Contact</Button>
            </div>
        </Container>
      </div>
    );
  }
  
  export default About;