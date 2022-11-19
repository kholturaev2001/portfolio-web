import React from "react";
import "./services.css";
import {BiCheck} from "react-icons/bi"

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
            <div className="service_head">
              <h3>Web Development</h3>
            </div>

            <ul className="service_list">
              <li>
                <BiCheck className="service_list-icons"/>
                <p>Build complex UI interactions that communicate with the server</p>
              </li>
              <li>
                <BiCheck className="service_list-icons"/>
                <p>Form the front-end design of a website by applying information that affects content.</p>
              </li>
              <li>
                <BiCheck className="service_list-icons"/>
                <p>Style, flexibility and interactivity of a site</p>
              </li>
              <li>
                <BiCheck className="service_list-icons"/>
                <p>Interaction with API</p>
              </li>
              <li>
                <BiCheck className="service_list-icons"/>
                <p>Build static multi-page websites.</p>
              </li>
              <li>
                <BiCheck className="service_list-icons"/>
                <p>Code email templates.</p>
              </li>
              <li>
                <BiCheck className="service_list-icons"/>
                <p>Design beautiful user interfaces.</p>
              </li>
              <li>
                <BiCheck className="service_list-icons"/>
                <p>Work with other developers on larger projects.</p>
              </li>
            </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
            <div className="service_head">
              <h3>Blockchain Development</h3>
            </div>

            <ul className="service_list">
              <li>
                <BiCheck className="service_list-icons"/>
                <p>Constructing & designing Ethereum-based smart contracts within the Ethereum Virtual Platform and Blockchain platforms.</p>
              </li>
              <li>
                <BiCheck className="service_list-icons"/>
                <p>Implement business logic and generate a chain of transaction records in the blockchain system.</p>
              </li>
              <li>
                <BiCheck className="service_list-icons"/>
                <p>Creating decentralized applications (DAPP) and interaction among users and applications.</p>
              </li>
            </ul>
        </article>
        {/* END OF BLOCKCHAIN DEVELOPMENT*/}
      </div>
    </section>
  );
};

export default Services;
