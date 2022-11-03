import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import design from '../images/design.png';
import development from '../images/development.png';
import copy from '../images/copywriting.png';
import seo from '../images/seo.png';

function Value() {
    return (
      <div className='value component'>
        <Container>
            <h2 className="section-header">Why Solidus?</h2>
            <Row>
                <Col sm={12} md={6} lg={3}>
                    <div className='value-card'>
                        <h3 className="blue">Design</h3>
                        <Image src={design} fluid />
                        <p>Websites designed to accentuate your value proposition</p>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <div className='value-card'>
                        <h3 className="pink">Development</h3>
                        <Image src={development} fluid />
                        <p>Websites coded from scratch to exhibit your brand exactly</p>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <div className='value-card'>
                        <h3 className="gold">Copywriting</h3>
                        <Image src={copy} fluid />
                        <p>Copy that speaks to your users wants so they know they’re in good hands</p>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <div className='value-card'>
                        <h3 className="green">SEO</h3>
                        <Image src={seo} fluid />
                        <p>Websites optimized for search results so more people see your value</p>
                    </div>
                </Col>
            </Row>
            <div id="projects"></div>
        </Container>
      </div>
    );
  }
  
  export default Value;