import React from "react";
import about from "../Images/about.jpg";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <main className="container">
        <div className="main-container">
          <p className="sub-heading-section">Hello👋, I'm Shifa</p>
          <h2 className="heading-secondary">A dedicated Front-end developer</h2>
          <div className="about-container">
            <div className="about-img-container">
              <img src={about} className=" about-img" />
            </div>

            <div className="about-info-container">
              <p className="text">
                As a front-end developer, I offer not just technical expertise
                but a genuine love and passion for crafting outstanding web
                experiences. I've honed my skills to produce visually stunning
                and highly functional websites that leave a lasting impression.
              </p>
            </div>
          </div>
          <p className="text">
            I stay in step with the latest design trends and user-centered best
            practices, consistently evolving to keep my work innovative and
            engaging. My specialty lies in designing and maintaining responsive
            websites that provide users with a seamless and enjoyable
            experience.
          </p>
        </div>
      </main>
    </section>
  );
};

export default About;
