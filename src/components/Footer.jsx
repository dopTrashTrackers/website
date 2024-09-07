import React from 'react';
import "../styles/footer.css"

const Footer = () => {
  return (
    <div className="footer-container">
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
            <div className="footer-column">
              <div className="footer-about">
                <h3>About Us</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>

            <div className="footer-column">
              <div className="footer-links">
                <h3>Useful Links</h3>
                <a href="/">Home</a>
                <a href="/aboutus">About</a>
                <a href="/services">Products & Services</a>
                <a href="#">Client Testimonials</a>
                <a href="/contact">Contact Us</a>
              </div>
            </div>
            <div className="footer-column">
              <div className="footer-links">
                <h3>Service Area</h3>
                <a href="#">Rice Milling Technology Solutions</a>
                <a href="#">Industrial Power Solutions</a>
                <a href="#">Static Voltage Stabilizers</a>
              </div>
            </div>
            <div className="footer-column">
              <div className="footer-contact">
                <h3>Get In Touch</h3>
                <p>
                  <i className="fa fa-map-marker" aria-hidden="true"></i> Bhagalpur, Bihar 813210
                </p>
                <p>
                  <i className="fa fa-phone" aria-hidden="true"></i> +91 6642XXXXXX
                </p>
                <p>
                  <i className="fa fa-envelope"></i> abcd@example.com
                </p>
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
            <a href="#">Help</a>
            <a href="#">FAQs</a>
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