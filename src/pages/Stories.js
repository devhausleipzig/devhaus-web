import React from "react";
import PageHeader from "components/PageHeader";

import "./Stories.scss";
import codeCampLeipzigLogo from "images/stories/classroom.png";
import camp1 from "images/stories/camp1.png";

function Story({ title, image, category, date, color, link }) {
  return (
    <a href={link}>
      <div className="story">
        <div className="image">
          <div className="image-container">
            <img src={image} alt={title}></img>
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

export default function Stories() {
  return (
    <div className="stories navbar-padding content">
      <PageHeader title="Stories" color="red"></PageHeader>
      <div className="card-list">
        <Story
          title="“A wild ride”: Code Camp Leipzig turns one year old"
          image={codeCampLeipzigLogo}
          category="Article"
          color="blue"
          date="Sep 23. 2020"
          link="https://leipglo.com/2020/09/23/a-wild-ride-code-camp-leipzig-turns-one-year-old/"
        ></Story>
        <Story
          category="Story"
          color="green"
          title="Tales from Code Camp #1"
          image={camp1}
          link="https://medium.com/series/code-camp-leipzig-the-camp-5cba9f08f2f5"
        ></Story>
      </div>
    </div>
  );
}
