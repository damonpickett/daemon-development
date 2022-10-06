import { Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import profilePic from '../images/profile-pic.jpeg';

function About() {
    return (
      <div className='about component'>
        <Container>
            <div className="about-content">
                <h2 className='section-header'>About</h2>
                <Image src={profilePic} fluid roundedCircle />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur aliquam neque. Integer lacinia orci quis libero posuere, in maximus ligula condimentum. Vivamus tincidunt neque sed aliquam venenatis. Donec suscipit, augue sed accumsan pharetra, augue odio vestibulum ipsum, ac pellentesque diam nulla quis ipsum. Nulla non diam tristique, dignissim urna vitae, efficitur nibh. Nulla id ultrices nisl, sit amet sodales eros. Quisque ac egestas lacus, sed volutpat mauris. Sed quis ex vitae turpis dignissim pharetra id a ipsum. Praesent gravida ante sit amet orci eleifend, eget imperdiet neque rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum tristique, dolor id tristique tincidunt, sem metus mollis eros, a suscipit ipsum libero et nisl. Proin maximus justo massa, ut suscipit elit hendrerit et. Aenean dictum feugiat erat vitae efficitur. Aliquam pharetra justo risus, vitae efficitur ipsum ultricies et. Donec vitae varius felis, vel tempus magna. Curabitur.</p>
            </div>
        </Container>
      </div>
    );
  }
  
  export default About;