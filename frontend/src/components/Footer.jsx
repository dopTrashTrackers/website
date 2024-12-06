import React from 'react';
import "../styles/footer.css"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div id="footer" className="footer-container">
      <div className="footer">
        <div className="footer-content">
          {/* <div className="newsletter">
            <h2>Subscribe to Our Newsletter</h2>
            <div className="newsletter-form">
              <input className="newsletter-input" placeholder="Email here" />
              <button className="newsletter-btn">Submit</button>
            </div>
          </div> */}
          <div className="footer-row">
            <div className="footer-column footer-about">
              <div className="footer-about">
                <h3>About Us</h3>
                <p>
                We are a dedicated team of tech enthusiasts and cleanliness advocates committed to revolutionizing the way post offices maintain and monitor their cleanliness standards. Our mission is to create a real-time dashboard that empowers post offices to ensure pristine environments, enhancing both customer experience and operational efficiency.
                </p>
              </div>
            </div>

            <div className="footer-column">
              <div className="footer-links">
                <h3>Useful Links</h3>
                <Link to="/home">Home</Link>
                <a href="#footer">About</a>
                <a href="#">Products & Services</a>
                <a href="#">Client Testimonials</a>
                <a href="#footer">Contact Us</a>
              </div>
            </div>
            <div className="footer-column">
              <div className="footer-links">
                <h3>Service Area</h3>
                <Link to="/home">Clean Vision Solutions</Link>
                <a href="https://www.indiapost.gov.in/" target='blank'>Department of Post</a>
                <a href="https://dot.gov.in/" target='blank'>Department of Telecommunications</a>
                <a href="https://iiitbh.ac.in/" target='blank'>IIIT Bhagalpur</a>
              </div>
            </div>
            <div className="footer-column">
              <div className="footer-contact">
                <h3>Get In Touch</h3>
                <p>
                  Indian Institute of Information Technology Bhagalpur,
                  <br />                 
                  Bhagalpur, Bihar - 813210
                </p>
                <a href='tel:1234567890'>
                  +91 1234XXXXXX
                </a>
                <a href='mailto:sihbgp2024@gmail.com'>
                  sihbgp2024@gmail.com
                </a>
                <div className="footer-social">
                  {/* <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-menu">
          <div className="f-menu">
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies</a>
            <a href="#footer">Help</a>
            <a href="#faq">FAQs</a>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="footer-row">
            <div className="footer-column">
              <p>
                &copy; <a href="#">Clean Vision</a>, All Rights
                Reserved.
              </p>
            </div>
            <div className="footer-column">
              <p>
                Developed & Maintained By
                <a href="#">Clean Vision Solutions</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;