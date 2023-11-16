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
              FoodVilla is a food web app where you can explore delicious
              dishes, easily search for your favorites, and add them to your
              cart.
            </p>
          </div>
          <div className="work">
            <a href="https://theshopease.netlify.app/" className="work--2"></a>
            <h3 className="project__name">ShopEase</h3>
            <p className="info">
              ShopEase is your online furniture store. Browse, buy, and leave
              reviews easily. Add items to your cart with just a click. Simplify
              your furniture shopping experience with ShopEase!
            </p>
          </div>
          <div className="work">
            <a
              href="https://yt-doppelgange.netlify.app/"
              className="work--3"
            ></a>
            <h3 className="project__name">Youtube Clone</h3>
            <p className="info">
              The yt-doppelganger (YouTube Clone) is a web app where you can
              explore, watch videos, add comments, and participate in live
              chats.
            </p>
          </div>

          <div className="work">
            <a
              href="https://image-gallery-gaze.vercel.app"
              className="work--4"
            ></a>
            <h3 className="project__name">Image Gallery</h3>
            <p className="info">
              Gallery Gaze is a photo platform where you can explore and find
              high quality images.You can easily search for the pictures, and if
              you really like a photo, just give it a like.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
