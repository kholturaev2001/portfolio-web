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
import { useDispatch } from "react-redux";
import { changeLangAcc } from "../../store/changeLang/changeLang";

const ChangeLang = () => {
  var lang = localStorage.getItem("lang");

  const [arrow, setArrow] = useState(false);
  const [a, setA] = useState(lang || 1);
  const dispatch = useDispatch();

  const language = [
    {
      id: 1,
      name: "English",
      img: ENFlag,
    },
    {
      id: 2,
      name: "Русский",
      img: RUFlag,
    },
    {
      id: 3,
      name: "Deutsch",
      img: DEFlag,
    },
    {
      id: 4,
      name: "Тоҷикӣ",
      img: TJFlag,
    },
    {
      id: 5,
      name: "O'zbekcha",
      img: UZFlag,
    },
  ];

  useEffect(() => {
    if (a == 1) {
      dispatch(changeLangAcc({ en }));
    } else if (a == 2) {
      dispatch(changeLangAcc({ ru }));
    } else if (a == 3) {
      dispatch(changeLangAcc({ de }));
    } else if (a == 4) {
      dispatch(changeLangAcc({ tj }));
    } else {
      dispatch(changeLangAcc({ uz }));
    }
  }, [a]);

  const arrowToggle = () => {
    setArrow((e) => !e);
  };

  // useEffect(() => {
  //   window.addEventListener("click", (e) => {
  //     if (e.target.innerText !== "English") {
  //       setArrow(false);
  //     }
  //     console.log(e.target.innerText);
  //   });
  // }, []);

  function changeLangFunc(c) {
    localStorage.setItem("lang", c);
    setA(c);
  }

  const lowerCaseAllWordsExceptFirstLetters = (word) => {
    return word.charAt(0) + word.substring(1).toLowerCase();
  };

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
