import {
  MailOutlined,
  PhoneOutlined,
  HomeOutlined,
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import "./index.scss";

const Contact = () => {
  return (
    <div className="contact-page">
      <h2>Contact Information</h2>
      <p className="description">
        We are here to assist you. Feel free to reach out to us through any of
        the following channels. Our support team is available 24/7 to help you
        with any inquiries or feedback.
      </p>

      <div className="contact-info">
        <div className="contact-item">
          <MailOutlined />
          <span>Email: contact@example.com</span>
        </div>
        <div className="contact-item">
          <PhoneOutlined />
          <span>Phone: +123 456 789</span>
        </div>
        <div className="contact-item">
          <HomeOutlined />
          <span>Address: 123 Example Street, City, Country</span>
        </div>
      </div>

      <div className="social-media">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookOutlined />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterOutlined />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinOutlined />
          </a>
        </div>
      </div>

      <div className="business-hours">
        <h3>Business Hours</h3>
        <ul>
          <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
          <li>Saturday: 10:00 AM - 4:00 PM</li>
          <li>Sunday: Closed</li>
        </ul>
      </div>

      <div className="map">
        <h3>Our Location</h3>
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5514745870336!2d106.69833721431744!3d10.762622792333312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175292921018fa1%3A0x2223d07e7797b2cf!2sHo%20Chi%20Minh%20City%20Hall!5e0!3m2!1sen!2s!4v1633332339338!5m2!1sen!2s"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
