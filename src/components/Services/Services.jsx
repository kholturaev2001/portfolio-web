import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
import { useSelector } from "react-redux";

const Services = () => {
  const { allData } = useSelector((state) => state.changeLang);
  const data = Object.values(allData)[0]?.services;
  return (
    <section id="services">
      <h5>{data?.whatIOffer}</h5>
      <h2>{data?.services}</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>{data?.webDev}</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icons" />
              <p>{data?.buildUIInteraction}</p>
            </li>
            <li>
              <BiCheck className="service_list-icons" />
              <p>{data?.formFrontDesign}</p>
            </li>
            <li>
              <BiCheck className="service_list-icons" />
              <p>{data?.styleOfSite}</p>
            </li>
            <li>
              <BiCheck className="service_list-icons" />
              <p>{data?.apiInteraction}</p>
            </li>
            <li>
              <BiCheck className="service_list-icons" />
              <p>{data?.buildMulptiPageWebsite}</p>
            </li>
            <li>
              <BiCheck className="service_list-icons" />
              <p>{data?.emailTemplate}</p>
            </li>
            <li>
              <BiCheck className="service_list-icons" />
              <p>{data?.designUI}</p>
            </li>
            <li>
              <BiCheck className="service_list-icons" />
              <p>{data?.workOnLargeProjects}</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service_head">
            <h3>{data?.blockChainDev}</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icons" />
              <p>{data?.designEthBasedSC}</p>
            </li>
            <li>
              <BiCheck className="service_list-icons" />
              <p>{data?.generateChainOfTransaction}</p>
            </li>
            <li>
              <BiCheck className="service_list-icons" />
              <p>{data?.createDapp}</p>
            </li>
          </ul>
        </article>
        {/* END OF BLOCKCHAIN DEVELOPMENT*/}
      </div>
    </section>
  );
};

export default Services;
