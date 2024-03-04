import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="container">
        <div className="footer-container">
          <div className="footer-content">
            <p className="contact-title">Let's connect!</p>
            <a className="mail-link" href="mailto:chausshifa804@gmail.com">
              contact@shifachaus.com
            </a>
          </div>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/shifachaus/"
              rel="noreferrer"
              target="_blank"
              className="links"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/shifachaus"
              rel="noreferrer"
              target="_blank"
              className="links"
            >
              GitHub
            </a>

            <a href="/" rel="noreferrer" target="_blank" className="links">
              Resume
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
