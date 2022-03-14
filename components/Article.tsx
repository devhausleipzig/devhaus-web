import React from "react";
// import "./Article.scss";

export default function Article({ title, content }) {
  return (
    <div className="article content navbar-padding">
      <div className="text-section">
        <div className="title-section">
          <div className="sticky-title">
            <h1>{title}</h1>
          </div>
        </div>
        <div className="content-section">{content}</div>
      </div>
    </div>
  );
}
