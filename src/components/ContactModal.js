import CloseButton from "react-bootstrap/CloseButton";

function ContactModal(props) {

    if (!props.modal) {
        return null;
    }

  return (
    <div className="modal" onClick={() => props.setModal(false)}>
      <div className="modal-canvas">
        <div className="modal-header">
          <h3>Contact</h3>
        </div>
        <div className="modal-body">
          <CloseButton onClick={() => props.setModal(false)} />
          <div className="contact-form">
            <form
              action="https://formsubmit.co/damon.pickett@gmail.com"
              method="POST"
            >
              <input type="text" name="name" placeholder="Your name" />
              <input type="text" name="company" placeholder="Your company" />
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                required
              />
              <input type="text" name="telephone" placeholder="Your phone #" />
              <input type="hidden" name="_next" value={window.location.href} />
              <input
                type="hidden"
                name="_subject"
                value="New enquiry from portfolio site"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="How can I help you?"
              ></textarea>
              <button className="form-button" type="submit">
                Send
              </button>
              <p>
                Please feel free to connect with me on{" "}
                <a
                  href="https://www.linkedin.com/in/damon-pickett/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Linkedin
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
