import React from "react";
import "./Contact.css";

import { RiRoadMapLine, RiMailLine } from "react-icons/ri";

const Contact = () => {
  return (
    <section id="contact">
      <main className="container">
        <div className="main-container">
          {/* <p className="sub-heading-section">contact</p> */}
          <div className="contact_container">
            <h2 className="heading-secondary">let's connect!</h2>

            <a
              target="_blank"
              href="https://mail.google.com/mail/u/0/#inbox?compose=new"
              className="link"
              rel="noreferrer"
            >
              chausshifa804@gmail.com
            </a>
          </div>
          <div className="contact-container "></div>
        </div>
      </main>
    </section>
  );
};

export default Contact;
