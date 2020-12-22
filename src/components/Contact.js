import React from "react";
import Slider from "./Slider.js";

export default function Contact() {
  return (
    <div className="content contact">
      <h1 className=" navbar-padding site-header">Contact Us</h1>
      <div className="contact-middle">
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
        </div>
        <div className="slider-container">
          <Slider></Slider>
        </div>
      </div>
    </div>
  );
}
