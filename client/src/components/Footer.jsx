import React from "react";
import Logo from "../assets/blog-logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="logo" />
      <span>
        &copy; {new Date().getFullYear()} BlogSpace. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
