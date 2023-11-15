import React from "react";
import Projects from "../Components/Projects";
import foodvilla from "../Images/foodvilla2.png";

const Work = () => {
  return (
    <section id="work" className="">
      {/* <Projects /> */}

      <div className=" container main-container">
        <p className="sub-heading-section">Work.</p>
        <h2 className="heading-secondary">My Projects</h2>
        <div className="work-container">
          <div className="work">
            <a
              href="https://the-food-villa.netlify.app/"
              className="work--1"
            ></a>
            <h3 className="project__name">Food Villa</h3>
            <p className="info">
              Reference site about Lorem Ipsum, giving information on its
              origins, as well as a random Lipsum generator.
            </p>
          </div>
          <div className="work">
            <a href="https://theshopease.netlify.app/" className="work--2"></a>
            <h3 className="project__name">ShopEase</h3>
            <p className="info">
              Reference site about Lorem Ipsum, giving information on its
              origins, as well as a random Lipsum generator.
            </p>
          </div>
          <div className="work">
            <a
              href="https://yt-doppelgange.netlify.app/"
              className="work--3"
            ></a>
            <h3 className="project__name">Youtube Clone</h3>
            <p className="info">
              Reference site about Lorem Ipsum, giving information on its
              origins, as well as a random Lipsum generator.
            </p>
          </div>

          <div className="work">
            <a
              href="https://image-gallery-gaze.vercel.app"
              className="work--4"
            ></a>
            <h3 className="project__name">Image Gallery</h3>
            <p className="info">
              Reference site about Lorem Ipsum, giving information on its
              origins, as well as a random Lipsum generator.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
