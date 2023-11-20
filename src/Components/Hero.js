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
      <main className="container">
        <div className="hero-container main-container">
          <h1 className="heading-primary">
            Crafting Web Experiences with Love and Emotion
          </h1>
          <div className="info-container"></div>

          {/* <div className="tech-stack-container ">
            <h3 className="heading">Tech stack</h3>

            <div className="tech-stack">
              <IoLogoHtml5 className="stack-icon-1 stack" />
              <IoLogoCss3 className="stack-icon-2 stack" />
              <IoLogoJavascript className="stack-icon-3 stack" />
              <IoLogoReact className="stack-icon-4 stack" />
            </div>
          </div> */}
        </div>
      </main>
    </section>
  );
};

export default Hero;
