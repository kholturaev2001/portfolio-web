import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { BsSkype } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      {/* <a href="#" className="footer_logo">
        EGATOR
      </a> */}

      <ul className="permalinks">
        <li>
          <a href="#"><code>Home</code></a>
        </li>
        <li>
          <a href="#about"><code>About</code></a>
        </li>
        <li>
          <a href="#experience"><code>Experience</code></a>
        </li>
        <li>
          <a href="#services"><code>Services</code></a>
        </li>
        <li>
          <a href="#portfolio"><code>Portfolio</code></a>
        </li>
        <li>
          <a href="#testimonials"><code>Testimonials</code></a>
        </li>
        <li>
          <a href="#contact"><code>Contact</code></a>
        </li>
      </ul>

      <div className="footer_socials">
        <a
          href="https://www.facebook.com/muhammadrasul.holturaev"
          target="_blank"
        >
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/kholturaev2001/" target="_blank">
          <FiInstagram />
        </a>
        <a
          href="https://join.skype.com/invite/HiFx1oLukppS"
          target="_blank"
        >
          <BsSkype />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; <code>2022</code></small>
      </div>
    </footer>
  );
};

export default Footer;
