import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h3>Our Menu</h3>
          <ul>
            <li>Burgers</li>
            <li>Chicken & Sandwiches</li>
            <li>Fries & Sides</li>
            <li>Drinks & Shakes</li>
            <li>Happy Meals & Toys</li>
            <li>McCafé & Bakery</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>McDelivery</h3>
          <ul>
            <li>Order Now</li>
            <li>McDelivery Deals</li>
            <li>Restaurants</li>
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Newsroom</li>
            <li>Investors</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Legal</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <ul className="social-icons">
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#"><i className="fab fa-youtube"></i></a></li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="legal-text">
        <p>&copy; McDonald's Corporation 2023. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
