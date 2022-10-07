import { Container } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";

function Social() {
  return (
    <div className="social component">
      <Container>
        <div className="social-content">
          <Stack direction="horizontal" className='social-stack'>
            <i class="devicon-linkedin-plain"></i>

            <i class="devicon-github-original"></i>

            <i class="devicon-twitter-original"></i>
          </Stack>
        </div>
      </Container>
    </div>
  );
}

export default Social;
