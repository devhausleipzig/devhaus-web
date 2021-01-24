import React from "react";
import AliceCarousel from "react-alice-carousel";

import image1 from "images/camp2graduation.JPG";
import image2 from "images/ccl-1-kickoff.png";
import image3 from "images/chat.jpg";
import image4 from "images/instructors.jpg";

export default function CCLslider() {
  return (
    <div className="slider">
      <AliceCarousel
        className="academy-slider"
        autoPlay
        autoPlayInterval="3000"
      >
        <img src={image1} className="sliderimg" alt="" />
        <img src={image2} className="sliderimg" alt="" />
        <img src={image3} className="sliderimg" alt="" />
        <img src={image4} className="sliderimg" alt="" />
      </AliceCarousel>
    </div>
  );
}
