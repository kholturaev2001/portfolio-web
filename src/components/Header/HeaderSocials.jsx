import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/muhammadrasul-kholturaev-327b2a1a6/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/kholturaev2001" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/kholturaev2001/" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
