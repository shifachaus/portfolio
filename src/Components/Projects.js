import React from "react";
import about from "../Images/about.jpg";
import shopease from "../Images/SHOPEASE.png";
import youtube from "../Images/YOUTUBE.png";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects">
      <main className="container">
        <div className="main-container">
          <p className="sub-heading-section">Portfolio</p>
          <h2 className="heading-secondary">Selected Projects</h2>
          <div className="project-container">
            <div className="project--1">
              <div className="card">
                <div class="tilting-card-wrapper">
                  <div class="mouse-position-tracker"></div>
                  <div class="mouse-position-tracker"></div>
                  <div class="mouse-position-tracker"></div>
                  <div class="mouse-position-tracker"></div>
                  <div class="mouse-position-tracker"></div>
                  <div class="mouse-position-tracker"></div>
                  <div class="mouse-position-tracker"></div>
                  <div class="mouse-position-tracker"></div>
                  <div class="mouse-position-tracker"></div>
                  <div class="tilting-card-body">
                    <img src={shopease} className="image" alt="shopease" />
                  </div>
                </div>
              </div>
              <div className="project__info">
                <p className="name">ShopEase</p>
                <a href="https://theshopease.netlify.app/" className="live">
                  Live
                </a>
              </div>
            </div>
            <div className="project--2">
              <div className="card">
                <div class="tilting-card-wrapper">
                  <div class="mouse-position-tracker"></div>
                  <div class="mouse-position-tracker"></div>
                  <div class="mouse-position-tracker"></div>
                  <div class="mouse-position-tracker"></div>
                  <div class="mouse-position-tracker"></div>
                  <div class="mouse-position-tracker"></div>
                  <div class="mouse-position-tracker"></div>
                  <div class="mouse-position-tracker"></div>
                  <div class="mouse-position-tracker"></div>
                  <div class="tilting-card-body">
                    <img src={youtube} className="image" alt="youtube" />
                  </div>
                </div>
              </div>
              <div className=" project__info-2">
                <p className="name">youtube</p>
                <a href="https://yt-doppelgange.netlify.app/" className="live">
                  Live
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Projects;
