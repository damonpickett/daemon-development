import CloseButton from "react-bootstrap/CloseButton";
import Modal from "react-bootstrap/Modal";

const ContactModal = (props) => {

  return (
    <>
      <Modal show={props.modal}>
        <Modal.Header closeButton>
          <Modal.Title>Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This is the modal
        </Modal.Body>
      </Modal>
    </>
    
  );
}

export default ContactModal;
