import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsSkype } from "react-icons/bs";
import { useSelector } from "react-redux";

const Footer = () => {
  const { allData } = useSelector((state) => state.changeLang);
  const data = Object.values(allData)[0]?.footer;
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#">
            <code>{data?.home}</code>
          </a>
        </li>
        <li>
          <a href="#about">
            <code>{data?.about}</code>
          </a>
        </li>
        <li>
          <a href="#experience">
            <code>{data?.experience}</code>
          </a>
        </li>
        <li>
          <a href="#services">
            <code>{data?.services}</code>
          </a>
        </li>
        <li>
          <a href="#portfolio">
            <code>{data?.portfolio}</code>
          </a>
        </li>
        <li>
          <a href="#testimonials">
            <code>{data?.testimonials}</code>
          </a>
        </li>
        <li>
          <a href="#contact">
            <code>{data?.contact}</code>
          </a>
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
        <a href="https://join.skype.com/invite/HiFx1oLukppS" target="_blank">
          <BsSkype />
        </a>
      </div>

      <div className="footer_copyright">
        <small>
          &copy; <code>2022</code>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
