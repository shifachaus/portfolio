import React from "react";
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
      <div className="container">
        <div className="hero-container main-container">
          <h1 className="heading-primary">
            Crafting Web Experiences with Love and Emotion
          </h1>
          <div className="info-container"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
