// @ts-nocheck
import React from "react";
import AliceCarousel from "react-alice-carousel";

const image1 = "../images/camp2graduation.JPG";
const image2 = "../images/ccl-1-kickoff.png";
const image3 = "../images/chat.jpg";
const image4 = "../images/instructors.jpg";

export default function CCLslider() {
  return (
    <div className="slider">
      <AliceCarousel
        className="academy-slider"
        autoPlay
        autoPlayInterval={3000}
      >
        <img src={image1} className="sliderimg" alt="" />
        <img src={image2} className="sliderimg" alt="" />
        <img src={image3} className="sliderimg" alt="" />
        <img src={image4} className="sliderimg" alt="" />
      </AliceCarousel>
    </div>
  );
}
