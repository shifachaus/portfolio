import React, { useState } from "react";
import "./Header.css";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";
const Header = () => {
  const [status, setStatus] = useState(false);

  return (
    <header id="header">
      <main className="container">
        <div className="nav__container">
          <Link to="/" className="logo__link">
            <h2 className="logo">Shifa</h2>
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

        <div className={status ? "nav__menu active" : "nav__menu"}>
          {status && (
            <IoCloseOutline
              style={{ fontSize: "1.8rem" }}
              className="menu__close"
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
      </main>
    </header>
  );
};

export default Header;
