import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <main className="container">
        <p>copyright &#169; {year}. All rights are reserved</p>
      </main>
    </footer>
  );
};

export default Footer;
