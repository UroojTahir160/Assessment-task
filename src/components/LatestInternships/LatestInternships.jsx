import React, { useState } from "react";
import profileBagIcon from "../../assets/icons/profileBagIcon.png";
import bagIcon from "../../assets/icons/bagIcon.png";
import profileSettingIcon from "../../assets/icons/profileSettingIcon.png";
import languageTranslateIcon from "../../assets/icons/languageTranslateIcon.png";
import graphicPencilIcon from "../../assets/icons/graphicPencilIcon.png";
import GoogleLogo from "../../assets/images/internshipLogos/GoogleLogo.png";
import DLogo from "../../assets/images/internshipLogos/DLogo.png";
import JioLogo from "../../assets/images/internshipLogos/JioLogo.png";
import { CategoryBox } from "./CategoryBox";
import { CarouselSlider } from "../CarouselSlider/CarouselSlider";
import { InternshipCarouselCard } from "./InternshipCarouselCard";

export const LatestInternships = () => {
  const internshipCategories = [
    {
      label: "Accounting",
      icon: profileBagIcon,
    },
    {
      label: "Marketing",
      icon: bagIcon,
    },
    {
      label: "Engineer",
      icon: profileSettingIcon,
    },
    {
      label: "Translation",
      icon: languageTranslateIcon,
    },

    {
      label: "Graphic Design",
      icon: graphicPencilIcon,
    },
  ];

  const internshipCardsContent = [
    {
      logo: GoogleLogo,
      title: "Commercial Industrial Placement",
      company: "Google",
      duration: "Internship - (10 Months+)",
    },
    {
      logo: JioLogo,
      title: "Marketing",
      company: "Jio",
      duration: "Internship - (10 Months+)",
    },
    {
      logo: DLogo,
      title: "Engineer",
      company: "D Cone",
      duration: "Internship - (10 Months+)",
    },
    {
      logo: GoogleLogo,
      title: "Commercial Industrial Placement",
      company: "Google",
      duration: "Internship - (10 Months+)",
    },
    {
      logo: JioLogo,
      title: "Marketing",
      company: "Jio",
      duration: "Internship - (10 Months+)",
    },
    {
      logo: DLogo,
      title: "Engineer",
      company: "D Cone",
      duration: "Internship - (10 Months+)",
    },
  ];

  return (
    <div className="container mx-auto mt-[80px] mb-[80px]">
      <div className="text-black text-[40px] font-PoppinsBold  leading-[46.80px] text-center">
        Latest Internships
      </div>
      <div className="flex gap-10 justify-center my-10">
        {internshipCategories.map((category, index) => (
          <CategoryBox
            key={index}
            label={category.label}
            icon={category.icon}
            isSelected={index === 0} // The first category is always selected
          />
        ))}
      </div>
      <CarouselSlider carouselCards={internshipCardsContent} Component={InternshipCarouselCard}/>
    </div>
  );
};
