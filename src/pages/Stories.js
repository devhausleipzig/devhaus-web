import React from "react";
import PageHeader from "components/PageHeader";
import exampleImage from "images/aboutus.JPG";
import fillipImage from "images/filip.png";
import "./Stories.scss";

function Story({ title, image, category, date, color }) {
  return (
    <div className="story">
      <div className="image">
        <img src={image} alt={title}></img>
      </div>
      <div className="information">
        <div className="category button-text text-1">{category}</div>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default function Stories() {
  return (
    <div className="stories navbar-padding content">
      <PageHeader title="Stories" color="red"></PageHeader>
      <div className="card-list">
        <Story
          title="Code Camp Leipzig becomes Devhaus Leipzig"
          image={exampleImage}
          category="News"
          color="blue"
          date="Jan 17. 2021"
        ></Story>
        <Story
          category="Coding"
          color="green"
          title="How we use a custom Vue renderer to run virtual interactions"
          image={fillipImage}
        ></Story>
      </div>
    </div>
  );
}
