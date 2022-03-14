import React from "react";
import PageHeader from "../components/PageHeader";
// import "./Contact.scss";
import Picture from "../components/Picture";
import { useTranslation } from "react-i18next";
import Page from "../layout/page";
import Head from "next/head";

const collage = "/images/contact/devhaus-collage.jpg";
// import collageX2 from "images/contact/devhaus-collage@2x.jpg";

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
  const { t } = useTranslation();

  const subtitle = <p>{t("contact:subheader")}</p>;

  const content = (
    <div className="measure-narrow">
      <p>
        info@devhausleipzig.de
        <br />
        +49 151 21675615
      </p>
      <p>
        Floßplatz 6 <br />
        04109 Leipzig <br />
        {t("contact:germany")}
      </p>
    </div>
  );

  return (
    <Page>
      <Head>
        <title>Contact - Devhaus Leipzig</title>
      </Head>
      <PageHeader
        title={t("contact:header")}
        subtitle={subtitle}
        content={content}
      ></PageHeader>
      <Picture
        src={collage}
        // srcX2={collageX2}
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
    </Page>
  );
}
