import "./contact.style.css";
import Button from "../../components/Button/Button";
import Bot from "../../components/icons/Bot";
import Location from "../../components/icons/Location";
import Phone from "../../components/icons/Phone";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact_container">
        <div className="contact_info">
          <h1>Get in touch</h1>

          <p>
            Use our contact form for all information requests or contact us
            directly using the contact information below.
          </p>
          <p>Fell free to get in touch with us via email or phone. </p>
          <hr />
          <div className="contact_info__inner">
            <div className="contact_location">
              <Location />
              <div className="contact_location__title">
                <h4>Our office Location</h4>
                <div className="contact_location__street">
                  <p>The interior Design Studio Company</p>
                  <p>The Courtyard, Al Quoz 1, Colorado, USA</p>
                </div>
              </div>
            </div>
            <div className="contact_phone">
              <Phone />
              <div className="contact_phone__title">
                <h4> Phone (Landline)</h4>
                <p className="contact_phone__number">123456789</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact_form">
          <h2>Get started with a free quotation</h2>
          <div className="contact_form__data">
            <div className="contact_form__field">
              <div className="contact_bot">
                <Bot />
              </div>
              <label htmlFor="text">Name</label>
              <input
                type="text"
                placeholder="Enter your Name"
                className="contact_form__input"
              />
            </div>
            <div className="contact_form__field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter a valid email address"
                className="contact_form__input"
              />
            </div>
            <div className="contact_form__field">
              <label htmlFor="text">Message</label>
              <textarea
                name="text"
                id=""
                placeholder="Enter your message"
                className="contact_form__area"
              />
            </div>
          </div>
          <label>
            <input type="checkbox" className="contact_form__checkbox" />I accept
            the <span className="contact_form__span">Terms of Service</span>
          </label>
          <Button text="Submit your request" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
