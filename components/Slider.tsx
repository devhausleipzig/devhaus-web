import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// import "./Slider.scss";

const image1 = "../images/basislager1.jpg";
const image2 = "../images/basislager2.jpg";
const image3 = "../images/basislager3.jpg";
const image4 = "../images/basislager4.jpg";

export default function Slider() {
  return (
    <div className="Slider">
      <AliceCarousel autoPlay autoPlayInterval={3000}>
        <img src={image1} className="sliderimg" alt="" />
        <img src={image2} className="sliderimg" alt="" />
        <img src={image3} className="sliderimg" alt="" />
        <img src={image4} className="sliderimg" alt="" />
      </AliceCarousel>
    </div>
  );
}
