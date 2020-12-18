import React from "react";

export default function Contact() {
  function changeImage(e) {
    e.target.setAttribute(
      "src",
      "https://anybee.com/storage/spaces/700x500_52ecbcaa10e16ef06cf3b9056394e2b0.jpg"
    );
    e.target.setAttribute("alt", "basislager2");
  }
  return (
    <div className="content contact">
      <h1 className=" navbar-padding site-header">Contact Us</h1>
      <div className="contact-info">
        <div className="contact-text">
          <p>contact@devhaus.de</p>
          <p>+49 1512 1675615</p>
          <br></br>
          <p>Floßpl. 6</p>
          <p>04107 Leipzig</p>
          <br></br>
          <p className="directions">Get directions</p>
          <br></br>
          <p className="location-description">
            Devhaus is located within the Basislager Coworking space.
          </p>
          <br></br>
          <p className="location-description">
            Conveniently close to the University and city centre. Easily
            accessible by trams 10 or 11 from the Hauptbanhof.{" "}
          </p>
        </div>
        <div className="image-container">
          <img
            onClick={changeImage}
            id="contact-image"
            src="https://media.spacebase.com/media/cache/spaces/3691/basislager-4og-k2-1_1280.jpg"
            alt="basislager"
          ></img>
        </div>
      </div>
    </div>
  );
}
