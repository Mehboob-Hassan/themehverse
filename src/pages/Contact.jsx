import React from "react";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-heading">Get in Touch with Us</h1>
      <p className="contact-description">
        We're here to help! Feel free to contact us for inquiries or assistance.
      </p>

      <div className="contact-container">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Your Message" rows="4" required></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>

        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> info@mhtechspark.com</p>
          <p><strong>Phone:</strong> +1 234 567 890</p>
          <p><strong>Address:</strong> 123 Tech Spark Lane, Innovation City</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434508616!2d-122.41941548545389!3d37.77492977975885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064ec8e501f%3A0xe1e12c5ed3bb7e3c!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1618396410112!5m2!1sen!2sus"
              title="Google Map"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
import React from "react";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-heading">Get in Touch with Us</h1>
      <p className="contact-description">
        We're here to help! Feel free to contact us for inquiries or assistance.
      </p>

      <div className="contact-container">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Your Message" rows="4" required></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>

        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> info@mhtechspark.com</p>
          <p><strong>Phone:</strong> +1 234 567 890</p>
          <p><strong>Address:</strong> 123 Tech Spark Lane, Innovation City</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434508616!2d-122.41941548545389!3d37.77492977975885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064ec8e501f%3A0xe1e12c5ed3bb7e3c!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1618396410112!5m2!1sen!2sus"
              title="Google Map"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
