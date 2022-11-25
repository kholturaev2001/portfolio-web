import React from "react";
import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/zyro-image-2.png";
import HeaderSocials from "./HeaderSocials";
import { useSelector } from "react-redux";

const Header = () => {
  const { allData } = useSelector((state) => state.changeLang);
  const data = Object.values(allData)[0]?.header;

  return (
    <header>
      <div className="container header_container">
        <h5 className="hello">{data?.hello}</h5>
        <h1>{data?.myName}</h1>
        <h5 className="text-light hello">{data?.job}</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">
          {data?.scrollDown}
        </a>
      </div>
    </header>
  );
};

export default Header;
