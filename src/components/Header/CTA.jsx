import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import cv_de from "../../assets/CV/CV_Muhammadrasul_de.pdf";
import cv_en from "../../assets/CV/CV_Muhammadrasul_en.pdf";
import cv_ru from "../../assets/CV/CV_Muhammadrasul_ru.pdf";

const CTA = () => {
  const { allData } = useSelector((state) => state.changeLang);
  const data = Object.values(allData)[0]?.header;
  const [cvOriginal, setCvOriginal] = useState(cv_en);

  var lang = localStorage.getItem("lang");

  useEffect(() => {
    if (lang == 1) {
      setCvOriginal(cv_en);
    } else if (lang == 2) {
      setCvOriginal(cv_ru);
    } else if (lang == 3) {
      setCvOriginal(cv_de);
    } else {
      setCvOriginal(cv_ru);
    }
  }, [lang]);

  return (
    <div className="cta">
      <a href={cvOriginal} download className="btn">
        {data?.cvDownload}
      </a>
      <a href="#contact" className="btn btn-primary">
        {data?.letsTalk}
      </a>
    </div>
  );
};

export default CTA;
