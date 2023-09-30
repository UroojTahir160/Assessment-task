import React from "react";
import greenStarIcon from "../../assets/icons/greenStarIcon.png";
import locationIcon from "../../assets/icons/locationIcon.png";

export const CoursesCarouselCard = ({
  logo,
  title,
  company,
  location,
  rating,
  reviews,
  courseLevel,
}) => {
  return (
    <div className="carousel-card bg-white rounded-[5px] border border-primary-stone-300 flex flex-col mr-[15px] ml-[15px]">
      <div className="p-5">
        <div className="flex gap-2">
          <img
            src={logo}
            alt="Company Logo"
            className="w-[53px] h-[53px] rounded-md"
          />
          <div className="flex flex-col gap-1 mb-5">
            <h3 className="text-black font-Poppins font-bold">{title}</h3>
            <span className="text-primary-neutral-500">{company}</span>
          </div>
        </div>
        <div className="flex justify-between gap-1">
          <div className="flex gap-2 items-center">
            <img src={locationIcon} alt={"location-icon"} className="w-4 h-4" />
            <span className="text-primary-neutral-500">{location}</span>
          </div>
          <div className="flex gap-2 items-center">
            <img src={greenStarIcon} alt={"green-star"} className="w-4 h-4" />
            <span className="text-primary-lime-600">{rating}</span>

            <span className="text-primary-neutral-500">
              ({reviews} Reviews)
            </span>
          </div>
        </div>
      </div>

      <div className="border border-primary-stone-200 " />
      <div className="py-3 px-5 flex justify-between">
        <span className="text-primary-neutral-500 text-base font-normal font-Poppins">
          {courseLevel}
        </span>
        <button className=" text-lime-600 text-base font-normal font-Poppins">
          View Details
        </button>
      </div>
    </div>
  );
};
