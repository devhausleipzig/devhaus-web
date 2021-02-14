import React from "react";
import PageHeader from "components/PageHeader";
import "./Contact.scss";
import Picture from "components/Picture";

import collage from "images/contact/devhaus-collage.jpg";
import collageX2 from "images/contact/devhaus-collage@2x.jpg";

// const imagesContext = require.context("images/contact", true, /\.png+$/);
// let images = [];

// imagesContext.keys().forEach((filename) => {
//   images.push({
//     filename,
//     key: filename.slice(2, filename.indexOf(".", 2)),
//     src: imagesContext(filename).default,
//   });
// });
// shuffle(images);

// function shuffle(array) {
//   var currentIndex = array.length,
//     temporaryValue,
//     randomIndex;

//   // While there remain elements to shuffle...
//   while (0 !== currentIndex) {
//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;

//     // And swap it with the current element.
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }

//   return array;
// }

export default function Contact() {
  const subtitle = <p>We are always happy to meet and chat.</p>;

  const content = (
    <div className="measure-narrow">
      <p>
        info@devhausleipzig.de
        <br />
        Tel: 015789529664
      </p>
      <p>
        Floßplatz 6<br />
        04109 Leipzig
        <br />
        Germany
      </p>
    </div>
  );

  return (
    <div className="content contact navbar-padding">
      <PageHeader
        title="Contact"
        subtitle={subtitle}
        content={content}
        color="devhaus"
      ></PageHeader>
      <Picture
        src={collage}
        srcX2={collageX2}
        alt="Devhaus Leipzig"
        width={1536}
        height={1536}
      ></Picture>
      {/* <div className="image-grid">
        {images.map((image) => {
          return (
            <div className="image-container" key={image.key}>
              <img src={image.src} alt={image.key}></img>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}
