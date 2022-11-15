import React from "react";
import "./about.css";
import ME from "../../assets/photo_2022-11-10_01-16-51.jpg";
import { FaAward } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { IoLanguageOutline } from "react-icons/io5";
import { MdCastForEducation } from "react-icons/md";
import { FiKey } from "react-icons/fi";
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
              <small>
                7+ Months Working at{" "}
                <a href="https://vatan-ict.tj" target="_blank">
                  Vatan ICT
                </a>
              </small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <ul className="langList">
                <li>
                  <a href="https://edonish.tj" target="_blank">
                    eDonish
                  </a>{" "}
                  - a project to degitalize school education of Dushanbe
                  (Tajikistan)
                </li>
              </ul>{" "}
            </article>
            <article className="about_card">
              <MdCastForEducation className="about_icon" />
              <h5>Education</h5>
              <ul className="langList">
                <li>
                  <a href="https://msu.tj" target="_blank">
                    Branch of Moscow State University in Dushanbe
                  </a>
                </li>
                <li>School №22</li>
                <li>School №5</li>
              </ul>
            </article>
            <article className="about_card">
              <FaChartLine className="about_icon" />
              <h5>Achievements</h5>
              <ul className="langList">
                <li>
                  <a href="https://www.daad.de/en/" target="_target">
                    DAAD
                  </a>{" "}
                  HSK-2022 Scholarship holder
                </li>
                <li>
                  1 Month Language Course at{" "}
                  <a href="https://www.uni-muenster.de/en/" target="_blank">
                    WWU
                  </a>
                </li>
                <li>Regional Olympiad Winner</li>
              </ul>{" "}
            </article>
            <article className="about_card">
              <IoLanguageOutline className="about_icon" />
              <h5>Languages</h5>
              {/* <small>3+ Years Working</small> */}
              <ul className="langList">
                <li>English</li>
                <li>Russian</li>
                <li>German</li>
                <li>Uzbek</li>
                <li>Tajik</li>
              </ul>
            </article>
            <article className="quote">
              <FiKey className="about_icon" />
              <h5>Key Of Success</h5>
              <p>
                {" "}
                "Success is often achieved by those who don’t know that failure
                is inevitable."
              </p>
              <small>Coco Chanel</small>
              <small>fashion designer</small>
            </article>
          </div>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
