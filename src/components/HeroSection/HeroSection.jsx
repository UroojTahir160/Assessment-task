import React from "react";
import heroBackgroundImage from "../../assets/images/heroBackgroundImage.png";
import heroForegroundImage from "../../assets/images/heroForegroundImage.png";
import { SearchInput } from "../SearchInput/SearchInput";

export const HeroSection = () => {
  return (
    <div
      className="w-full h-[601px]  relative bg-gradient-to-r from-primary-violet-900 via-primary-violet-900 to-primary-violet-900"
      style={{
        position: "relative",
        overflow: "hidden",
        zIndex: 1,
      }}
    >
      <img
        src={heroBackgroundImage}
        alt="Background Image"
        className="w-full h-full object-cover opacity-10 absolute top-0 left-0 z-[2] "
      />

      <div className="absolute inset-0 flex items-center justify-between container mx-auto z-[3]">
        <div className="text-white text-left flex flex-col gap-8">
          <div>
            <span className="text-white text-[40px] font-bold font-Poppins leading-[46.80px]">
              To be the best, <br />
            </span>
            <span className="text-primary-green-400 text-[40px] font-bold font-Poppins leading-[46.80px]">
              Choose the best...
            </span>
            <div className="text-white text-lg font-medium font-Poppins">
              Company reviews, Course review, Internship
            </div>
          </div>

          <div className="max-w-lg mx-auto rounded-lg">
            <SearchInput />
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0">
        <img
          src={heroForegroundImage} // Replace with the path to your image
          alt="Hero ForeGround Image"
          className="w-[946px] h-[631px]"
        />
      </div>
    </div>
  );
};
