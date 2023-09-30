import React from "react";
import courseLogo from "../../assets/images/courseLogo.png";

import { CarouselSlider } from "../CarouselSlider/CarouselSlider";
import { CoursesCarouselCard } from "./CoursesCarouselCard";

export const CoursesWeOffer = () => {
  const coursesOffered = [
    {
      logo: courseLogo,
      title: "Data Science",
      company: "Acmegrade",
      location: "Mumbai, India",
      rating: "4.9",
      reviews: 345,
      courseLevel: "Begginer Level Course",
    },
    {
      logo: courseLogo,
      title: "Data Science",
      company: "Acmegrade",
      location: "Mumbai, India",
      rating: "4.9",
      reviews: 345,
      courseLevel: "Begginer Level Course",
    },
    {
      logo: courseLogo,
      title: "Data Science",
      company: "Acmegrade",
      location: "Mumbai, India",
      rating: "4.9",
      reviews: 345,
      courseLevel: "Begginer Level Course",
    },
    {
      logo: courseLogo,
      title: "Data Science",
      company: "Acmegrade",
      location: "Mumbai, India",
      rating: "4.9",
      reviews: 345,
      courseLevel: "Begginer Level Course",
    },
    {
      logo: courseLogo,
      title: "Data Science",
      company: "Acmegrade",
      location: "Mumbai, India",
      rating: "4.9",
      reviews: 345,
      courseLevel: "Begginer Level Course",
    },
    {
      logo: courseLogo,
      title: "Data Science",
      company: "Acmegrade",
      location: "Mumbai, India",
      rating: "4.9",
      reviews: 345,
      courseLevel: "Begginer Level Course",
    },
  ];

  return (
    <div className="container mx-auto mt-[80px] mb-[80px]">
      <div className="text-black text-[40px] font-PoppinsBold  leading-[46.80px] text-center mb-10">
        Courses We Offer
      </div>

      <CarouselSlider
        carouselCards={coursesOffered}
        Component={CoursesCarouselCard}
      />
    </div>
  );
};
