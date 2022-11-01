import React from "react";
import "./portfolio.css";
import IMG1 from "../../assetsOne/portfolio1.jpg";
import IMG2 from "../../assetsOne/portfolio2.jpg";
import IMG3 from "../../assetsOne/portfolio3.jpg";
import IMG4 from "../../assetsOne/portfolio4.jpg";
import IMG5 from "../../assetsOne/portfolio5.png";
import IMG6 from "../../assetsOne/portfolio6.jpg";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Crypto Currency Dashboard & Financial Visualization",
      gitgub: "https://gitgub.com",
      demo: "https://dribbble.com/Alien_pixels",
    },
    {
      id: 2,
      image: IMG2,
      title: "Charts templates & infographics in Figma",
      gitgub: "https://gitgub.com",
      demo: "https://dribbble.com/Alien_pixels",
    },
    {
      id: 3,
      image: IMG3,
      title: "Figma dashboard UI kit for data design web apps",
      gitgub: "https://gitgub.com",
      demo: "https://dribbble.com/Alien_pixels",
    },
    {
      id: 4,
      image: IMG4,
      title: "Crypto Currency Dashboard & Financial Visualization",
      gitgub: "https://gitgub.com",
      demo: "https://dribbble.com/Alien_pixels",
    },
    {
      id: 5,
      image: IMG5,
      title: "Crypto Currency Dashboard & Financial Visualization",
      gitgub: "https://gitgub.com",
      demo: "https://dribbble.com/Alien_pixels",
    },
    {
      id: 6,
      image: IMG6,
      title: "Crypto Currency Dashboard & Financial Visualization",
      gitgub: "https://gitgub.com",
      demo: "https://dribbble.com/Alien_pixels",
    },
  ];
  return (
    <section id="porfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => (
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
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
