import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import corusel from "../assets/img/rasm.png";
import { Image } from "@chakra-ui/react";

const Section = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:2000
  };
  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div>
          <Image w={"100%"} src={corusel} />
        </div>
        <div>
          <Image w={"100%"} src={corusel} />
        </div>
        <div>
          <Image w={"100%"} src={corusel} />
        </div>
      </Slider>
    </div>
  );
};
export default Section;
