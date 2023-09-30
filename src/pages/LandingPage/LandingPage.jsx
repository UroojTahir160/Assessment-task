import React from "react";
import { Navbar } from "../../layout/Navbar/Navbar";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { ExploreCategory } from "../../components/ExploreCategory/ExploreCategory";
import { LatestInternships } from "../../components/LatestInternships/LatestInternships";
import { CoursesWeOffer } from "../../components/CoursesWeOffer/CoursesWeOffer";
import { Footer } from "../../layout/Footer/Footer";

export const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ExploreCategory />
      <LatestInternships />
      <CoursesWeOffer />
      <Footer />
    </div>
  );
};
