import React from "react";
import PageHeader from "components/PageHeader";
import locationImage from "images/basislager3.jpg";
import "./Contact.scss";

export default function Contact() {
  const image = (
    <div className="space-image-container">
      <img className="space-image" src={locationImage} alt="Devhaus Leipzig" />
      <h3>Devhaus Leipzig Floßplatz</h3>
    </div>
  );

  const subtitle = (
    <p>
      We are always happy to meet and chat.
      <br />
      Just send us an email.
    </p>
  );

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
        color="violet"
      ></PageHeader>
      {image}
    </div>
  );
}
