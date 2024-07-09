import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p>Be the first to know!</p>
        <div className="email-sub">
          <input type="text" name="" id="" placeholder="Email address" />
          <input type="button" value="Submit" />
        </div>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.example.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-users"></i>
          </a>
        </div>
      </div>

      <div>
        <div className="name">
          <ul className="footer-links">
            {[
              "Shop",
              "About Us",
              "Custom Order",
              "Return Policy",
              "Gallery",
              "Contact us",
              "Work With us",
              "Terms of service",
              "what we do",
              "FAQ",
              "Make enquires",
            ].map((item) => (
              <li>
                <div />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <p className="copyright">
        &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
      </p> */}
    </footer>
  );
};

export default Footer;
