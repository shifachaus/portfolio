import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <main className="container">
        <div className="footer-container">
          <div className="footer-content">
            <p className="contact-title">Let's connect!</p>
            <a className="mail-link" href="mailto:chausshifa804@gmail.com">
              chausshifa804@gmail.com
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
            {/* <a
              href="https://codepen.io/davidhaz"
              rel="noreferrer"
              target="_blank"
              className="links"
            >
              CodePen
            </a>
            <a
              href="https://davidhaz.com/David_Haz_Resume.pdf"
              rel="noreferrer"
              target="_blank"
              className="links"
            >
              Resume
            </a> */}
          </div>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
