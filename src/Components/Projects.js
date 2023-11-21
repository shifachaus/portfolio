import React from "react";
import shopease from "../Images/SHOPEASE.png";
import youtube from "../Images/YOUTUBE.png";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="main-container">
          <p className="sub-heading-section">Portfolio</p>
          <h2 className="heading-secondary">Selected Projects</h2>
          <div className="project-container">
            <div className="project--1">
              <div className="card p-work-card">
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
                <div class="p-work-card ">
                  <p className="project-name">ShopEase</p>
                  <div>
                    <p class="project-description dark-desc">
                      ShopEase is your online furniture store. Browse, buy, and
                      leave reviews easily.
                    </p>
                  </div>
                  <div class="button-bar">
                    <a
                      href="https://theshopease.netlify.app/"
                      class="project-button dark-btn"
                      rel="noreferrer"
                      target="_blank"
                    >
                      See Live
                    </a>
                  </div>
                </div>
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
                <div class="p-work-card ">
                  <p className="project-name">Youtube Clone</p>
                  <div>
                    <p class="project-description dark-desc">
                      The yt-doppelganger (YouTube Clone) is a web app where you
                      can explore, watch videos...
                    </p>
                  </div>
                  <div class="button-bar">
                    <a
                      href="https://yt-doppelgange.netlify.app/"
                      class="project-button dark-btn"
                      rel="noreferrer"
                      target="_blank"
                    >
                      See Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
