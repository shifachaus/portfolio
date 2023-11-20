import React from "react";
import about from "../Images/about.jpg";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <div className="container about">
        <div className="main-container">
          <div className="about-container">
            <div className="about-img-container">
              <img src={about} className=" about-img" />
            </div>

            <div className="about-info-container">
              <p className="sub-heading-section">Hello👋, I'm Shifa</p>
              <p className="text">
                I'm a Frontend Developer with one year of hands-on experience
                based in India. My passion lies in creating websites and web
                applications that address and solve user problems.
              </p>
              <p className="text">
                As a front-end developer, I offer not just technical expertise
                but a genuine love and passion for crafting outstanding web
                experiences. I've honed my skills to produce visually stunning
                and highly functional websites that leave a lasting impression.
              </p>

              <p className="text">
                I stay updated on the latest design trends and user-centered
                best practices, consistently evolving to keep my work innovative
                and engaging. Specializing in designing and maintaining
                responsive websites, I aim to provide users with a seamless and
                enjoyable experience.
              </p>
            </div>
          </div>
          <div class="experience-content">
            <div>
              <h2 class="heading-secondary">Experience</h2>
            </div>
            <div class="experience-display">
              <div>
                <div class="exp-item">
                  <p class="job-title">Frontend Software Engineer</p>
                  <div class="job-date">
                    <p class="employer">Incretech</p>
                    <p class="date">Dec 2022 - Apr 2023</p>
                  </div>
                </div>
              </div>
              <div>
                <div class="exp-item">
                  <p class="job-title">Frontend Intern</p>
                  <div class="job-date">
                    <p class="employer">Incretech</p>
                    <p class="date">May 2022 - Nov 2022</p>
                  </div>
                </div>
              </div>

              {/* <div>
                  <div class="exp-item green-item">
                    <div class="job-date">
                      <p class="employer">Open to new opportunities</p>
                      <p class="date">Always</p>
                    </div>
                    <a
                      href="https://davidhaz.com/David_Haz_Resume.pdf"
                      target="_blank"
                      rel="noreferrer"
                      class="resume-button"
                    >
                      View Resume
                    </a>
                  </div>
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
