import CloseButton from "react-bootstrap/CloseButton";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";

const ContactModal = (props) => {

  return (
    <>
      <Modal show={props.modal} centered>
        <Modal.Header>
          <Modal.Title>Contact</Modal.Title>
          <CloseButton onClick={() => props.setModal(false)}/>
        </Modal.Header>
        <Modal.Body>
          <div className="contact-form">
              <form action="https://formsubmit.co/damon@solidusdevelopment.com" method="POST">
                  <input type="text" name="name" placeholder="Your name" />
                  <input type="text" name="company" placeholder="Your company" />
                  <input type="email" name="email" placeholder="Your email address" required />
                  <input type="text" name="telephone" placeholder="Your phone #" />
                  <input type="hidden" name="_next" value="https://damonpickett.github.io/damonpickett/thankyou.html" />
                  <input type="hidden" name="_subject" value="New enquiry from portfolio site" />
                  <textarea name="message" rows="5" placeholder="How can I help you?"></textarea>
                  <Button variant='dark' type='button'>Send</Button>
                  <p>Please feel free to connect with me on <a href='https://www.linkedin.com/in/damon-pickett/' target='_blank' rel='noreferrer'>Linkedin</a></p>
              </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
    
  );
}

export default ContactModal;
