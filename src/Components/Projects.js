import React from "react";
import about from "../Images/about.jpg";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects">
      <main className="container">
        <p className="sub-heading-section">Portfolio</p>
        <h2 className="heading-secondary">Selected Projects</h2>
        <div className="project-container">
          <div className="project--1">
            <div className="content-overlay"></div>
            <h3 className="heading-tertiary">Project 1</h3>
          </div>
          <div className="project--2">
            <div className="content-overlay"></div>
            <h3 className="heading-tertiary">Project 2</h3>
          </div>
          <div className="project--3">
            <div className="content-overlay"></div>
            <h3 className="heading-tertiary">Project 3</h3>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Projects;
