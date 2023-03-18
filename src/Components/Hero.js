import React from "react";
import heroImg from "../Images/hero-img.png";
import "../Components/Hero.css";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
} from "react-icons/io5";

const Hero = () => {
  return (
    <section id="hero">
      <main className="container">
        <div className="hero-container">
          <div className="info-container">
            <p className="sub-heading">Hello, I'm Shifa</p>
            <h1 className="heading-primary">
              {" "}
              I'm Front-End React Developer Passionate about building Web Apps.
            </h1>
          </div>
          <div className="hero-img-container">
            <img src={heroImg} className="img" />
          </div>
        </div>

        <div className="tech-stack-container">
          <h3 className="heading">Tech stack</h3>
          <div className="vertical-line"></div>
          <div className="tech-stack">
            <IoLogoHtml5 className="stack-icon-1 stack" />
            <IoLogoCss3 className="stack-icon-2 stack" />
            <IoLogoJavascript className="stack-icon-3 stack" />
            <IoLogoReact className="stack-icon-4 stack" />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Hero;
