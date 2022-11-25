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
  const data = Object.values(allData)[0]?.about;
  return (
    <section id="about">
      <h5>{data?.getKnow}</h5>
      <h2>{data?.aboutMe}</h2>
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
              <h5>{data?.experience}</h5>
              <small>
                7+ {data?.monthsWork}{" "}
                <a href="https://vatan-ict.tj" target="_blank">
                  Vatan ICT
                </a>
              </small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>{data?.projects}</h5>
              <ul className="langList">
                <li>
                  <a href="https://edonish.tj" target="_blank">
                    eDonish
                  </a>{" "}
                  {data?.eDonishDesc}
                </li>
              </ul>{" "}
            </article>
            <article className="about_card">
              <MdCastForEducation className="about_icon" />
              <h5>{data?.education}</h5>
              <ul className="langList">
                <li>
                  <a href="https://msu.tj" target="_blank">
                    {data?.msu}
                  </a>
                </li>
                <li>{data?.school} №22</li>
                <li>{data?.school} №9</li>
              </ul>
            </article>
            <article className="about_card">
              <FaChartLine className="about_icon" />
              <h5>{data?.achievements}</h5>
              <ul className="langList">
                <li>
                  <a href="https://www.daad.de/en/" target="_target">
                    {data?.daad}
                  </a>{" "}
                  {data?.hsk2022}
                </li>
                <li>
                  {data?.oneMonthCourse}{" "}
                  <a href="https://www.uni-muenster.de/en/" target="_blank">
                    {data?.wwu}
                  </a>
                </li>
                <li>{data?.olympiadWinner}</li>
              </ul>{" "}
            </article>
            <article className="about_card">
              <IoLanguageOutline className="about_icon" />
              <h5>{data?.languages}</h5>
              {/* <small>3+ Years Working</small> */}
              <ul className="langList">
                <li>{data?.en}</li>
                <li>{data?.ru}</li>
                <li>{data?.de}</li>
                <li>{data?.uz}</li>
                <li>{data?.tj}</li>
              </ul>
            </article>
            <article className="quote">
              <FiKey className="about_icon" />
              <h5>{data?.successKey}</h5>
              <p> {data?.successKeyDesc}</p>
              <small>{data?.cocoChanel}</small>
              <small>{data?.fashionDisigner}</small>
            </article>
          </div>
          <a href="#contact" className="btn btn-primary">
            {data?.letsTalk}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
