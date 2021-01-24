import React from "react";
import PageHeader from "components/PageHeader";
import exampleImage1 from "images/lizatilmann.png";
import "./Studio.scss";

function Project({ image, title, description }) {
  return (
    <div className="project">
      <img src={image} alt={title} />
      <h4 className="">
        {title} - {description}
      </h4>
      {/* <p className="measure-narrow">{description}</p> */}
    </div>
  );
}

const ongoingProjects = [
  {
    image: exampleImage1,
    title: "Fillip",
    description: "A powerful platform for online events",
  },
  {
    image: exampleImage1,
    title: "Devref.io",
    description: "An open source plattform for self directed learning",
  },
  {
    image: exampleImage1,
    title: "Devhaus Rebranding",
    description: "Making the transition from Code Camp to Devhaus Leipzig",
  },
];

const pastProjects = [
  {
    image: exampleImage1,
    title: "Edox Hackathon",
    description: "Boosting a companies vision in a single day",
  },
  {
    image: exampleImage1,
    title: "Liza Tilmann",
    description: "Code Camp Graduates build a website for a hair dresser",
  },
  {
    image: exampleImage1,
    title: "Pokedex",
    description: "An old style pokedex with face recognition build in 6 hours",
  },
  {
    image: exampleImage1,
    title: "Skitme",
    description: "An insane game build as the end of camp project",
  },
  {
    image: exampleImage1,
    title: "Curry On",
    description: "Experience an interactive Currywurst Challenge",
  },
  {
    image: exampleImage1,
    title: "Communic",
    description: "A social plattform for finding and contributing to projects",
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
      <section className="pb-4">
        <h4 className="secondary-title button-text">Ongoing Projects</h4>
        <div className="grid">
          {ongoingProjects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              image={project.image}
              description={project.description}
            ></Project>
          ))}
        </div>
      </section>
      <section className="pb-4">
        <h4 className="secondary-title button-text">Past Projects</h4>
        <div className="grid-narrow">
          {pastProjects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              image={project.image}
              description={project.description}
            ></Project>
          ))}
        </div>
      </section>
    </div>
  );
}
