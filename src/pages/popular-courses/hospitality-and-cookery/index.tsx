import CommonForm from "@/components/contactForm/CommonForm";
import CookeryCoursesSectionFour from "@/components/courses/popular-courses/CookeryCourse/CookeryCoursesSectionFour";
import CookeryCoursesSectionOne from "@/components/courses/popular-courses/CookeryCourse/CookeryCoursesSectionOne";
import CookeryCoursesSectionThree from "@/components/courses/popular-courses/CookeryCourse/CookeryCoursesSectionThree";
import CookeryCoursesSectionTwo from "@/components/courses/popular-courses/CookeryCourse/CookeryCoursesSectionTwo";
import { DynamicHead, VisitedForm } from "@/components/share";
import AppSliderBanner from "@/components/share/section/AppSliderBanner";
import TestimonialSection from "@/components/testimonial";
import {
  CookeryCoursesInAustraliaBannerData,
  CookeryCoursesInAustraliaMobileBannerData,
} from "@/data/BannerData";
import { contactFormOfHome } from "@/data/ShareData";
import React from "react";
import GetYourSkillsRecognizedImg from "@/assets/GetYourSkillsRecognized.png";
import PopUpElement from "@/components/share/section/PopUpElement";
import CookeryCoursesAboutSection from "@/components/courses/popular-courses/CookeryCourse/CookeryCoursesAboutSection";
import { CookeryCoursesWhyPursueSection } from "@/components/courses";

function CookeryCoursesInAustraliaPage() {
  const popUpData = {
    type: "image",
    img: GetYourSkillsRecognizedImg,
    text: "Get Your Skills Recognized",
    href: "/rpl/get-your-skills-recognized",
  };
  return (
    <>
      <DynamicHead
        title="Cookery Courses in Australia: Top Colleges &amp; Universities, Fees, Prospects | Cooking Courses - GMQ Global"
        description="Cookery Courses in Australia: Top Colleges &amp; Universities, Fees, Prospects | Cooking Courses - GMQ Global"
      />
      <div className="hidden md:block">
        <AppSliderBanner data={CookeryCoursesInAustraliaBannerData} />
      </div>
      <div className="block md:hidden">
        <AppSliderBanner data={CookeryCoursesInAustraliaMobileBannerData} />
      </div>
      <CookeryCoursesSectionOne />
      <CookeryCoursesAboutSection />
      <CookeryCoursesWhyPursueSection />
      {/* <CookeryCoursesSectionTwo /> */}
      <CookeryCoursesSectionThree />
      {/* <CookeryCoursesSectionFour /> */}
      {/* <CommonForm /> */}
      {/* <TestimonialSection /> */}
    </>
  );
}

export default CookeryCoursesInAustraliaPage;
