import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <main className="container">
        <p>Copyright © {year}. Built by Shifa🍀</p>
      </main>
    </footer>
  );
};

export default Footer;
