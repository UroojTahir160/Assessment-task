import React from "react";

export const CategoryBox = ({ label, icon, isSelected, onClick }) => {
    return (
      <div
        className={`w-fit  text-base font-normal font-Poppins rounded-[5px] flex justify-between items-center py-4 px-8 cursor-pointer gap-3 ${
          isSelected
            ? "bg-violet-900"
            : "bg-white rounded-[5px] border border-primary-violet-900 border-opacity-10"
        }`}
        onClick={onClick}
      >
        <img src={icon} alt="Category Icon" className="w-5 h-5" />
        <span
          className={`text-center ${
            isSelected ? "text-white" : "text-black"
          }  text-base font-normal font-Poppins leading-snug`}
        >
          {label}
        </span>
      </div>
    );
  };