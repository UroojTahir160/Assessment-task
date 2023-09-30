import React from "react";
import greyBagIcon from "../../assets/icons/greyBagIcon.png";
import greyCalenderIcon from "../../assets/icons/greyCalendarIcon.png";
import dollarCoin from "../../assets/images/dollarCoin.png";

export const InternshipCarouselCard = ({ logo, title, company, duration }) => {
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
            <div className="flex gap-2 items-center">
              <img src={greyBagIcon} alt={"grey-bag"} className="w-4 h-4" />
              <span className="text-primary-neutral-500">{company}</span>
              <img
                src={greyCalenderIcon}
                alt={"grey-calendar"}
                className="w-4 h-4"
              />
              <span className="text-primary-neutral-500">{duration}</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <img src={dollarCoin} alt={"dollar-coin"} className="w-4 h-4" />
          <span className="text-black text-base font-normal font-Poppins">
            10 Coins
          </span>
        </div>
      </div>

      <div className="border border-primary-stone-200 " />
      <div className="py-3 px-5 flex justify-between">
        <button className="bg-primary-green-400 text-black font-Poppins hover:bg-green-400 transition duration-300 ease-in-out py-2 px-8 rounded-md">
          Apply Now
        </button>
        <button className=" text-primary-neutral-500 font-Poppins border border-primary-neutral-500 py-2 px-8 rounded-md hover:bg-gray-300 hover:text-primary-neutral-500">
          View Program
        </button>
      </div>
    </div>
  );
};
