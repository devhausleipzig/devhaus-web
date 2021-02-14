import React from "react";
import PageHeader from "components/PageHeader";
import "./Studio.scss";
import fillipImage from "images/studio/fillip.png";
import lizatilmannImage from "images/studio/lizatilmann.png";
import devhausRebrandingImage from "images/studio/devhaus-rebranding.png";
import learningPlattformImage from "images/studio/learning-platform.png";
import pokedexImage from "images/studio/pokedex.png";
import skitmeImage from "images/studio/skitme.png";
import curryOnImage from "images/studio/curry-on.png";
import communicImage from "images/studio/communic.png";
import devhausNetworkImage from "images/studio/devhaus-network.png";
import hackerpubImage from "images/studio/hackerpub.png";
import weAreFamilyImage from "images/studio/we-are-family.png";
import plantSwapImage from "images/studio/plant-swap.png";

function Project({ image, title, link }) {
  const content = (
    <div className="project">
      <div className="image-container">
        <img src={image} alt={title} />
      </div>
      <h4 className="">{title}</h4>
    </div>
  );
  if (link) {
    return (
      <a href={link} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }
  return content;
}

const ongoingProjects = [
  {
    image: fillipImage,
    title: "Fillip - A powerful platform for online events",
    link: "https://fillip.ai",
  },
  {
    image: learningPlattformImage,
    title: "The learning platform of the Code Camp Leipzig",
  },
  {
    image: devhausRebrandingImage,
    title:
      "Devhaus Rebranding - Making the transition from Code Camp to Devhaus Leipzig",
  },
];

const pastProjects = [
  // {
  //   image: exampleImage1,
  //   title: "Edox Hackathon",
  //   description: "Boosting a companies vision in a single day",
  // },
  {
    image: weAreFamilyImage,
    title: "We are family - Global Game Jam 2021",
  },
  {
    image: devhausNetworkImage,
    title: "Final Project Camp #3 - A social network for aspiring developers",
  },
  {
    image: plantSwapImage,
    title: "Plant Swap - A tinder-style plant trading app",
  },
  {
    image: pokedexImage,
    title: "A classic style pokedex with face recognition built in 6 hours",
  },
  {
    image: lizatilmannImage,
    title:
      "Code Camp Graduates team up to build a website for a hairdresser in Munich",
  },
  {
    image: skitmeImage,
    title:
      "Skitme - An insanely entertaining drawing game build at the end of camp #2",
  },
  {
    image: curryOnImage,
    title: "Curry On - Experience an interactive Currywurst Challenge",
  },
  {
    image: hackerpubImage,
    title: "Hacker Pub Quiz",
  },
  {
    image: communicImage,
    title:
      "Communic - A social plattform for finding and contributing to projects",
  },
];

export default function Work() {
  return (
    <div className="studio navbar-padding content">
      <PageHeader
        title="Studio"
        description="Whether it’s a personal or professional project, our residents find support in bringing their goals to fruition."
        color="green"
      ></PageHeader>
      <section className="projects">
        <h4 className="secondary-title button-text">Ongoing Projects</h4>
        <div className="grid">
          {ongoingProjects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              image={project.image}
              link={project.link}
            ></Project>
          ))}
        </div>
      </section>
      <section className="projects">
        <h4 className="secondary-title button-text">Past Projects</h4>
        <div className="grid">
          {pastProjects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              image={project.image}
              link={project.link}
            ></Project>
          ))}
        </div>
      </section>
    </div>
  );
}
