import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/MiniProjects.png";
import IMG2 from "../../assets/CoffeStyle.png";
import IMG3 from "../../assets/Airbnb.png";
import IMG5 from "../../assets/Dashboard.png";
import IMG7 from "../../assets/TravelJournal.png";
import IMG8 from "../../assets/axios back.png";
import { useSelector } from "react-redux";

const Portfolio = () => {
  const { allData } = useSelector((state) => state.changeLang);
  const data = Object.values(allData)[0]?.portfolio;
  const projects = [
    {
      id: 1,
      image: IMG1,
      title: data?.miniProjects,
      github: "https://github.com/kholturaev2001/Mini_Projects",
      demo: "https://dancing-licorice-7e4dab.netlify.app",
    },
    {
      id: 2,
      image: IMG2,
      title: "Coffe Style (Landing Page)",
      github: "https://github.com/kholturaev2001/Coffee-Style",
      demo: "https://coffe-style.netlify.app",
    },
    {
      id: 3,
      image: IMG3,
      title: data?.airbnb,
      github: "https://github.com/kholturaev2001/Airbnb",
      demo: "https://iridescent-moonbeam-0975eb.netlify.app",
    },
    // {
    //   id: 4,
    //   image: IMG4,
    //   title: "Crypto Currency Dashboard & Financial Visualization",
    //   github: "https://github.com",
    //   demo: "https://dribbble.com/Alien_pixels",
    // },
    {
      id: 5,
      image: IMG5,
      title: data?.dashboard,
      github: "https://github.com/kholturaev2001/Dashboard",
      demo: "https://superb-begonia-3e7641.netlify.app",
    },
    // {
    //   id: 6,
    //   image: IMG6,
    //   title: "Crypto Currency Dashboard & Financial Visualization",
    //   github: "https://github.com",
    //   demo: "https://dribbble.com/Alien_pixels",
    // },
    {
      id: 7,
      image: IMG7,
      title: data?.travelJournal,
      github: "https://github.com/kholturaev2001/Travel-journey",
      demo: "https://charming-llama-3426a6.netlify.app",
    },
    {
      id: 8,
      image: IMG8,
      title: data?.axios,
      github: "https://github.com/kholturaev2001/Axios-Back-end-",
      demo: "https://lustrous-puppy-545d19.netlify.app",
    },
  ];
  return (
    <section id="portfolio">
      <h5>{data?.myWork}</h5>
      <h2>{data?.portfolio}</h2>

      <div className="container portfolio_container">
        {projects.map(({ id, image, title, github, demo }) => (
          <article key={id} className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={image} alt="" />
            </div>
            <h3>{title}</h3>
            <div className="portfolio_item-cta">
              <a href={github} className="btn" target="_blank">
                Github
              </a>
              <a href={demo} className="btn btn-primary" target="_blank">
                {data?.liveDemo}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
