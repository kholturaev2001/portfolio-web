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
import { useDispatch, useSelector } from "react-redux";
import { changeLangAcc } from "../../store/changeLang/changeLang";

const ChangeLang = () => {
  const [arrow, setArrow] = useState(false);
  const [a, setA] = useState(1);
  const [data, setData] = useState({});
  const dispatch = useDispatch();

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
      // setData(en);
      dispatch(changeLangAcc({ en }));
    } else if (a == 2) {
      // setData(ru);
      dispatch(changeLangAcc({ ru }));
    } else if (a == 3) {
      // setData(de);
      dispatch(changeLangAcc({ de }));
    } else if (a == 4) {
      // setData(tj);
      dispatch(changeLangAcc({ tj }));
    } else {
      // setData(uz);
      dispatch(changeLangAcc({ uz }));
    }
  }, [a]);

  const arrowToggle = () => {
    setArrow((e) => !e);
  };

  function changeLangFunc(c) {
    localStorage.setItem("lang", c);
    setA(c);
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
                      changeLangFunc(el.id);
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
