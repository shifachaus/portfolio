import React from "react";
import about from "../Images/about.jpg";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <main className="container">
        <p className="sub-heading-section">About me</p>
        <div className="about-container">
          <div className="about-img-container">
            <img src={about} className=" about-img" />
          </div>

          <div className="about-info-container">
            <h2 className="heading-secondary">
              A dedicated Front-end developer
            </h2>
            <p className="text">
              As a front end developer I have experience in HTML, CSS,
              Javascript, and React. I excel in designing and maintaining
              responsive websites that offer a smooth user experience.
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default About;
