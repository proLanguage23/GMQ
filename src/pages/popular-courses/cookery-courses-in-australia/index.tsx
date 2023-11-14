import CommonForm from "@/components/contactForm/CommonForm";
import CookeryCoursesSectionOne from "@/components/courses/popular-courses/CookeryCourse/CookeryCoursesSectionOne";
import CookeryCoursesSectionTwo from "@/components/courses/popular-courses/CookeryCourse/CookeryCoursesSectionTwo";
import { DynamicHead } from "@/components/share";
import AppSliderBanner from "@/components/share/section/AppSliderBanner";
import TestimonialSection from "@/components/testimonial";
import { CookeryCoursesInAustraliaBannerData } from "@/data/BannerData";
import React from "react";

function CookeryCoursesInAustraliaPage() {
  return (
    <>
      <DynamicHead title="Cookery Courses in Australia: Top Colleges &amp; Universities, Fees, Prospects | Cooking Courses - GMQ Global" />
      <AppSliderBanner data={CookeryCoursesInAustraliaBannerData} />
      <CookeryCoursesSectionOne />
      <CookeryCoursesSectionTwo />
      <CommonForm />
      <TestimonialSection />
    </>
  );
}

export default CookeryCoursesInAustraliaPage;
