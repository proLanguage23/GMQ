import CommonForm from "@/components/contactForm/CommonForm";
import { TradeCourseSectionFour, TradeCourseSectionOne, TradeCourseSectionThree, TradeCourseSectionTwo } from "@/components/courses";
import { DynamicHead, VisitedForm } from "@/components/share";
import AppSliderBanner from "@/components/share/section/AppSliderBanner";
import TestimonialSection from "@/components/testimonial";
import { TradeCoursesBannerData } from "@/data/BannerData";
import { contactFormOfHome } from "@/data/ShareData";
import React from "react";
import GetYourSkillsRecognizedImg from '@/assets/GetYourSkillsRecognized.png'
import PopUpElement from "@/components/share/section/PopUpElement";

function TradeCoursesPage() {
  const popUpData = {
    type: "image",
    img : GetYourSkillsRecognizedImg,
    text: 'Get Your Skills Recognized',
    href: '/rpl/get-your-skills-recognized'
  }
  return (
    <>
      <DynamicHead title="List of Top IT Courses in Global for International Students | Pathways to PR  - GMQ Global" />
      <AppSliderBanner data={TradeCoursesBannerData} />
      <TradeCourseSectionOne />
      <TradeCourseSectionTwo />
      <TradeCourseSectionFour />
      {/* <CommonForm /> */}
      {/* <TestimonialSection /> */}
      {/* <PopUpElement data={popUpData} /> */}
    </>
  );
}

export default TradeCoursesPage;
