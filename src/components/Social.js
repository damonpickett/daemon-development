import { Container } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";

function Social() {
  return (
    <div className="social component">
      <Container>
        <div className="social-content">
          <Stack direction="horizontal" className='social-stack'>
            <a href='https://www.linkedin.com/in/damon-pickett/' target='_blank' rel='noreferrer'><i class="devicon-linkedin-plain"></i></a>

            <a href='https://github.com/damonpickett' target='_blank' rel='noreferrer'><i class="devicon-github-original"></i></a>

            <a href='https://twitter.com/Damon_Pickett' target='_blank' rel='noreferrer'><i class="devicon-twitter-original"></i></a>
          </Stack>
        </div>
      </Container>
    </div>
  );
}

export default Social;
