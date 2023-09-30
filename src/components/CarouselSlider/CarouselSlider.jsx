import React from "react";
import Slider from "react-slick";

import { InternshipCarouselCard } from "../LatestInternships/InternshipCarouselCard";

const slideMargin = 20; // Adjust the margin value as needed

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        width: 30,
        height: 30,
        background: "rgba(78, 29, 154, 0.37)",
        borderRadius: 5,
        color: "#4E1D9A",
        paddingTop: 6,
        paddingLeft: 4,
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        width: 30,
        height: 30,
        background: "rgba(78, 29, 154, 0.37)",
        borderRadius: 5,
        color: "#4E1D9A",
        paddingTop: 6,
        paddingLeft: 4,
      }}
      onClick={onClick}
    />
  );
}

export const CarouselSlider = ({ carouselCards, Component }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display 3 cards at a time
    slidesToScroll: 1,
    prevArrow: <PrevArrow />, 
    nextArrow: <NextArrow />, 
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {carouselCards.map((data) => (
          <Component {...data} />
        ))}
      </Slider>
    </div>
  );
};
