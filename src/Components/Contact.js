import React from "react";
import "./Contact.css";

import { RiRoadMapLine, RiMailLine } from "react-icons/ri";

const Contact = () => {
  return (
    <section id="contact">
      <main className="container">
        <div className="main-container">
          <p className="sub-heading-section">contact</p>
          <h2 className="heading-secondary">Get in touch</h2>
          <div className="contact-container ">
            <div className="info">
              <div className="flex">
                <h4>Location</h4>
                <RiRoadMapLine className="icon" />
              </div>
              <p className="text">Mumbai, India</p>
            </div>
            <div className="info">
              <div className="flex">
                <h4>Mail</h4>
                <RiMailLine className="icon" />
              </div>
              <p className="text">
                <a
                  target="_blank"
                  href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                  className="link"
                  rel="noreferrer"
                >
                  chausshifa804@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Contact;
