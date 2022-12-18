import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const Experience = () => {
  const { allData } = useSelector((state) => state.changeLang);
  const data = Object.values(allData)[0]?.experience;
  return (
    <section id="experience">
      <h5>{data?.skillsIHave}</h5>
      <h2>{data?.myExperience}</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>{data?.frontendDev}</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                {" "}
                <h4>HTML</h4>
                <small className="text-light">{data?.experienced}</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                {" "}
                <h4>CSS</h4>
                <small className="text-light">{data?.intermediate}</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                {" "}
                <h4>JavaScript</h4>
                <small className="text-light">{data?.experienced}</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                {" "}
                <h4>TypeScript</h4>
                <small className="text-light">{data?.elementary}</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                {" "}
                <h4>SASS</h4>
                <small className="text-light">{data?.experienced}</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                {" "}
                <h4>Tailwind</h4>
                <small className="text-light">{data?.elementary}</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                {" "}
                <h4>React</h4>
                <small className="text-light">{data?.experienced}</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                {" "}
                <h4>Bitbucket</h4>
                <small className="text-light">{data?.experienced}</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                {" "}
                <h4>MUI/Ant Design</h4>
                <small className="text-light">{data?.experienced}</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                {" "}
                <h4>GitHub</h4>
                <small className="text-light">{data?.experienced}</small>
              </div>
            </article>
          </div>
        </div>

        {/* END OF FRONTEND */}

        <div className="experience_backend">
          <h3>Blockchain Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                {" "}
                <h4>Solidity</h4>
                <small className="text-light">{data?.basics}</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                {" "}
                <h4>Web 3</h4>
                <small className="text-light">{data?.basics}</small>
              </div>
            </article>
            {/* <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                {" "}
                <h4>Ether.js</h4>
                <small className="text-light">{data?.basics}</small>
              </div>
            </article> */}
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                {" "}
                <h4>Binance</h4>
                <small className="text-light">{data?.basics}</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                {" "}
                <h4>Metamask</h4>
                <small className="text-light">{data?.intermediate}</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                {" "}
                <h4>{data?.workWithGoerliTest}</h4>
                <small className="text-light">{data?.intermediate}</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
