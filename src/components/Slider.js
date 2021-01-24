import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Slider.scss";

import image1 from "images/basislager1.jpg";
import image2 from "images/basislager2.jpg";
import image3 from "images/basislager3.jpg";
import image4 from "images/basislager4.jpg";

export default function Slider() {
  return (
    <div className="Slider">
      <AliceCarousel autoPlay autoPlayInterval="3000">
        <img src={image1} className="sliderimg" alt="" />
        <img src={image2} className="sliderimg" alt="" />
        <img src={image3} className="sliderimg" alt="" />
        <img src={image4} className="sliderimg" alt="" />
      </AliceCarousel>
    </div>
  );
}
