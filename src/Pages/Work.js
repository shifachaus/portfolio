import React from "react";
import "../Pages/Work.css";

const Work = () => {
  return (
    <section id="work">
      <div className=" container main-container">
        <p className="sub-heading-section">Work.</p>
        <h2 className="heading-secondary">My Projects</h2>
        <div className="box">
          <div className="work-container">
            <div className="work">
              <div className="work--2"></div>
              <div className="work_info">
                <h3 className="project-name">ShopEase</h3>
                <p className="info">
                  ShopEase is your online furniture store. Browse, buy, and
                  leave reviews easily. Add items to your cart with just a
                  click. Simplify your furniture shopping experience with
                  ShopEase!
                </p>
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

            <div className="work">
              <div className="work--4"></div>
              <div className="work_info">
                <h3 className="project-name">Image Gallery</h3>
                <p className="info">
                  Gallery Gaze is a photo platform where you can explore and
                  find high quality images.You can easily search for the
                  pictures, and if you really like a photo, just give it a like.
                </p>

                <div class="button-bar">
                  <a
                    href="https://image-gallery-gaze.vercel.app"
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
          <div className="work-container">
            <div className="work">
              <div className="work--3"></div>
              <div className="work_info">
                <h3 className="project-name">Youtube Clone</h3>
                <p className="info">
                  The yt-doppelganger (YouTube Clone) is a web app where you can
                  explore, watch videos, add comments, and participate in live
                  chats.
                </p>

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

            <div className="work">
              <div className="work--1"></div>
              <div className="work_info">
                <h3 className="project-name">Food Villa</h3>
                <p className="info">
                  FoodVilla is a food web app where you can explore delicious
                  dishes, easily search for your favorites, and add them to your
                  cart.
                </p>

                <div class="button-bar">
                  <a
                    href="https://the-food-villa.netlify.app/"
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
    </section>
  );
};

export default Work;
