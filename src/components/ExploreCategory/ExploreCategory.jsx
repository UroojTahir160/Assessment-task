import React from "react";
import collegesAndUniversities from "../../assets/images/exploreCategories/collegesAndUniversities.png";
import coursesAndClasses from "../../assets/images/exploreCategories/coursesAndClasses.png";
import educationalServices from "../../assets/images/exploreCategories/educationalServices.png";
import languageLearning from "../../assets/images/exploreCategories/languageLearning.png";
import musicAndTheater from "../../assets/images/exploreCategories/musicAndTheater.png";
import vacationalTrainingCenter from "../../assets/images/exploreCategories/vacationalTrainingCenter.png";

export const ExploreCategory = () => {
  const exploreCategoriesCardsContent = [
    {
      label: "Colleges & Universities",
      icon: collegesAndUniversities,
    },
    {
      label: "Courses & Classes",
      icon: coursesAndClasses,
    },
    {
      label: "Educational Services",
      icon: educationalServices,
    },
    {
      label: "Language Learning",
      icon: languageLearning,
    },

    {
      label: "Music & Theater Classes",
      icon: musicAndTheater,
    },

    {
      label: "Vocational Training Center",
      icon: vacationalTrainingCenter,
    },

    {
      label: "Degree Center",
      icon: collegesAndUniversities,
    },
    {
      label: "More Information",
      icon: coursesAndClasses,
    },
  ];

  return (
    <div className="container mx-auto mt-[80px]">
      <div className="text-black text-[40px] font-PoppinsBold  leading-[46.80px] text-center mb-[50px]">
        Explore Categories
      </div>
      <div className="grid grid-cols-4 gap-x-8 gap-y-4">
        {exploreCategoriesCardsContent.map((item, index) => (
          <div
            key={index}
            className=" bg-white rounded-[10px] border border-primary-violet-900 border-opacity-10 p-5 flex flex-col gap-5 items-center"
          >
            <div className="w-[90px] h-[90px] bg-primary-violet-900 bg-opacity-10 rounded-full flex items-center justify-center">
              <img
                className="w-[45px] h-[45px] rounded-full"
                src={item.icon}
                alt="Category Icon"
              />
            </div>
            <div className="text-center text-black text-lg font-semibold">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
