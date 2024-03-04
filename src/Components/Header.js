import React, { useState } from "react";
import "./Header.css";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";
import useScroll from "../Hooks/useScroll";
const Header = () => {
  const [status, setStatus] = useState(false);
  const scrolling = useScroll();

  return (
    <header id="header">
      <section>
        <div className={scrolling ? "nav__container--pd" : "nav__container "}>
          <div className="container nav__container--flex">
            <Link to="/" className="logo__link">
              <h2 className="logo">
                Shifa<span className="dot">.</span>
              </h2>
            </Link>

            <nav className="nav">
              <ul className="nav__list">
                <li className="nav__item">
                  <Link className="nav__item-desk" to="about">
                    About
                  </Link>
                </li>
                <li className="nav__item">
                  <Link className="nav__item-desk" to="work">
                    Work
                  </Link>
                </li>
              </ul>
            </nav>

            {!status && (
              <IoMenuOutline
                style={{ fontSize: "2.5rem" }}
                className="menu__open"
                onClick={() => setStatus(true)}
              />
            )}
          </div>
        </div>

        <div className={status ? "nav__menu active" : "nav__menu"}>
          {status && (
            <IoCloseOutline
              IoMenuOutline
              style={{ fontSize: "2.5rem" }}
              className={scrolling ? "menu__close--scroll" : "menu__close"}
              onClick={() => setStatus(false)}
            />
          )}
          <div
            className={
              status ? "active nav__mobile-close" : "nav__mobile-close"
            }
          >
            <ul className="nav__list-mobile">
              <li className="nav__item">
                <Link
                  to="/about"
                  className="nav__item-mobile"
                  onClick={() => setStatus(false)}
                >
                  About
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to="/work"
                  className="nav__item-mobile"
                  onClick={() => setStatus(false)}
                >
                  Work
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
