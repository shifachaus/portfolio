import React, { useState } from "react";
import "./Header.css";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { Link } from "react-scroll";
const Header = () => {
  const [status, setStatus] = useState(false);

  return (
    <header id="header">
      <main className="container">
        <div className="nav-container">
          <h2 className="logo">SC</h2>
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {!status && (
            <IoMenuOutline
              style={{ fontSize: "1.8rem" }}
              className="menu-open"
              onClick={() => setStatus(true)}
            />
          )}
        </div>

        {/* {status && ( */}
        <div className={status ? "nav-menu active" : "nav-menu"}>
          {" "}
          {status && (
            <IoCloseOutline
              style={{ fontSize: "1.8rem" }}
              className="menu-close"
              onClick={() => setStatus(false)}
            />
          )}
          <div
            className={status ? "active nav-mobile-close" : "nav-mobile-close"}
          >
            <ul className="nav-list-mobile">
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                  onClick={() => setStatus(false)}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                  onClick={() => setStatus(false)}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={() => setStatus(false)}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                  onClick={() => setStatus(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* )} */}
      </main>
    </header>
  );
};

export default Header;
