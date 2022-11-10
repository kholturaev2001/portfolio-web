import React, { useEffect, useState } from "react";
import TJFlag from "../../assets/TJ.svg";
import RUFlag from "../../assets/RU.svg";
import ENFlag from "../../assets/EN.svg";
import DEFlag from "../../assets/germany-flag-icon.png";
import UZFlag from "../../assets/uzbekistan-flag-icon.png";
import "./ChangeLang.css";
import Arrow from "../../assets/Arrow";
import tj from "./langs/tj/global.json";
import ru from "./langs/ru/global.json";
import en from "./langs/en/global.json";
import uz from "./langs/uz/global.json";
import de from "./langs/de/global.json";

const   ChangeLang = () => {
  const [arrow, setArrow] = useState(false);
  const [a, setA] = useState(1);
  const [data, setData] = useState({});

  const language = [
    {
      id: 1,
      name: "EN",
      locales: "en",
      img: ENFlag,
    },
    {
      id: 2,
      name: "РУ",
      locales: "ru",
      img: RUFlag,
    },
    {
      id: 3,
      name: "DE",
      locales: "de",
      img: DEFlag,
    },
    {
      id: 4,
      name: "ТҶ",
      locales: "tg",
      img: TJFlag,
    },
    {
      id: 5,
      name: "UZ",
      locales: "uz",
      img: UZFlag,
    },
  ];

  useEffect(() => {
    if (a == 1) {
      setData(en);
    } else if (a == 2) {
      setData(ru);
    } else if (a == 3) {
      setData(de);
    } else if (a == 4) {
      setData(uz);
    } else {
      setData(tj);
    }
  }, [a]);

  const arrowToggle = () => {
    setArrow((e) => !e);
  };
  function changeLang(c) {
    localStorage.setItem("lang", c);
    setA(c);
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
  }, []);

  const handleClickOutside = () => {
    setArrow((e) => e === true ? true : false);
    console.log('clicked')
  }

  return (
    <div>
      <div className="main">
        <button onClick={arrowToggle}>
          <img className="flagImg" src={language[a - 1].img} alt="flag" />
          <p>{language[a - 1].name}</p>
          <Arrow className={arrow ? "down" : "up"} />
        </button>
        {arrow && (
          <div className="lngs_container">
            {language.map(
              (el, id) =>
                el.id !== language[a - 1].id && (
                  <button
                    key={id}
                    className="lng_btns"
                    onClick={() => {
                      setArrow((e) => !e);
                      changeLang(el.id);
                    }}
                  >
                    <img className="flagImg" src={el.img} alt="not found" />{" "}
                    <span>{el.name}</span>
                  </button>
                )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChangeLang;
