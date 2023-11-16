import CommonForm from "@/components/contactForm/CommonForm";
import { TradeCourseSectionFour, TradeCourseSectionOne, TradeCourseSectionThree, TradeCourseSectionTwo } from "@/components/courses";
import { DynamicHead } from "@/components/share";
import AppSliderBanner from "@/components/share/section/AppSliderBanner";
import TestimonialSection from "@/components/testimonial";
import { TradeCoursesBannerData } from "@/data/BannerData";
import React from "react";

function TradeCoursesPage() {
  return (
    <>
      <DynamicHead title="List of Top IT Courses in Global for International Students | Pathways to PR  - GMQ Global" />
      <AppSliderBanner data={TradeCoursesBannerData} />
      <TradeCourseSectionOne />
      <TradeCourseSectionTwo />
      <TradeCourseSectionThree />
      <TradeCourseSectionFour />
      <CommonForm />
      <TestimonialSection />
    </>
  );
}

export default TradeCoursesPage;
