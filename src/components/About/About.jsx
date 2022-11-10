import React from "react";
import "./about.css";
import ME from "../../assets/photo_2022-11-10_01-16-51.jpg";
import { FaAward } from "react-icons/fa";
import { FaChild } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { useSelector } from "react-redux";

const About = () => {
  const { allData } = useSelector((state) => state.changeLang);
  const data = Object.values(allData)[0];
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>6+ Months Working</small>
            </article>
            <article className="about_card">
              <FaChartLine className="about_icon" />
              <h5>Achievements</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>3+ Years Working</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            doloribus in quibusdam facere? Consequuntur, officia molestiae,
            adipisci veritatis in tenetur voluptate fugit nemo dolor debitis
            laborum provident saepe et modi?
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
