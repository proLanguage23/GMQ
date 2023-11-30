import CommonForm from "@/components/contactForm/CommonForm";
import CookeryCoursesSectionFour from "@/components/courses/popular-courses/CookeryCourse/CookeryCoursesSectionFour";
import CookeryCoursesSectionOne from "@/components/courses/popular-courses/CookeryCourse/CookeryCoursesSectionOne";
import CookeryCoursesSectionThree from "@/components/courses/popular-courses/CookeryCourse/CookeryCoursesSectionThree";
import CookeryCoursesSectionTwo from "@/components/courses/popular-courses/CookeryCourse/CookeryCoursesSectionTwo";
import { DynamicHead, VisitedForm } from "@/components/share";
import AppSliderBanner from "@/components/share/section/AppSliderBanner";
import TestimonialSection from "@/components/testimonial";
import { CookeryCoursesInAustraliaBannerData } from "@/data/BannerData";
import { contactFormOfHome } from "@/data/ShareData";
import React from "react";

function CookeryCoursesInAustraliaPage() {
  
  return (
    <>
      <DynamicHead title="Cookery Courses in Australia: Top Colleges &amp; Universities, Fees, Prospects | Cooking Courses - GMQ Global" description="Cookery Courses in Australia: Top Colleges &amp; Universities, Fees, Prospects | Cooking Courses - GMQ Global" />
      <AppSliderBanner data={CookeryCoursesInAustraliaBannerData} />
      <CookeryCoursesSectionOne />
      <CookeryCoursesSectionTwo />
      <CookeryCoursesSectionThree />
      <CookeryCoursesSectionFour />
      <CommonForm />
      <TestimonialSection />
      <VisitedForm data={contactFormOfHome} />
    </>
  );
}

export default CookeryCoursesInAustraliaPage;
