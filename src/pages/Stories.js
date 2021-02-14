import React from "react";
import PageHeader from "components/PageHeader";
import Picture from "components/Picture";

import "./Stories.scss";
import classRoom from "images/stories/classroom.png";
import camp1 from "images/stories/camp1.png";
import codemotion from "images/stories/codemotion.png";
import hypezig from "images/stories/hypezig.png";
import smartinfrastructurehub from "images/stories/smart-infrastructure-hub.png";
import futureRetailHackathon from "images/stories/future-retail-hackathon.png";
import startupSafari from "images/stories/startup-safari.png";

function Story({ title, image, category, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" key={title}>
      <div className="story">
        <div className="image">
          <div className="image-container">
            <Picture src={image} alt={title} width={224} height={224}></Picture>
          </div>
        </div>
        <div className="information">
          <div className="category button-text text-1">{category}</div>
          <h3>{title}</h3>
        </div>
      </div>
    </a>
  );
}

const stories = [
  {
    title: "“A wild ride”: Code Camp Leipzig turns one year old",
    image: classRoom,
    category: "Article",
    link:
      "https://leipglo.com/2020/09/23/a-wild-ride-code-camp-leipzig-turns-one-year-old/",
  },

  {
    title:
      "Code Camp Leipzig named recipient of RE-START award by Smart Infrastructure Hub Leipzig",
    image: smartinfrastructurehub,
    category: "Article",
    link: "https://www.smartinfrastructurehub.com/vng-restart",
  },
  {
    title: "Startup Safari Panel: “Developing Skills for a Digital World”",
    image: startupSafari,
    category: "Panel Discussion",
    link: "https://www.youtube.com/watch?v=H5qbkufaJ2I",
  },
  {
    title:
      "Wie kann Leipzig Hypezig bleiben?: Leipzig’s transformation into an IT-hub",
    image: hypezig,
    category: "Article",
    link:
      "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fit-standorte-wie-kann-leipzig-hypezig-bleiben-1907-142461.html%3Ffbclid%3DIwAR2MdlTuNNy5iZQ9NBzm-zR3_0CQD87Uk08hWo_lFGgVLtMmaa5crwtWR3A&referer=https%3A%2F%2Fl.facebook.com%2F",
  },
  {
    title: "Tales from Code Camp #1",
    image: camp1,
    category: "Story Series",
    link: "https://medium.com/series/code-camp-leipzig-the-camp-5cba9f08f2f5",
  },
  {
    title: "Codemotion Berlin 2019 Community Interview with Simon",
    image: codemotion,
    category: "Interview",
    link: "https://www.youtube.com/watch?v=guhX4AH0IGw",
  },
  {
    title:
      "Shopping-Ideen für die Zukunft: Retail Hackathon in Leipzig’s Höfe am Brühl",
    image: futureRetailHackathon,
    category: "Hackathon",
    link:
      "https://www.lvz.de/Nachrichten/Wirtschaft/Wirtschaftszeitung/Retail-Hackathon-Leipzig-Shopping-Ideen-fuer-die-Zukunft",
  },
];

export default function Stories() {
  return (
    <div className="stories navbar-padding content">
      <PageHeader title="Stories" color="red"></PageHeader>
      <div className="card-list">{stories.map((story) => Story(story))}</div>
    </div>
  );
}
